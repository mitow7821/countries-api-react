import { useMemo } from "react";
import { CountryType } from "../types";

export default function useCountryDetails(country: CountryType | undefined) {
  const nativeName =
    country?.name?.nativeName &&
    Object.values(country.name.nativeName)
      .map((e) => e.common)
      .join(" / ");

  const currencies =
    country?.currencies &&
    Object.values(country.currencies)
      .map((e) => e.name)
      .join(", ");

  const languages =
    country?.languages && Object.values(country.languages).join(", ");

  const dataColumns = [
    [
      { name: "Native Name", value: nativeName },
      { name: "Population", value: country?.population },
      { name: "Region", value: country?.region },
      { name: "Sub Region", value: country?.subregion },
      { name: "Capital", value: country?.capital },
    ],
    [
      { name: "Top Level Domain", value: country?.tld?.join(", ") },
      { name: "Currencies", value: currencies },
      { name: "Languages", value: languages },
    ],
  ];

  return useMemo(() => dataColumns, [country]);
}
