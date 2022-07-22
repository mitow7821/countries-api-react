import { useState } from "react";
import { ProgressSpinner } from "primereact/progressspinner";
import Countries from "../components/Countries";
import { CountriesType } from "../types";
import useCountriesFilters from "../hooks/useCountriesFilters";
import HomeFilters from "../components/HomeFilters";

export default function Home({ countries }: { countries: CountriesType }) {
  const [searchValue, setSearchValue] = useState("");
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);

  const displayedCountries = useCountriesFilters(
    countries,
    searchValue,
    selectedRegion
  );

  return (
    <div className="page-padding | py-8 min-h-full bg-light flex flex-col gap-6 dark:bg-dark">
      <HomeFilters
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        selectedRegion={selectedRegion}
        setSelectedRegion={setSelectedRegion}
      />

      {countries ? (
        <Countries countries={displayedCountries} />
      ) : (
        <div className="grid place-content-center grow">
          <ProgressSpinner />
        </div>
      )}
    </div>
  );
}
