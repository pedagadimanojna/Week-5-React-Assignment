import { createContext, useState } from "react";

export const ThemeContext = createContext();

export default function ThemeProvider({ children }) {
  const [dark, setDark] = useState(false);

  return (
    <ThemeContext.Provider value={{ dark, setDark }}>
      <div className={dark ? "dark" : ""}>
        <div className="bg-gray-100 dark:bg-gray-900 min-h-screen">
          {children}
        </div>
      </div>
    </ThemeContext.Provider>
  );
}
