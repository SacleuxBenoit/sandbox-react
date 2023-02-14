import './App.css';
import Axios from "axios";
import { useState, useEffect } from "react"

function App() {
  let [catFacts, setCatFacts] = useState("");

  let fetchCatFacts = () => {
    Axios.get("https://catfact.ninja/fact").then((res) => {
      setCatFacts(res.data.fact)
    })
  }
  useEffect(() => {
    fetchCatFacts();
  }, [])

  return (
    <div className="App">
      <button onClick={fetchCatFacts}>Generate cat fact</button>
      <p>{catFacts}</p>
    </div>
  );
}

export default App;
