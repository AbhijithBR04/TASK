function User() {
  function orange(){
    alert("button clicked")
  }
    return (
      <div className="App">
        <h1>react user main</h1>
        <button onClick={orange}>click</button>
      </div>
    );
  }
  
  export default User;