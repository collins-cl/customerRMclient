import "./App.css";
import SideBar from "./Components/Sidebar/SideBar";
import { CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useMemo } from "react";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Visitors from "./Pages/Visitors/Visitors";
import NewCustomer from "./Pages/NewCustomer/NewCustomer";


const initialState = !!JSON.parse(localStorage.getItem("theme"));

function App() {
  const [darkmode, setDarkmode] = useState(initialState);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkmode ? "dark" : "light",
        },
      }),
    [darkmode]
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

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div className="App">
          <SideBar theme={theme} toggle={colorMode.themeToggler} />
          <div className="otherside">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/customers" element={<Visitors />} />
              <Route path="/customers/createnew" element={<NewCustomer />} />
            </Routes>
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
