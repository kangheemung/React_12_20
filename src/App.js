import React,{ useState ,useEffect} from 'react';
import './App.css';
import H1 from './H1/H1';
import Test from './Test';
import Name from './H1/Name';
import Planets from './H1/Planets';
import Age from './H1/Age';
import Button from './H1/Button';
import User from './User/index';
import Axios from "axios";




function App() {
  const[catFact,setCatFact]=useState("");
  const [characterNames, setCharacterNames] = useState([]);
const fetchCatFact=() =>{
  Axios.get("https://swapi.dev/api/people/").then((res) =>{
  setCatFact(res.data.fact);
  });
}
useEffect(()=>{
  Axios.get("https://swapi.dev/api/people/").then((res) =>{
    const names = res.data.results.map(character => character.name)
    setCharacterNames(names);
  });
},[]);



 //{
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

  //const arr=["kang","nana", "james"]
  //const newArr =arr.filter((name)=>{
    //if (name === "kang"){
     // return false;
    //}else{
     // return true;
    //}
    const generateCatFact = () => {
      // Insert logic to fetch and update cat fact here
    };


  return (

    <div className="App">
      <button onClick={fetchCatFact}> generate Cat Fact</button>
      <p> {catFact}</p>
      <ul>
        {characterNames.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>

      <div className="addTask">
        <User />
        <Button />
        <Age />
        <H1 />
        <Test />
        <Name />
        <Planets />
      </div>
    </div>
  );
}

export default App;
