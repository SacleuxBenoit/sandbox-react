import { useState } from "react"
import NavBar from "../components/NavBar"

export default function Count(){
    let [count, setCount] = useState(0);

    return(
        <>
            <NavBar />
            <div>
                <button onClick={() => setCount(count += 1)}>Increase</button>
                <button onClick={() => setCount(count -= 1)}>Decrease</button>
                <button onClick={() => setCount(0)}>Reset</button>
                {count}
            </div>
        </>
    )
}