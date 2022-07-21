import { useMemo } from "react";
import { CountriesType, CountryType } from "../types";

export default function useCountriesFilters(
  allCountries: CountriesType,
  searchValue: string,
  selectedRegion: string | null
): CountryType[] {
  const filterBySearch = (name: string | undefined) =>
    name && name.toLowerCase().includes(searchValue.toLowerCase());

  const filterByRegion = (region: string | undefined) =>
    selectedRegion
      ? region && region.toLowerCase() === selectedRegion.toLowerCase()
      : true;

  const filterCoutries = () =>
    allCountries?.filter(
      (country) =>
        filterBySearch(country.name?.common) && filterByRegion(country.region)
    ) ?? [];

  return useMemo(filterCoutries, [allCountries, searchValue, selectedRegion]);
}
