import './App.css';
import { useState } from 'react' 

function App() {
  let [todoList, setTodolist] = useState([]);
  let [newTask, setNewTask] = useState("");

  const handleChange = (e) => {
    setNewTask(e.target.value);
  }

  let addTask = () => {
    let newTodolist = [...todoList, newTask];
    setTodolist(newTodolist);
    // setTodolist([...todoList, newTask]); Work same way as above
  }
  return (
    <div className="App">
      <div className="addTask">
        <input onChange={handleChange} />
        <button onClick={addTask}>Add task</button>
      </div>

      <div className="list">
        {todoList.map((task) => {
          return(
            <h1>{task}</h1>
          )
        })}
      </div>
    </div>
  );
}

export default App;
