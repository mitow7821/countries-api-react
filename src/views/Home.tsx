import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { useState } from "react";
import { ProgressSpinner } from "primereact/progressspinner";
import Countries from "../components/Countries";
import { CountriesType } from "../types";
import useCountriesFilters from "../hooks/useCountriesFilters";

export default function Home({ countries }: { countries: CountriesType }) {
  const [searchValue, setSearchValue] = useState("");
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

  const displayedCountries = useCountriesFilters(
    countries,
    searchValue,
    selectedRegion
  );

  return (
    <div className="page-padding | py-8 min-h-full bg-light flex flex-col gap-6">
      <div className="flex justify-between">
        <span className="p-input-icon-left ">
          <i className="pi pi-search"></i>

          <InputText
            className="w-[400px]"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Search for a country..."
          />
        </span>

        <Dropdown
          className="w-[220px]"
          value={selectedRegion}
          options={regions}
          onChange={(e) => setSelectedRegion(e.value)}
          showClear={true}
          placeholder="Filter by Region"
        />
      </div>

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
