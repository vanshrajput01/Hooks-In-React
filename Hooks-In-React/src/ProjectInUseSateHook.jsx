import Images from "./Images";
import { useState } from "react";
import './ProjectInUseStateHook.css'

function ProjectInUseSateHook() {
    const [input, setInput] = useState("")
    const inputHandler = (e) => {
        setInput(e.target.value)
    }
    const seeImage = (e) =>{
        e.preventDefault()
        const imageContainer = document.querySelector("#image-container")
        const imageElement = document.createElement("img");
        imageElement.src = input
        imageElement.alt = "Please Enter valid Url in input Box"
        imageElement.style.width = "200px"
        imageElement.style.marginRight = "20px"
        imageElement.style.borderRadius = "15px" 
        imageContainer.appendChild(imageElement)
        
        

                
    }
    return (

        <>
            <h2>Project In Use state Hook in React</h2>
            <form onSubmit={seeImage}>
                <input type="text" placeholder="Enter Url Only" required onChange={inputHandler} />
                <div>
                <input type="submit" value="See image" />
                <input type="reset" value="Reset Url" />
                </div>

            </form>
            <div id="image-container" style={
                {
                    marginTop : "30px"
                
                }
            }>

            </div>


           
            



        </>
    )

}

export default ProjectInUseSateHook;