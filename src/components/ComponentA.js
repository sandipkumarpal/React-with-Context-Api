import React, { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

const ComponentA = ({ name }) => {
  const { count } = useContext(CounterContext);
  return (
    <div>
      ComponentA {name} {count}
    </div>
  );
};

export default ComponentA;
