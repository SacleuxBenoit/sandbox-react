import './App.css';
import { useState } from 'react';

function App() {
  let [number, setNumber] = useState(0)

  let increaseNumber = () => {
    setNumber(number + 1)
}
  return (
    <div className="App">
      {number}
      <button onClick={increaseNumber}>Click to increase</button>
      {/* {planets.map((planet,key) => {
        if(planet.isGasPlanet){
          return <h1>{planet.name}</h1>
        }
      })} */}
    </div>
  );
}

// const Job = (props) => {
//   return(
//     <div>
//     <p>The company is {props.company} your position will be {props.position} and the salary is {props.salary} dollars </p>
//   </div>
//   );
// };
export default App;
