import { useState, useEffect } from 'react';
import ToDoList from './components/List/ToDoList';
import InputTask from './components/InputTask/InputTask';
import "./App.css"

const DUMMY_tasks = [];

function App() {
  
  const [enteredTasks,setTasks] = useState(DUMMY_tasks);
  
  useEffect(() => {
    fetch("http://127.0.0.1:8000/").then(
        response => response.json()
      ).then(
        data => {
          console.log(data)
          setTasks(data);
      })
  }, [])

  const changeTasks = (newTask) =>{
    setTasks([...newTask]);
  }
  
  return (
    <div className='wrapper'>
    <InputTask updateTasks={changeTasks} tasks={enteredTasks}/>
    <ToDoList updateTasks={changeTasks} items={enteredTasks}/>
    </div>
    );
  }
  
export default App;
      