import { useEffect, useState } from "react";

function Project03OnHooks(){
    const [size,setSize] = useState(window.innerWidth)
    useEffect(()=>{
        window.addEventListener("resize",()=>{
            setSize(window.innerWidth)
        })

        // Clean up function that is not maintain privious state data
        
        return ()=>{
            window.removeEventListener("resize",()=>{
                setSize(window.innerWidth)

            })
        }
    })


    return (
    <>
    <h1>Project 03 On Hooks</h1>
    <h1>Your Current Window Screen Size is <span>{size}</span></h1>

    </>
    )

}
export default Project03OnHooks;