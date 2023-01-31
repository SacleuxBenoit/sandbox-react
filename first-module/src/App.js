import './App.css';

function App() {
  return (
    <div className="App">
      <Job salary={90000} position="Senior SDE" company="Amazon" />
      <Job salary={12000} position="Junior SDE" company="Google" />
      <Job salary={10000} position="Project Manager" company="Netflix" />
    </div>
  );
}

const Job = (props) => {
  return(
    <div>
    <p>The company is {props.company} your position will be {props.position} and the salary is {props.salary} dollars </p>
  </div>
  );
};
export default App;
