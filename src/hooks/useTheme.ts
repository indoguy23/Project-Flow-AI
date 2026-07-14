import { ThemeContext } from "@/context/ThemeProvider";
import { useContext } from "react";

const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used inside ThemeProvider");
  }

  return context;
};

export default useTheme;
