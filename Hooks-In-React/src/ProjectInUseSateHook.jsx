import Images from "./Images";
import { useState } from "react";

function ProjectInUseSateHook() {
    const [input, setInput] = useState("")
    const inputHandler = (e) => {
        setInput(e.target.value)
    }
    const seeImage = (e) =>{
        e.preventDefault()
        const imageContainer = document.querySelector("#image-container")
        imageContainer.children[0].setAttribute("src",input)
                
    }
    return (

        <>
            <h2>Project In Use state Hook in React</h2>
            <form onSubmit={seeImage}>
                <input type="text" placeholder="Enter Url Only" required onChange={inputHandler} />
                <br></br>
                <input type="submit" value="See image" />
                <input type="reset" value="Reset Url" />

            </form>
            <div id="image-container">
                <Images />
            </div>
           
            



        </>
    )

}

export default ProjectInUseSateHook;