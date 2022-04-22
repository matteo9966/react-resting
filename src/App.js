import "./App.css";
import { useState } from "react";
export function replaceCamelWithSpaces(colorName){
  const re = /([A-Z])/g;  
  const replaced = colorName.replace(re,' $1');
  return replaced.trim();
}

function App() {
  const [color, setColor] = useState("MediumVioletRed");
  const [checked,setIsChecked] = useState(false);
  const title = color === "MediumVioletRed" ? "Change to blue" : "Change to red";
  const buttonColor = checked?'gray':color;
  return (
    <div className="App">
      <button
        style={{ backgroundColor: buttonColor }}
        disabled={checked}
        onClick={() => {
          setColor((color) => {
           return color === "MediumVioletRed" ? "MidnightBlue" : "MediumVioletRed";
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
