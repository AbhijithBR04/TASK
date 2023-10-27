import React, { useContext } from 'react'
import  {contone} from './Context'


function Comp1() {
const {counter , setCounter} = useContext(contone)

  return (
    <div>
        <h1>first value :{counter}</h1>
        <button onClick={()=>setCounter((counter) => counter+1)}>click {counter}
        </button>
    </div>
  )
}
  
export default Comp1