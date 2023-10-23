import React, { createContext, useState } from 'react'
import Comp1 from './Comp1'



export const contone=createContext()
function Context() {
    const [counter,setCounter]=useState(0)
    return (
    <div>
            <contone.Provider value={{counter,setCounter}}>
                <Comp1/>
            </contone.Provider>

    </div>
  )
}

export default Context