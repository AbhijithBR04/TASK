function about(){
    return "pc builder" 
};

function Myname({firstname}){
    let ob={
            url:`https://www.insidesport.in/wp-content/uploads/2023/10/368496.webp`
    }
    const grp= <div>
            <h1>test headline</h1>
            <h3>test headline 2</h3>
            <p>about-{about()}</p> 
            <h2>my name : {firstname}</h2>
            <img src={ob.url} alt=""/>
        </div>;
    
    return grp;
};

function About(){
    let firstname="abhijith"
    return <Myname firstname={firstname}></Myname>
};



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<About/>)


