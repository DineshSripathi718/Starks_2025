import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  // Increase count by 1
  const handleIncrease = () => setCount(count + 1);

  // Decrease count by 1
  const handleDecrease = () => setCount(count - 1);

  // Reset to 0
  const handleReset = () => setCount(0);

  return (
    <div className="app">
      <h1>Count Web Application</h1>
      <div className="counter">
        <h2>{count}</h2>
        <div className="buttons">
          <button onClick={handleIncrease}>Increase</button>
          <button onClick={handleDecrease}>Decrease</button>
          <button onClick={handleReset}>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default App;
