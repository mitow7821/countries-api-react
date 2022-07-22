import { ProgressSpinner } from "primereact/progressspinner";
import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import DataColumn from "../components/DataColumn";
import DetailBorders from "../components/DetailBorders";
import { nameAsSnakeCase } from "../helpers/convertName";
import useCountryDetails from "../hooks/useCountryData";
import { CountriesType } from "../types";

export default function Detail({ countries }: { countries: CountriesType }) {
  const { countryName } = useParams();
  const country = countries?.find(
    (e) => nameAsSnakeCase(e.name?.common) === countryName
  );

  const getCountryNameByCCA3 = (cca3: string) =>
    countries?.find((c) => c.cca3 === cca3)?.name?.common;

  const countryDetails = useCountryDetails(country);

  return (
    <div className="page-padding | py-8 min-h-full bg-light flex flex-col gap-6 dark:bg-dark">
      {country ? (
        <>
          <BackButton />

          <div className="grid grid-cols-1 gap-5  sm:gap-10 lg:gap-20 w-full pt-10 lg:grid-cols-2">
            <img
              src={country.flags.svg}
              className="w-full shadow dark:shadow-[#252525] xl:w-4/5"
            />

            <div className="self-center flex flex-col gap-9">
              <h2 className="text-3xl font-bold leading-6">
                {country.name.common}
              </h2>

              <div className="grid grid-cols-1 gap-8 md:gap-3 md:grid-cols-2">
                {countryDetails.map((columnData, index) => (
                  <DataColumn
                    data={columnData}
                    key={index}
                    className="!gap-2"
                  />
                ))}
              </div>

              <DetailBorders
                borders={country.borders}
                getCountryNameByCCA3={getCountryNameByCCA3}
              />
            </div>
          </div>
        </>
      ) : (
        <div className="grid place-content-center grow">
          <ProgressSpinner />
        </div>
      )}
    </div>
  );
}
