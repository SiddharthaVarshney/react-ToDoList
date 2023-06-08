// import ToDo from "./ToDo";
import ToDoListTask from "./ToDoListTask";

export default function ToDoList(props){
    const items = props.items;

    const update = (updatedTasks)=>{
        props.updateTasks(updatedTasks);
    }

    return (
        <div>
            {
                items.map((item)=> 
                    <ToDoListTask updateTasks={update} task={item} tasks={items}/>
                )
            }
        </div>
    );
}
