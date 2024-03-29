import { Link, useLocation } from "react-router-dom";
import useDarkMode from "../hooks/useDarkMode";

export default function HeaderLayout({ children }: { children: JSX.Element }) {
  const location = useLocation();
  const { darkMode, setDarkMode } = useDarkMode();

  return (
    <div className="flex flex-col h-full overflow-hidden text-darker dark:bg-primary dark:text-white">
      <div className="page-padding | flex justify-between bg-gray-200 py-4 shadow-md z-10">
        <Link className="text-xl font-bold" to="/" state={location.pathname}>
          Where in the world?
        </Link>

        <div
          onClick={() => setDarkMode((e) => !e)}
          className="cursor-pointer flex gap-1.5 items-center"
        >
          <i className={`${darkMode ? "fa-solid" : "fa-regular"} fa-moon `}></i>
          <span className="font-semibold">Dark Mode</span>
        </div>
      </div>

      <div className="grow overflow-auto">{children}</div>
    </div>
  );
}
