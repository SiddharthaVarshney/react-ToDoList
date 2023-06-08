import React, {useState} from "react";
import "./InputTask.css";

const InputTask = (props) => {

    const [task,setTask] = useState("")

    const clicked = () => {

        props.updateTasks([...props.tasks, task]);
    }

    return (
        <div>
            <input type="text" placeholder='Add task' onChange={(event)=> setTask(event.target.value)}/>
            <button onClick={clicked}>Add</button>
        </div>
    );
}

export default InputTask;