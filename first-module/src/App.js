import './App.css';
import { User } from './User.js'
function App() {
  const users = [
    {
      name: "Pedro", age: 21
    },
    {
      name: "Jessica", age: 20
    },
    {
      name: "Jake", age: 22
    }
  ]

  return (
    <div className="App">
      <Job salary={90000} position="Senior SDE" company="Amazon" />
      <Job salary={12000} position="Junior SDE" company="Google" />
      <Job salary={10000} position="Project Manager" company="Netflix" />

      {users.map((user, key) => {
        return <User name={user.name} age={user.age}/>
      })}
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
