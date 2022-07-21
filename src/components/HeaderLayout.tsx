import { useState } from "react";
import useDarkMode from "../hooks/useDarkMode";

export default function HeaderLayout({ children }: { children: JSX.Element }) {
  const [darkMode, setDarkMode] = useState(false);

  useDarkMode(darkMode);

  return (
    <div className="flex flex-col h-full overflow-hidden">
      <div className="page-padding | flex justify-between bg-gray-200 py-4 shadow-md z-10">
        <h1 className="text-xl font-bold text-darker">Where in the world?</h1>

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
