import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeaderLayout from "./components/HeaderLayout";
import { CountriesType } from "./types";
import Detail from "./views/Detail";
import Home from "./views/Home";

export default function App() {
  const [countries, setCountries] = useState<CountriesType>(null);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((e) => e.json())
      .then((res) => setCountries(res));
  });

  return (
    <HeaderLayout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home countries={countries} />} />
          <Route
            path="/:countryName"
            element={<Detail countries={countries} />}
          />
        </Routes>
      </BrowserRouter>
    </HeaderLayout>
  );
}
