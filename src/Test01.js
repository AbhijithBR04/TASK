import React from 'react';
import { useState } from 'react';

function Test() {
    const [print,setPrint]=useState(false)
    const [gdata,setGdata]=useState(null)

    function getdata(e){
        setGdata(e.target.value)
        setPrint(false)
    }


  return (
    <div>
        {
            print?<h1>{gdata}</h1>:null
        }
        <input type="text" onChange={getdata} />
        <button onClick={()=>{setPrint(true)}}>value</button>
    </div>
  )
}

export default Test