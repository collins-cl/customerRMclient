import "./App.css";
import Acknowledge from "./Components/Acknowledge/Acknowledge";
import Excite from "./Components/Excitement/Excite";
import Footer from "./Components/Footer/Footer";
import Nav from "./Components/Nav/Nav";
import Picks from "./Components/Picks/Picks";

function App() {
  return (
    <div className="App">
      {/* <Nav />
      <Acknowledge />
      <Picks />
      <Footer /> */}
      <Excite />
    </div>
  );
}

export default App;
