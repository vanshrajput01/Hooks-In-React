import { useState } from "react"

export function Counter(){
    const [count,setCount] = useState(0)
    if(count > 20){
        setCount(20)



    }if(count < 0){
        setCount(0)
    }
    return(

        <>
        <h3>Counter :  {count}</h3>
        <button onClick={()=>{setCount(count + 1)}}>Inc</button>
        <button onClick={()=>{setCount(count - 1)}}>Dec</button>



        </>
    )
}