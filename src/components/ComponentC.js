import React from "react";
import { useCounterContext } from "../context/CounterContext";

const ComponentC = ({ name }) => {
  const { count } = useCounterContext();
  return (
    <>
      <div>
        ComponentC {name} {count}
      </div>
    </>
  );
};

export default ComponentC;
