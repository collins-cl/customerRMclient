import { useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";

const initialState = !!JSON.parse(localStorage.getItem("theme"));

function useTheme() {
  const [darkmode, setDarkmode] = useState(initialState);

  const preference = useMediaQuery("(prefers-color-scheme : dark)");

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkmode || preference ? "dark" : "light",
        },
      }),
    [darkmode, preference]
  );

  const colorMode = useMemo(
    () => ({
      themeToggler: () => {
        setDarkmode((prevMode) => {
          localStorage.setItem("theme", !prevMode);
          return !prevMode;
        });
      },
    }),
    []
  );

  return {
    theme,
    colorMode,
  };
}

export default useTheme;
