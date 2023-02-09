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
