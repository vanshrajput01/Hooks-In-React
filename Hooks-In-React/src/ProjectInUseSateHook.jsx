import { useState } from "react";

function ProjectInUseSateHook() {
    const [input, setInput] = useState("")
    const inputHandler = (e) => {
        setInput(e.target.value)
    }
    return (

        <>
            <h2>Project In Use state Hook in React</h2>
            <form>
                <input type="text" placeholder="Enter Url Only" required onChange={inputHandler} />
                <br></br>
                <input type="submit" value="See image" />
                <input type="reset" value="Reset Url" />

            </form>

        </>
    )

}

export default ProjectInUseSateHook;