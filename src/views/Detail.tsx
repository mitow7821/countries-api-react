import { ProgressSpinner } from "primereact/progressspinner";
import { useParams } from "react-router-dom";
import { CountriesType } from "../types";

export default function Detail({ countries }: { countries: CountriesType }) {
  const { countryName } = useParams();
  const country = countries?.find(
    (e) => e.name?.common.replaceAll(" ", "_").toLowerCase() === countryName
  );

  return (
    <div className="page-padding | py-8 min-h-full bg-light flex flex-col gap-6">
      {country ? (
        <img src={country.flags.png} className="w-32" />
      ) : (
        <div className="grid place-content-center grow">
          <ProgressSpinner />
        </div>
      )}
    </div>
  );
}
