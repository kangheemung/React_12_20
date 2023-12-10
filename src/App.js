import React,{ useState } from 'react';
import './App.css';
import H1 from './H1/H1';
import Test from './Test';
import Name from './H1/Name';
import Planets from './H1/Planets';
import Age from './H1/Age';
import Button from './H1/Button';

function App() {

  const [ todoList, setTodoList ] = useState([]);
  const [ newTask, setNewTask ] = useState("");

  const handleTodoChange = (event) => {
    setNewTask(event.target.value);
  };
const addTask=()=>{
  const task = {
    id :todoList.length === 0 ? 1:todoList[todoList.length - 1].id+1,
    taskName: newTask,

  }
  setTodoList([...todoList, task]);
};  //{
   // id:1,
    //taskName: "do homework"
 // }
  //["do homework"]
  // Removed the unnecessary return statement and fixed the condition rendering
  //let header;
  //if (age >= 18) {
   // header = <h1>IS OVER AGE</h1>;
  //} else {
   // header = <h1>"IS UNDER AGE"</h1>;
  //}

  // Corrected the ternary operator usage for log statements
  //age >= 18 ? console.log("HEHE") : console.log("good");
 //const addTask = () => {
  //setTodoList([...todoList, newTask]);
  //let arr=[]
  //const name= "Padro"
  //arr.push(name)
 //};
 const deleteTask = (id) => {
  setTodoList(todoList.filter((task) => task.id !== id));
  }
  //const arr=["kang","nana", "james"]
  //const newArr =arr.filter((name)=>{
    //if (name === "kang"){
     // return false;
    //}else{
     // return true;
    //}


  return (
    <div className="App" style={{ backgroundColor: '#DBE5E6' }}>
      {/* {header} {/* Render the appropriate header based on the age condition */}
        <div className = "addTast">
          <input onChange={handleTodoChange}/>
          <p><button onClick={addTask}> Add Task</button></p>
        </div>
        <div className = "list">
          {todoList.map((task) => {
            return(
            <div>
              <h1>{task.taskName}</h1>
              <button onClick={()=>deleteTask(task.id)}>X</button>
            </div>
          );
          })}
        </div>

      <Button />
      <Age />
      <H1 />
      <Test />
      <Name />
      <Planets />
    </div>
  );
}

export default App;
