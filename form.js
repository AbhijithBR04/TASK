
function Final(){
    const[fname,setName]=React.useState("")
    const[email,setEmail]=React.useState("")
    const[phone_number,setPhone_number]=React.useState("")
    const[svalue,setSvalue]=React.useState("M")

    const[fnameerr,setNameerr ]=React.useState(false)
    const namehandle =(e)=>{
        let item=e.target.value
        if(item.length<3){
            setNameerr(true)
        }
        else{
            setNameerr(false)
        }
        setName(item)
    }
    const[emailerr,setEmailerr]=React.useState(false)
    const emailhandle=(e)=>{
        let item=e.target.value
        if(item.length<5){
            setEmailerr(true)
        }
        else{
            setEmailerr(false)
        }
        setEmail(item)
    }
    const[phone_numbererr,setPhone_numbererr]=React.useState(false)
    const phhandle=(e)=>{
        let item=e.target.value
        if(item.length<10){
            setPhone_numbererr(true)
        }
        else{
            setPhone_numbererr(false)
        }
        setPhone_number(item)
    }


    const handleSubmit = (e) => {
        if(fname.length<3 || email.length<5 || phone_number.length<10){
            alert("Enter valid data")
        }else{
            alert("Form submitted")
        }
        e.preventDefault();
        
        
        console.log("Name: ",fname)
        console.log("Email ID :",email)
        console.log("Phone Number :",phone_number)
        console.log("Gender :",svalue)
    }

        const a=
            <div style={{backgroundColor:"skyblue",display:'flex',alignItems:'center',justifyContent:'center',height:'100vh'}} >
                <form onSubmit={handleSubmit}  >
                    <h1 >Test Form</h1>
                    <label >Name :</label>
                    <input name="name" type="text" style={{padding: "0.2rem 0.5rem"}} onChange={namehandle}/>
                    {fnameerr?<span style={{color:"red"}} >* Not Valid</span>:null}
                    <br />
                    <label>Email :</label>
                    <input name="email" type="text" value={email} style={{padding: "0.2rem 0.5rem"}} onChange={emailhandle}/>
                    {emailerr?<span style={{color:"red"}} >* Enter a valid email</span>:null}
                    <br />
                    <label>Phone :</label>
                    <input name="number" type="text" style={{padding: "0.2rem 0.5rem"}} value={phone_number} onChange={phhandle}/>
                    {phone_numbererr?<span style={{color:"red"}} >* Enter a valid phone number</span>:null}
                    <br />
                    <label>Gender :</label>
                    <select name="" value={svalue} style={{padding: "0.2rem 0.5rem"}} onChange={e=> setSvalue(e.target.value)}>
                        <option value="M">Male</option>
                        <option value="F">Female</option>
                    </select>
                    <br /> <br />
                    <label>Filled all details?</label>
                    <input type="checkbox" name="" id="" />
                    <br /><br />
                    <button type="submit" style={{font: "inherit",cursor: "pointer",color: "black"
                    ,border: "1px solid #77002e",backgroundColor: "transparent",padding: "0.5rem 1.5rem",
                     borderRadius: "4px"}}>Submit</button>
                </form>
            </div>
    return a;
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Final />)