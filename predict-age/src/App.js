import './App.css';
import Axios from "axios";
import { useState, useEffect } from "react";

function App() {
  let [username, setUsername] = useState("")
  let [predictedAge, setPredictedAge] = useState(null);

  const fetchData = () => {
    Axios.get(`https://api.agify.io/?name=${username}`).then((res) => {
      setPredictedAge(res.data)
    })
  }
  return (
    <div className="App">
      <input 
        placeholder="exemple : Benoît"
        onChange={(event) => {setUsername(event.target.value)}} 
      />
      <button onClick={fetchData}>Predict age</button>

      <h1>Name : {predictedAge?.name}</h1>
      <h1>Count : {predictedAge?.count}</h1>
      <h1>Predicted age : {predictedAge?.age}</h1>
    </div>
  );
}

export default App;
