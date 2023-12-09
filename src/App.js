import React from 'react';
import './App.css';
import H1 from './H1/H1';
import Test from './Test';
import Name from './H1/Name';
import Planets from './H1/Planets';

function App() {
  const age = 20;
  const isGreen =false;

  // Removed the unnecessary return statement and fixed the condition rendering
  //let header;
  //if (age >= 18) {
   // header = <h1>IS OVER AGE</h1>;
  //} else {
   // header = <h1>"IS UNDER AGE"</h1>;
  //}

  // Corrected the ternary operator usage for log statements
  //age >= 18 ? console.log("HEHE") : console.log("good");

  return (
    <div className="App" style={{ backgroundColor: '#DBE5E6' }}>
      {/* {header} {/* Render the appropriate header based on the age condition */}
      {age>=18 ? <h1>OVER AGE</h1> : <h1>UNDER AGE</h1>}
      <h1 style={{color: isGreen ? "pink":"green"}}>THIS HAS COLOR</h1>{/* isGreanがtureであればpinkfalseであればgreen*/}
      {isGreen && <button> THIS IS A BUTTON</button>} {/* isGreanがtureであればボタンが見えますfalseであれば見えない*/}
      <h1 className="name">Kangpage</h1>
      <H1 />
      <Test />
      <Name />
      <Planets />
    </div>
  );
}

export default App;
