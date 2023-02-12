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

  let deleteTask = (taskName) => {
    setTodolist(todoList.filter((task) => task !== taskName));
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
            <div>
              <h1>{task}</h1>
              <button onClick={() => deleteTask(task)}>x</button>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;
