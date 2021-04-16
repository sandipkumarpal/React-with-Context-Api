import React from "react";
import ComponentC from "./ComponentC";

const ComponentB = ({ name }) => {
  return (
    <>
      <div>ComponentB</div>
      <ComponentC name={name} />
    </>
  );
};

export default ComponentB;
