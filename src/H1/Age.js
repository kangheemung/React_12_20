import React, { useState }from "react";

function Age(){
const [age, setAge]=useState(0);
const[inputValue,setInputValue] = useState("");
const [showText, setShowText] = useState("black");

const isGreen =false;
const increaseAge =()=>{
setAge(age+1);//クリックすると＋1に上がります。
console.log(age);
}
const handleInputChange=(event)=>{
setInputValue(event.target.value);
};
return (
    <div className="App" style={{ backgroundColor: '#DBE5E6' }}>
      {/* {header} {/* Render the appropriate header based on the age condition */}
      {age}
      <button
        onClick={() => {
        setShowText(showText === "black" ? "pink": "black");
       }}
        >
        hi click
        </button>
      <h1 style={{color: showText}}>안녕하세요. 웰컴투 페이지</h1>
      <button  onClick={increaseAge}>Increase Age</button>
      <input type ="text" onChange={ handleInputChange}/>
      {setInputValue}
      {age>=18 ? <h1>OVER AGE</h1> : <h1>UNDER AGE</h1>}
      <h1 style={{color: isGreen ? "pink":"green"}}>THIS HAS COLOR</h1>{/* isGreanがtureであればpinkfalseであればgreen*/}
      {isGreen && <button> THIS IS A BUTTON</button>} {/* isGreanがtureであればボタンが見えますfalseであれば見えない*/}
      <h1 className="name">Kangpage</h1>
      </div>
    );
}
export default Age;