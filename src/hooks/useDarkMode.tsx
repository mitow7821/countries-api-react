import { useEffect, useState } from "react";

function getDefaultDarkMode(): boolean {
  const lsItem = localStorage.getItem("darkMode");

  return lsItem ? JSON.parse(lsItem) : false;
}

export default function useDarkMode() {
  const [darkMode, setDarkMode] = useState(getDefaultDarkMode());

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    const htmlElement = document.documentElement;

    htmlElement.classList.remove("dark");

    if (darkMode) {
      htmlElement.classList.add("dark");
    }
  }, [darkMode]);

  return { darkMode, setDarkMode };
}
