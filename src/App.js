import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Proyects from "./components/Proyects";
import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleDown } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Proyects />
    </div>
  );
}

export default App;
