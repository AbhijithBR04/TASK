
import Updatedcomponent from './HOC'

function Person2({money,handleinc}){
   
  return (
    <div>
            <h3> MOney Increased Person2: {money}</h3>
            <button onClick={handleinc}>click to increase</button>
    </div>
  )
}

export default Updatedcomponent(Person2)