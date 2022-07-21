import { Link } from "react-router-dom";

export default function Country({ country }: { country: any }) {
  return (
    <Link to={`/${country.name.common.replaceAll(" ", "_").toLowerCase()}`}>
      <div className="bg-white p-10 shadow rounded cursor-pointer">
        <img src={country.flags.png} className="w-32" />

        {JSON.stringify(country.name.common)}
      </div>
    </Link>
  );
}
