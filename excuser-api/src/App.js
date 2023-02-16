import './App.css';
import Axios from "axios";
import { useState } from "react"

function App() {
  let [displayExcuse, setDisplayExcuse] = useState("")

  let fetchExcuse = (category) => {
    Axios.get(`https://excuser-three.vercel.app/v1/excuse/${category}`).then((res) => {
      setDisplayExcuse(res.data[0].excuse);
    })
  }
  return (
    <div className="App">
      <h1>Generate an excuse</h1>
      <button onClick={() => fetchExcuse("party")}>Party</button>
      <button onClick={() => fetchExcuse("family")}>Family</button>
      <button onClick={() => fetchExcuse("office")}>Office</button>

      <p>{displayExcuse}</p>
    </div>
  );
}

export default App;
