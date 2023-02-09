# Increase number with button

```js
import './App.css';
import { useState } from 'react';

function App() {
  let [number, setNumber] = useState(0) // init variable "number" which is equal to 0
  
  let increaseNumber = () => {
    setNumber(number + 1) // increase number by 1
}
  return (
    <div className="App">
      {number}
      <button onClick={increaseNumber}>Click to increase</button>
    </div>
  );
}

export default App;
```