import './App.css';

function App() {
  return (
    <div className="App">
      <User name="pierre" age={42} surname="rock"/>
      <User name="paul" age={12} surname="popo"/>
      <User name="jack" age={23} surname="jack"/>
    </div>
  );
}

const User = (props) => {
  return(
    <div>
      <h1>{props.name}</h1>
      <h2>{props.age}</h2>
      <h3>{props.surname}</h3>
    </div>
  );
};
export default App;
