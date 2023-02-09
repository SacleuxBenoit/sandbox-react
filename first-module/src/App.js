import './App.css';
import { useState } from 'react';

function App() {

  let [count, setCount] = useState(0);

  let increaseCount = () => {
    setCount(count + 1);
  }

  let decreaseCount = () => {
    setCount(count - 1);
  }

  let reset = () => {
    setCount(0)
  }

  return (
    <div className="App">
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
      <button onClick={reset}>Reset</button>
      {count}
    </div>
  );
}
export default App;
