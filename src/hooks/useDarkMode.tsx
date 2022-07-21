import { useEffect } from "react";

export default function useDarkMode(darkMode: boolean) {
  useEffect(() => {
    const htmlElement = document.documentElement;

    htmlElement.classList.remove("dark");

    if (darkMode) {
      htmlElement.classList.add("dark");
    }
  }, [darkMode]);
}
