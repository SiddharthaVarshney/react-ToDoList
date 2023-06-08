
import React from "react"
import "./ToDoListTask.css"

const ToDoListTask = (props) =>{

    const removeTask = () =>{
        
        props.updateTasks(props.tasks.filter(x => x!==props.task));
    }

    return (
        <div className="card">
            <h3>{props.task}</h3>
            <button onClick={removeTask}>Done</button>
        </div>
    );
}

export default ToDoListTask;