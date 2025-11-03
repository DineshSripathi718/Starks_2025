import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);


  const increase = () => setCount((prev) => prev + 1);
  const decrease = () => setCount((prev) => prev - 1);
  const reset = () => setCount(0);

 
  useEffect(() => {
    const handleKeyPress = (event) => {
      const key = event.key.toLowerCase();
      if (key === "i") increase();
      else if (key === "d") decrease();
      else if (key === "r") reset();
    };

   
    window.addEventListener("keydown", handleKeyPress);

    
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <div className="app">
      <h1>Count Web Application</h1>
      <p>Use your keyboard: <b>I</b> = Increase, <b>D</b> = Decrease, <b>R</b> = Reset</p>
      <div className="counter">
        <h2>{count}</h2>
        <div className="buttons">
          <button onClick={increase}>Increase</button>
          <button onClick={decrease}>Decrease</button>
          <button onClick={reset}>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default App;
