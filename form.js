
function Final(){
    const[fname,setName]=React.useState("")
    const[email,setEmail]=React.useState("")
    const[phone_number,setPhone_number]=React.useState("")
    const[svalue,setSvalue]=React.useState("M")



    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Name: ",fname)
        console.log("Email ID :",email)
        console.log("Phone Number :",phone_number)
        console.log("Gender :",svalue)
       

    }

        const a=
            <div style={{backgroundColor:"skyblue",display:'flex',alignItems:'center',justifyContent:'center',height:'100vh'}} >
                <form onSubmit={handleSubmit} >
                    <h1>Test Form</h1>
                    <label>Name :</label>
                    <input name="name" type="text" value={fname} onChange={e=> setName(e.target.value)}/>
                    <br />
                    <label>Email :</label>
                    <input name="email" type="text" value={email} onChange={e=> setEmail(e.target.value)}/>
                    <br />
                    <label>Phone :</label>
                    <input   name="email" type="text" value={phone_number} onChange={e=> setPhone_number(e.target.value)}/>
                    <br />
                    <label>Gender :</label>
                    <select name="" value={svalue} onChange={e=> setSvalue(e.target.value)}>
                        <option value="M">Male</option>
                        <option value="F">Female</option>
                    </select>
                    <br />
                    <label>Filled all details?</label>
                    <input type="checkbox" name="" id="" />
                    <br /><br />
                    <button type="submit">Submit</button>
                </form>
            </div>
    return a;
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Final />)