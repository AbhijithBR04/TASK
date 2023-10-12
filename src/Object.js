import { useState } from "react";
function Objectnew(){

    const [person, setPerson] = useState({
        name: 'ABHI',
        age: 20,
        message: 'Random Message',
    });

    const changeMessage = () => {
        setPerson({ ...person, message: 'Hello World' });
    };

    return (
        <div>
            <h3>{person.name}</h3>
            <h3>{person.age}</h3>
            <h4>{person.message}</h4>
            <button className='btn' onClick={changeMessage}>
                Change message
            </button>
        </div>
    );
}; 

export default Objectnew;