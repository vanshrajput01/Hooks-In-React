import { useState } from "react";

function Project02OnHook(){
    const [count,setcount] = useState(0);
    document.title = `Counter : ${count}`
    

    
    return (

        <div>
        <h1>Project 02 On Hooks</h1>
        <button onClick={()=>{setcount(count + 1)}}>Inc</button>
        <button>Counter : {count} </button>
        
        <button onClick={()=>{setcount(count - 1)}}>Dec</button>

        </div>
    )

}

export default Project02OnHook;

