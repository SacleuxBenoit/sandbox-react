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

# input change

```js
import './App.css';
import { useState } from 'react';

function App() {
  let [inputValue, setInputValue] = useState("");

  let handleInputChange = (e) => {
    setInputValue(e.target.value)
    console.log(e.target.value)
  }

  return (
    <div className="App">
      <input type="text" onChange={handleInputChange}/>
      {inputValue}
    </div>
  );
}
export default App;
```

# hide or display titles

```js
import './App.css';
import { useState } from 'react';

function App() {

  let [displayTitle, setDisplayTitle] = useState(true);

  let changeDisplayTitle = () => {
    setDisplayTitle(!displayTitle);
  }
  return (
    <div className="App">
      <button onClick={changeDisplayTitle}>Show / hide</button>
      {displayTitle && <h1>Hello World</h1>}
    </div>
  );
}
export default App;
```