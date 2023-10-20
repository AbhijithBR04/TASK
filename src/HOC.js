import React, { useState } from 'react'


function Updatedcomponent(Originalcomponent){
    function Newcomponent(){
        const[money,setMoney]=useState(10)
        const handleinc=()=>{
            setMoney(money *2)
        }
        return <Originalcomponent handleinc={handleinc} money={money}/>
    };
    
    return Newcomponent;
};

export default Updatedcomponent