import React, { useState } from "react";
import Navigation from "./components/Navigation";
import BarChart from "./components/BarChart";
import "./App.css";

function App() {
  const [arrayLength, setArrayLength] = useState(5);
  const [arrayValues, setArrayValues] = useState([5, 12, 7, 35, 22]);

  const updateArrayLength = newArrayLength => {
    setArrayLength(newArrayLength);
  };

  const randomizeArray = arrayLength => {
    const array = [];
    for (let i = 0; i <= arrayLength; i++) {
      array.push(Math.floor(Math.random() * 201));
    }
    return array;
  };

  const updateArrayValues = arrayLength => {
    const newArray = randomizeArray(arrayLength);
    setArrayValues(newArray);
  };
  return (
    <div>
      <h1>Sorting Visualizer</h1>
      <Navigation
        arrayLength={arrayLength}
        randomizeArray={randomizeArray}
        updateArrayLength={updateArrayLength}
        updateArrayValues={updateArrayValues}
      />
      <BarChart arrayValues={arrayValues} />
    </div>
  );
}

export default App;
