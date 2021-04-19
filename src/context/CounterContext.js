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

const withCounter = (Component) => {
  const WithCounter = (props) => {
    return (
      <ContextConsumer>
        {({ count, increaseCounter, decreaseCounter }) => (
          <Component
            {...{ ...props, count, increaseCounter, decreaseCounter }}
          />
        )}
      </ContextConsumer>
    );
  };

  WithCounter.displayName = "WithCounter";

  return WithCounter;
};

const useCounterContext = () => {
  const { count, increaseCounter, decreaseCounter } = useContext(
    CounterContext
  );
  return { count, increaseCounter, decreaseCounter };
};

export {
  CounterContext,
  CounterProviderContext,
  useCounterContext,
  withCounter
};
