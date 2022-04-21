import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
function App() {
  const [color, setColor] = useState("red");
  const [checked,setIsChecked] = useState(false);
  const title = color === "red" ? "Change to blue" : "Change to red";
  return (
    <div className="App">
      <button
        style={{ backgroundColor: color }}
        disabled={checked}
        onClick={() => {
          setColor((color) => {
           return color === "red" ? "blue" : "red";
          });
        }}
      >
        {title}
      </button>
      <input type="checkbox" name="" id="" onChange={(e)=>{
            const checked = e.target.checked;
            setIsChecked(checked)
      }}/>
    </div>
  );
}

export default App;
