import { Link, useLocation } from "react-router-dom";
import { nameAsPath } from "../helpers/convertName";

interface Props {
  borders: string[] | undefined;
  getCountryNameByCCA3: (cca3: string) => string | undefined;
}

export default function DetailBorders({
  borders,
  getCountryNameByCCA3,
}: Props) {
  const location = useLocation();

  return (
    <>
      {borders?.length && (
        <div className="flex gap-3 mt-5 flex-col md:flex-row">
          <p className="font-semibold py-1 text-sm border-transparent border">
            Border Countries:
          </p>

          <div className="flex gap-3 flex-wrap text-sm">
            {borders.map((cca3) => {
              const countryName = getCountryNameByCCA3(cca3);
              const path = nameAsPath(countryName);

              return (
                <Link
                  key={cca3}
                  className="bg-white shadow border border-light rounded-sm py-1 px-7 dark:shadow-[#252525] dark:text-white dark:bg-primary dark:border-primary"
                  to={path}
                  state={location.pathname}
                >
                  {countryName}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}
