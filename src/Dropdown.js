import { useState } from "react"

function Dropdown(){

    const states=['Kerala','Tamil Nadu','Maharastra']
    const dist={'Kerala':['Trivandrum','Kollam','Idukki'],
                'Tamil Nadu':['Chennai','Coimbatore','Salem'],
                'Maharastra':['Nagpur','Pune','Thane']    }


    const [selectedone,setSelectedone]=useState("Kerala")
    console.log(selectedone)
    console.log()
    return(
           <div>
                    <select onChange={ (e)=>(setSelectedone(e.target.value))}>
                        {
                            states.map(states=>{
                                return <option>{states}</option>
                            })
                        }
                    </select>
                        
                    {selectedone && <select>
                        {
                        dist[selectedone].map(dist => {
                            return <option>{dist}</option>
                        })
                        }
                        </select>}
           </div>


);
}

export default Dropdown;