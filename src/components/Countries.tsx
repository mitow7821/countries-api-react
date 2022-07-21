import { CountryType } from "../types";
import Country from "./Country";
import NoCountries from "./NoCountries";

export default function Countries({ countries }: { countries: CountryType[] }) {
  return (
    <>
      {countries.length ? (
        <div className="grid-fill | grid gap-10 justify-between py-3">
          {countries.map((country, index) => (
            <Country country={country} key={index} />
          ))}
        </div>
      ) : (
        <NoCountries />
      )}
    </>
  );
}
