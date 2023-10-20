
import Updatedcomponent from './HOC'

function Person1({money,handleinc}){

  return (
    <div>
            <h3> MOney Increased Person1 : {money} </h3>
            <button onClick={handleinc}>click to increase</button>
    </div>
  )
}

export default Updatedcomponent(Person1)