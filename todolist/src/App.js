import './App.css';
import { useState } from 'react' 
import { Task } from './Task'

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
            <Task 
              taskName={task.taskName}
              id={task.id}
              deleteTask={deleteTask}/>
          )
        })}
      </div>
    </div>
  );
}

export default App;
