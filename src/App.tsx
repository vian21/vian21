import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Footer, NavBar } from "./components";

export default function App() {
  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    document
      .getElementById("root")
      ?.classList.add("dark", "h-screen", "text-white", "dark:bg-black");
  });

  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}
