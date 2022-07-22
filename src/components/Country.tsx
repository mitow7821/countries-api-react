import { Link, useLocation } from "react-router-dom";
import { nameAsPath } from "../helpers/convertName";
import { CountryType } from "../types";
import DataColumn from "./DataColumn";

export default function Country({ country }: { country: CountryType }) {
  const dataRows = [
    { name: "Population", value: country.population },
    { name: "Region", value: country.region },
    { name: "Capital", value: country.capital },
  ];

  const path = nameAsPath(country.name.common);
  const location = useLocation();

  return (
    <Link to={path} state={location.pathname}>
      <div className="bg-white shadow rounded-b cursor-pointer text-dark dark:text-white dark:bg-primary dark:shadow-[#252525]">
        <img
          src={country.flags.png}
          className="w-full mt-0 rounded-t shadow-sm aspect-[1.8] dark:shadow-[#252525]"
        />

        <div className="p-5 flex flex-col gap-4 h-48">
          <h2 className="text-lg font-bold leading-6">{country.name.common}</h2>

          <DataColumn data={dataRows} />
        </div>
      </div>
    </Link>
  );
}
