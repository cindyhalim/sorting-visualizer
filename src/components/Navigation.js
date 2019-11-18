import React from "react";

export default function Navigation({
  arrayLength,
  updateArrayLength,
  updateArrayValues
}) {
  return (
    <div>
      <input
        type="range"
        min={0}
        max={50}
        onChange={event => {
          updateArrayLength(event.target.value);
          updateArrayValues(arrayLength);
        }}
      ></input>
      <button onClick={() => updateArrayValues(arrayLength)}>
        Randomize Array
      </button>
      <button>Merge Sort</button>
      <button>Quick Sort</button>
      <button>Heap Sort</button>
    </div>
  );
}
