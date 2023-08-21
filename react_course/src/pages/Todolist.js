import { useState } from "react";
import NavBar from "../components/NavBar";

export default function Todolist(){
    const [todolist, setTodolist] = useState([]);
    const [newTask, setNewTask] = useState("");

    const handleChange = (event) => {
        setNewTask(event.target.value);
    } 

    const addTask = () => {
        const newTodolist = [...todolist, newTask]
        setTodolist(newTodolist);
    }

    return(
        <>
            <NavBar />
            <div className="addTask">
                <input onChange={handleChange}/>
                <button onClick={addTask}>Add task</button>
            </div>

            <div className="list">
                {todolist.map((task) => {
                    return(<h1>{task}</h1>)
                })}
            </div>
        </>
    )
}