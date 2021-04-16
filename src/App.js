import React, { useState } from "react";
import ComponentA from "./components/ComponentA";
import ComponentB from "./components/ComponentB";
import { CounterProviderContext } from "./context/CounterContext";
import "./styles.css";

export default function App() {
  const [name, setName] = useState("Sandip");
  return (
    <CounterProviderContext>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <ComponentA name={name} />
        <ComponentB name={name} />
      </div>
    </CounterProviderContext>
  );
}
