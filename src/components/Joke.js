import React from 'react';
import useFetch from './useFetch';

function Joke() {
    const {data:joke,loading,error,refetch}=useFetch("https://v2.jokeapi.dev/joke/Any")

   if (loading) return <h1 style={{textAlign:"center"}} >Loading....</h1> 
   if (error) console.log(error)
  return (
    <div style={{textAlign:"center"}}>
        {joke?.setup} <br/> {joke?.delivery}
        <br />
        <button onClick={refetch}>click for more</button>
    </div>
  )
}

export default Joke