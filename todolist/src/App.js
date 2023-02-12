import './App.css';
import { useState } from 'react' 

function App() {
  let [todoList, setTodolist] = useState([]);
  let [newTask, setNewTask] = useState("");

  const handleChange = (e) => {
    setNewTask(e.target.value);
  }

  let addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask
    };

    let newTodolist = [...todoList, task];
    setTodolist(newTodolist);
    // setTodolist([...todoList, newTask]); Work same way as above
  }

  let deleteTask = (id) => {
    setTodolist(todoList.filter((task) => task.id !== id));
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
              <h1>{task.taskName}</h1>
              <button onClick={() => deleteTask(task.id)}>x</button>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;
