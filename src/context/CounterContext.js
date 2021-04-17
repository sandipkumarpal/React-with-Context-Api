import { createContext, useContext, useState } from "react";

const CounterContext = createContext();

const ContextProvider = CounterContext.Provider;
const ContextConsumer = CounterContext.Consumer;

const CounterProviderContext = (props) => {
  const { children } = props;
  const [count, setCount] = useState(0);

  const increaseCounter = () => setCount(count + 1);
  const decreaseCounter = () => setCount(count - 1);

  const value = { count, increaseCounter, decreaseCounter };
  return <ContextProvider value={value}>{children}</ContextProvider>;
};

const useCounterContext = () => useContext(CounterContext);

export {
  CounterContext,
  CounterProviderContext,
  useCounterContext,
  ContextConsumer
};
