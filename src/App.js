import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
function App() {
  const [color, setColor] = useState("red");
  const [checked,setIsChecked] = useState(false);
  const title = color === "red" ? "Change to blue" : "Change to red";
  const buttonColor = checked?'gray':color;
  return (
    <div className="App">
      <button
        style={{ backgroundColor: buttonColor }}
        disabled={checked}
        onClick={() => {
          setColor((color) => {
           return color === "red" ? "blue" : "red";
          });
        }}
      >
        {title}
      </button>
      <label htmlFor="checkbox-for-disable">Disable button</label>
      <input type="checkbox" name="Disable button" id="checkbox-for-disable"  onChange={(e)=>{
            const checked = e.target.checked;
            setIsChecked(checked)
      }}/>
    </div>
  );
}

export default App;
