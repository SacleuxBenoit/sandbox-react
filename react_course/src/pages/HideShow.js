 import { useState } from "react"
import NavBar from "../components/NavBar"

export default function HideShow(){
    let [showText, setShowText] = useState(true)

    function changeStateShowText(){
        showText === true ? setShowText(false) : setShowText(true)
    }

    return(
        <>
            <NavBar />
            <button onClick={changeStateShowText}>Show / Hide</button>
            {showText === true && <h1>We can see this text</h1>}
        </>
    ) 
}