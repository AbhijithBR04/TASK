import { useForm } from "react-hook-form";
import style from './custom.module.css'

function Hookform(){
const {register,handleSubmit,formState:{errors},watch}=useForm()
console.log("errors",errors)
const fname=watch("fname")

    return(
        <div style={{backgroundColor:"skyblue",display:'flex',alignItems:'center',justifyContent:'center',height:'200vh'}} >
            <form onSubmit={handleSubmit((data)=>{console.log(data)})}>
                <h1>HOOK FORM</h1>
                <input {...register("fname",{required:"This field is required",maxLength:20})} placeholder="Enter your name" className={style.sid}/>
                <p>{errors.fname?.message}</p>
                <input  className={style.sid} type="email"{...register("email",{required:"This field is required" , minLength:{value :4, message:"min length is 4"}}) }  placeholder="Enter your email"/>
                <p>{errors.email?.message}</p>
                <input className={style.sid} {...register("number", {required:"This field is required",minLength:{value:10,message:"Enter a valid number"}})} placeholder="Enter your Phone Number"/>
                <p>{errors.number?.message}</p>
                <input  className={style.sid} type="date"{...register("dob",{required:"date of birth is required"})}/>
                <p>{errors.dob?.message}</p>
                <label  >Gender: </label>
                <select {...register("gender")}>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
                <p></p>
                <label  >Filled all details?</label>
                <input   {...register("checkbox",{required:"check before submitting"})}type="checkbox"/>
                <p>{errors.checkbox?.message}</p>
                <br />
                <button type="submit"  style={{font: "inherit",cursor: "pointer",color: "black"
                    ,border: "1px solid #77002e",backgroundColor: "transparent",padding: "0.5rem 1.5rem",
                     borderRadius: "4px"}}>submit</button>
            </form>
        </div>
    )
}

export default Hookform;