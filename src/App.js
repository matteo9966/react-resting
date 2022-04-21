import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
function App() {
  const [color, setColor] = useState("red");
  const title = color === "red" ? "Change to blue" : "Change to red";
  return (
    <div className="App">
      <button
        style={{ backgroundColor: color }}
        onClick={() => {
          setColor((color) => {
           return color === "red" ? "blue" : "red";
          });
        }}
      >
        {title}
      </button>
    </div>
  );
}

export default App;
