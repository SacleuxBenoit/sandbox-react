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
      taskName: newTask,
      isCompleted: false
    };

    let newTodolist = [...todoList, task];
    setTodolist(newTodolist);
    // setTodolist([...todoList, newTask]); Work same way as above
  }

  let completeTask = (id) => {
    setTodolist(
      todoList.map((task) => {
        if(task.id === id){
          return{...task, isCompleted: true}
        }else{
          return task
        }
      })
    )
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
              deleteTask={deleteTask}
              completTask={completeTask}
              isCompleted={task.isCompleted}
            />
          )
        })}
      </div>
    </div>
  );
}

export default App;
