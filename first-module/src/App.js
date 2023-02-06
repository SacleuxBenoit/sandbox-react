import './App.css';

function App() {
  const planets = [
    {name: "Mars", isGasPlanet: false},
    {name: "Earth", isGasPlanet: false},
    {name: "Jupiter", isGasPlanet: true},
    {name: "Venus", isGasPlanet: false},
    {name: "Neptune", isGasPlanet: true},
    {name: "Uranues", isGasPlanet: true},
];

  return (
    <div className="App">
      {planets.map((planet,key) => {
        if(planet.isGasPlanet){
          return <h1>{planet.name}</h1>
        }
      })}
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
