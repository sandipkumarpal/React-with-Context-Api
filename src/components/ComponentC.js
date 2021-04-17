import React from "react";
import { useCounterContext } from "../context/CounterContext";

const ComponentC = ({ name }) => {
  const { count, increaseCounter, decreaseCounter } = useCounterContext();
  return (
    <>
      <div>
        ComponentC {name} {count}
      </div>
      <div>
        <button onClick={increaseCounter}>Increase Counter</button>
        <button onClick={decreaseCounter}>Decrease Counter</button>
      </div>
    </>
  );
};

export default ComponentC;
