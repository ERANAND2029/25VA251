import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="container">
      <h1>React Counter App</h1>

      <h2>Counter Value: {count}</h2>

      <button onClick={increment}>+</button>

      <button onClick={decrement}>-</button>

      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default App;