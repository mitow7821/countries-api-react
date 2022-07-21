import Country from "./Country";
import NoCountries from "./NoCountries";

export default function Countries({ countries }: { countries: any[] }) {
  return (
    <>
      {countries.length ? (
        <div className="grid grid-cols-4 gap-5">
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
