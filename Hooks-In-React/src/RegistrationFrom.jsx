import { useState } from "react";

function RegistrationForm(){
    const [input,setInput] = useState("")

    const inputHandler = (e) =>{
        setInput(e.target.value)
    }

    const seeData = (e) =>{
        e.preventDefault()
        const p = document.querySelector("#data");
        p.innerHTML = `Your enter data is : - ${input}`


    }
    return(
        <>
        <h1>Registration Form</h1>
        <form action="">
            <input type="text"  placeholder="Enter Any thing" onChange={inputHandler}/>
            <button onClick={seeData}>See data</button>
            <input type="reset" />
        </form>
        <p id="data"></p>

        
        </>
    )

}

export default RegistrationForm;