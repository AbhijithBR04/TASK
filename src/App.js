import logo from './logo.svg';
import './App.css';
import User from './User';
import Student from './Student' ;
import Objectnew from './Object';
import { useState } from 'react';


function App() {
  const [name,setName]=useState("default value");  
  const [plus,setPlus]=useState(0)
  const [b,setBvalue]=useState([])

  function inc(){
    setPlus(plus+1)
  }

  function dec(){
    setPlus(plus-1)
  }
  

  return (
    <div className="App">
      <h1>app.js</h1>
      <Student name={name} email="rg@t.com"/>
      <Student name={"random name"} email="gg@t.com"/>
      <button onClick={()=>setName("updated value")} >click to update</button>     
      <div style={{background:"lightblue"}}>
        <h1>{plus}</h1>
        <button onClick={()=>inc(inc())} >click to increase</button>
        <button onClick={()=>dec(dec())} >click to decrease</button>
      </div>
      
      <h2>Array values {b.join(", ")}</h2>
      <button onClick={()=>{
        let a=[...b]
        a.push(parseInt(Math.random()*100))
        setBvalue(a)
      }}>Click to add numbers like an array</button>

      
    </div>
  );
}

export default App;
