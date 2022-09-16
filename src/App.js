import "./App.css";
import SideBar from "./Components/Sidebar/SideBar";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import useTheme from "./Custom/useTheme";

function App() {
  const { theme } = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <SideBar />
      </div>
    </ThemeProvider>
  );
}

export default App;
