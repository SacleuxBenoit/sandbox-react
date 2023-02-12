export let Task = (props) => {
    return(
        <div className="task" style={{ backgroundColor: props.isCompleted ? "green" : "white"}}>
          <h1>{props.taskName}</h1>
          <button onClick={() => props.completTask(props.id)}>complete</button>
          <button onClick={() => props.deleteTask(props.id)}>x</button>
        </div>
      )
}