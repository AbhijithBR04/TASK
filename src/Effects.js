import React, { createContext, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
const Effects = () => {
 const [counter,setCounter]=useState(0)
 const [calculation,setCalculation]=useState(0)


 //useref
 const inp=useRef();
 const inpt =()=>{
    inp.current.focus()
 }

 const prevs=useRef("")
 const [inputf,setInputf]=useState("")

    useEffect(()=>{
        setCalculation(()=>counter*2)
        console.log("render")
    },[counter]);
    
    useEffect(()=>{
        prevs.current=inputf
    },[inputf])

    return (
    <div style={{display:"block",gap:"16px"}}>
            <button onClick={()=>setCounter((c)=> c+1)}>+</button>
            <br />
            counter:{counter} <br />
            calculation:{calculation}

            <br />

            <input type="text" ref={inp}/>
            <button onClick={inpt}>click to focus</button>
            <br /><br />
            
            
            {/*ref hook to print 2nd string of first  */}
            <input type="text" ref={prevs} onChange={(e)=>setInputf(e.target.value)}/>
            <h5>first {inputf}</h5>
            <h5>second {prevs.current}</h5>

            <div style={{ border: '2px solid black'}} >
                <p>hello</p>
                {createPortal(
                    <p>helloe world</p>,document.body
                )}
            </div>
            
    </div>
  )
}

export default Effects