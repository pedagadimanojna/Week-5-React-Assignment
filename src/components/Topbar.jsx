import { Sun, Moon } from "lucide-react";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Topbar() {
  const { dark, setDark } = useContext(ThemeContext);

  return (
    <div className="ml-64 p-4 flex justify-between bg-white dark:bg-gray-800">
      <h2 className="font-semibold dark:text-white">Admin Dashboard</h2>

      <button onClick={() => setDark(!dark)}>
        {dark ? <Sun /> : <Moon />}
      </button>
    </div>
  );
}
