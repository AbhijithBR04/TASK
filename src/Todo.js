import React from 'react'
import { useState } from 'react';
import {AiTwotoneDelete} from 'react-icons/ai';
import {AiTwotoneEdit} from 'react-icons/ai'
import style from './Custom.module.css';
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from 'react-hook-form';


const schema=yup.object().shape({
    text:yup.string().required(),
})



const Todo = () => {
    const[todo,setTodo]=useState('')
    const[todos,setTodos]=useState([])
    const[editId,setEditId]=useState(0)
    const {handleSubmit}=useForm({resolver: yupResolver(schema)})


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
        <form onSubmit={handleSubmit(todos=>{setTodos(todos)})}>
            <input type="text" value={todo} placeholder='Enter a task' onChange={(e)=>setTodo(e.target.value)} />
            <button onClick={addtodo}>{editId?"Edit":"Add"}</button>
        </form>
        <div>
            <ul>
                {
                    todos.map((item,index)=>(
                        <li>{item.list}
                            <span> 
                                <AiTwotoneEdit onClick={()=>onEdit(item.id)} title='Edit' id='edit' className={style.editicon}/>
                                <AiTwotoneDelete  onClick={()=>onDelete(item.id)} title='Delete'  className={style.deleteicon}/>
                            </span>
                        </li>
                    ))
                }
            </ul>
        </div>

    </div>
  );
};

export default Todo;