import { Link } from "react-router-dom";
import { CountryType } from "../types";

export default function Country({ country }: { country: CountryType }) {
  const dataRows = [
    { name: "Population", value: country.population },
    { name: "Region", value: country.region },
    { name: "Capital", value: country.capital },
  ];

  return (
    <Link to={`/${country.name.common.replaceAll(" ", "_").toLowerCase()}`}>
      <div className="bg-white shadow rounded-b cursor-pointer text-dark">
        <img
          src={country.flags.png}
          className="w-full mt-0 rounded-t shadow-sm aspect-[1.8]"
        />

        <div className="p-5 flex flex-col gap-4 h-48">
          <h2 className="text-lg font-bold leading-6">{country.name.common}</h2>

          <div className="flex flex-col gap-1 text-sm">
            {dataRows.map((row, index) => (
              <div key={index} className="flex gap-1">
                <p className="font-semibold">{row.name}:</p>
                <span>{row.value ?? "-"}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
