// import React, { useState, useRef } from 'react';
import './App.css';
 
// const App = () => {
  
//   const dragItem = useRef();
//   const dragOverItem = useRef();
//   const [list, setList] = useState(['Item 1','Item 2','Item 3','Item 4','Item 5','Item 6']);
 
//   const dragStart = (e, position) => {
//     dragItem.current = position;
//     console.log(e.target.innerHTML);
//   };
 
//   const dragEnter = (e, position) => {
//     dragOverItem.current = position;
//     console.log(e.target.innerHTML);
//   };
 
//   const drop = (e) => {
//     const copyListItems = [...list];
//     const dragItemContent = copyListItems[dragItem.current];
//     copyListItems.splice(dragItem.current, 1);
//     copyListItems.splice(dragOverItem.current, 0, dragItemContent);
//     dragItem.current = null;
//     dragOverItem.current = null;
//     setList(copyListItems);
//   };
 
//   return (
//     <>
//     {
//     list&&
//     list.map((item, index) => (
//       <div style={{backgroundColor:'lightblue', margin:'20px 25%', textAlign:'center', fontSize:'40px'}}
//         onDragStart={(e) => dragStart(e, index)}
//         onDragEnter={(e) => dragEnter(e, index)}
//         onDragEnd={drop}
//         key={index}
//         draggable>
//           {item}
//       </div>
//       ))}
//     </>
//   );
// };
// export default App;


import React from 'react'
import { useState ,useRef} from 'react';
import {AiTwotoneDelete} from 'react-icons/ai';
import {AiTwotoneEdit} from 'react-icons/ai'
// import style from './Custom.module.css';
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from 'react-hook-form';


const schema=yup.object().shape({
    text:yup.string().required(),
})


export default function App(){
  // const App = () => {
    const[todo,setTodo]=useState('')
    const[todos,setTodos]=useState([])
    const[editId,setEditId]=useState(0)
    const {handleSubmit}=useForm({resolver: yupResolver(schema)})
    const dragItem = useRef();
    const dragOverItem = useRef();
    

    const [dropAreaItems, setDropAreaItems] = useState([]);
    const dropToAnotherBox = (e) => {
      e.preventDefault();
      const copyListItems = [...todos];
      const dragItemContent = copyListItems[dragItem.current];
      copyListItems.splice(dragItem.current, 1);
      setTodos(copyListItems);
  
      // Add the dragged item to the new drop area
      setDropAreaItems([...dropAreaItems, dragItemContent]);
  
      dragItem.current = null;
      dragOverItem.current = null;
    };
  

    const dragStart = (e, position) => {
      dragItem.current = position;
      console.log(e.target.innerHTML);
    };
   
    const dragEnter = (e, position) => {
      dragOverItem.current = position;
      console.log(e.target.innerHTML);
    };
   
    const drop = (e) => {
      const copyListItems = [...todos];
      const dragItemContent = copyListItems[dragItem.current];
      copyListItems.splice(dragItem.current, 1);
      copyListItems.splice(dragOverItem.current, 0, dragItemContent);
      dragItem.current = null;
      dragOverItem.current = null;
      setTodos(copyListItems);
    };



    const addtodo=()=>{
        if(todo!==''){
            setTodos([...todos,{list: todo ,id:Date.now()}])
            console.log(todos)
            setTodo("")
        }
        if(editId){
            const edited=todos.find((todo)=>todo.id==editId)
            const updatetodo=todos.map((to)=>to.id===edited.id
            ?(to={id:to.id,list:todo})
            :(to={id:to.id,list:to.list}))
             setTodos(updatetodo)
             setEditId(0)
             setTodo('')
        }
    }



    const onDelete=(id)=>{
        setTodos(todos.filter((item)=>item.id!==id))
    }

    const onEdit=(id)=>{
       const edited= todos.find((item)=>item.id === id)
       setTodo(edited.list)
       setEditId(edited.id)
    }

    
  return (
   
      <div>
        <h1>TODO APP</h1>
        <form onSubmit={handleSubmit((data) => setTodos(data))}>
          <input
            type="text"
            value={todo}
            placeholder="Enter a task"
            onChange={(e) => setTodo(e.target.value)}
          />
          <button onClick={addtodo}>{editId ? "Edit" : "Add"}</button>
        </form>
        <div>
          {/* New drop area */}
          <div
            onDragOver={(e) => e.preventDefault()}
            onDrop={dropToAnotherBox}
            style={{
              border: "2px dashed #ccc",
              padding: "10px",
              margin: "20px 25%",
            }}
          >
            <h2>Drop Area</h2>
            <ul>
              {dropAreaItems.map((item, index) => (
                <div key={index}>
                  <li>{item.list}</li>
                </div>
              ))}
            </ul>
          </div>
    
          <ul>
            {todos.map((item, index) => (
              <div
                style={{
                  backgroundColor: "lightblue",
                  margin: "20px 25%",
                  textAlign: "center",
                  fontSize: "40px",
                }}
                onDragStart={(e) => dragStart(e, index)}
                onDragEnter={(e) => dragEnter(e, index)}
                onDragEnd={drop}
                key={item.id} // Use the item's ID as the key, not the index
                draggable
              >
                <li>{item.list}
                  <span>
                    <AiTwotoneEdit onClick={() => onEdit(item.id)} title="Edit" id="edit" />
                    <AiTwotoneDelete onClick={() => onDelete(item.id)} title="Delete" />
                  </span>
                </li>
              </div>
            ))}
          </ul>
        </div>
        <div>
          <ul>
            {dropAreaItems.map((item, index) => (
              <div
                style={{
                  backgroundColor: "lightblue",
                  margin: "20px 25%",
                  textAlign: "center",
                  fontSize: "40px",
                }}
                onDragStart={(e) => dragStart(e, index)}
                onDragEnter={(e) => dragEnter(e, index)}
                onDragEnd={drop}
                key={index}
                draggable
              >
                <li>{item.list}</li>
              </div>
            ))}
          </ul>
        </div>
      </div>
    );
}
// }
    // 
