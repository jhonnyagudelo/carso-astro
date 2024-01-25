import React, { useState } from "react";

export const Counter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <span className="text-yellow-300">{counter}</span>
      <button
        className="border px-4 py-2 text-xl"
        onClick={() => setCounter(counter + 1)}
      >
        +1
      </button>
      <button
        className="border px-4 py-2 text-xl"
        onClick={() => setCounter(counter - 1)}
      >
        -1
      </button>
    </>
  );
};
