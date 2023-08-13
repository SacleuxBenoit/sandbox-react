import { useState } from "react"

export default function IncrementButtonComponent(){
    let [number, setNumber] = useState(0);
    let [inputValue, setInputValue] = useState("");

    function updateNumber(){
        number = setNumber(number + 1);
    }

    function updateInput(event){
        inputValue = setInputValue(event.target.value)
    }

    return(
        <div>
            <p>
                <button onClick={updateNumber}>Update age</button>
                {number}
            </p>

            <p>
                <input type="text" onChange={updateInput}/>
                {inputValue}
            </p>
        </div>
    )
}