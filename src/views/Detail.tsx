import { ProgressSpinner } from "primereact/progressspinner";
import { useParams, Link } from "react-router-dom";
import BackButton from "../components/BackButton";
import { CountriesType } from "../types";

export default function Detail({ countries }: { countries: CountriesType }) {
  const { countryName } = useParams();
  const country = countries?.find(
    (e) => e.name?.common.replaceAll(" ", "_").toLowerCase() === countryName
  );

  const getCountryNameByCCA3 = (cca3: string) =>
    countries?.find((c) => c.cca3 === cca3)?.name?.common;

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

  return (
    <div className="page-padding | py-8 min-h-full bg-light flex flex-col gap-6">
      {country ? (
        <>
          <BackButton />

          <div className="grid grid-cols-2 gap-20 w-full pt-10">
            <img src={country.flags.svg} className="w-4/5  shadow" />

            <div className="self-center flex flex-col gap-9">
              <h2 className="text-3xl font-bold leading-6">
                {country.name.common}
              </h2>

              <div className="grid grid-cols-2">
                {dataColumns.map((columnData, index) => (
                  <div className="flex flex-col gap-2 text-sm" key={index}>
                    {columnData.map((row) => (
                      <div key={row.name} className="flex gap-1">
                        <p className="font-semibold">{row.name}:</p>
                        <span>{row.value ?? "-"}</span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>

              {country.borders?.length && (
                <div className="flex gap-3 mt-5">
                  <p className="font-semibold py-1 text-sm border-transparent border">
                    Border Countries:
                  </p>
                  <div className="flex gap-3 flex-wrap text-sm">
                    {country.borders.map((cca3) => {
                      const countryName = getCountryNameByCCA3(cca3);
                      const path = countryName
                        ?.replaceAll(" ", "_")
                        .toLowerCase();

                      return (
                        <Link
                          className="bg-white shadow border border-light rounded-sm py-1 px-7"
                          to={`/${path ?? ""}`}
                        >
                          {countryName}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
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
