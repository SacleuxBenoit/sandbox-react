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
