import { useForm } from "react-hook-form";
import style from './custom.module.css'
import { useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema=yup.object().shape({
    fullname:yup.string().required(),
    email:yup.string().email().required(),
    number:yup.string().min(10).max(12).required(),
    dob:yup.date().required("select a valid date"),
    gender:yup.string().required("please select a gender"),
    state:yup.string().required("its required"),
    district:yup.string().required("choose a district")
})


function Hookform(){
const {register,handleSubmit,formState:{errors},watch}=useForm({resolver: yupResolver(schema)})
console.log("errors",errors)
const fullname=watch("fullname")
const email=watch("email")
const pnumber=watch("number")
const dob=watch("dob")
const gender=watch("gender")
const state=watch("state")
const district=watch("dist")

//dropdown
    const states=['Kerala','Tamil Nadu','Maharastra']
    const dist={'Kerala':['Trivandrum','Kollam','Idukki'],
                'Tamil Nadu':['Chennai','Coimbatore','Salem'],
                'Maharastra':['Nagpur','Pune','Thane']    }
         
    const [selectedone,setSelectedone]=useState("Kerala")
    const [selectedtwo,setSelectetwo]=useState("Trivandrum")

    console.log(selectedtwo)
    console.log(selectedone)
    

const[userdata,setUserdata]=useState()


    return(
        <div>
            <div style={{backgroundColor:"skyblue",display:'flex',alignItems:'center',justifyContent:'center',height:'150vh'}} >
                <form onSubmit={handleSubmit((data)=>{setUserdata(data) 
                    console.log(userdata)})}>
                    <h1>HOOK FORM</h1>
                    <input {...register("fullname")} placeholder="Enter your name" className={style.sid}/>
                    <p>{errors.fullname?.message}</p>
                    <input  className={style.sid} type="email"{...register("email")} placeholder="Enter your email"/>
                    <p>{errors.email?.message}</p>
                    <input className={style.sid} {...register("number")} placeholder="Enter your Phone Number"/>
                    <p>{errors.number?.message}</p>
                    <label>D.O.B: </label>
                    <input  className={style.sid} type="date"{...register("dob")}/>
                    <p>{errors.dob?.message}</p>
                    <label  >Gender: </label>
                    <select {...register("gender")} className={style.sid}>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                    <p>{errors.gender?.message}</p>
                    <p></p>
                    <br />
                
                    <label>Select your State and District </label>
                    
                    <br /><br />
                    <select {...register("state")} onChange={ (e)=>(setSelectedone(e.target.value))} className={style.sid}>
                        {
                            states.map(states=>{
                                return <option>{states}</option>
                            })
                        }
                    </select>
                    <p>{errors.state?.message}</p>
                        
                    {selectedone && <select  {...register("district")} onChange={(e)=>(setSelectetwo(e.target.value))} className={style.sid}>
                        {
                        dist[selectedone].map(dist => {
                            return <option>{dist}</option>
                        })
                        }
                        </select>}
                    <br />
                    <br />
                    <label  >Filled all details?</label>
                    <input   {...register("checkbox",{required:"check before submitting"})}type="checkbox"/>
                    <p>{errors.checkbox?.message}</p>
                    <button  type="submit"  style={{font: "inherit",cursor: "pointer",color: "black"
                        ,border: "1px solid #77002e",backgroundColor: "transparent",padding: "0.5rem 1.5rem",
                        borderRadius: "4px"}}>submit</button>
                </form>
            </div>
            {userdata? <div style={{alignItems:'center',justifyContent:'center',height:'100vh'}}>
                            <h3>name: {userdata.fullname}</h3>                           
                            <h3>Email: {userdata.email}</h3>                           
                            <h3>Phone number: {userdata.number}</h3>                           
                            <h3>DOB: {userdata.dob}</h3>
                            <h3>Gender: {userdata.gender}</h3>
                            <h4>State: {selectedone}</h4>
                            <h4>District : {selectedtwo}</h4>
                        </div>
                    :null}
                    
        </div>
    )
}

export default Hookform;