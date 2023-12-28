import { useState } from "react"
import { Link } from "react-router-dom"
import '../../styles/HeaderC/Header.css'
import LeftNavBar from "../LeftNavBar"

function MainNav() {
    const [navLeft, setNavLeft] = useState(false)

    return (
        <>
            <button onClick={() => { setNavLeft(!navLeft) }}>Tous</button>
            <Link to="/">Carte cadeaux</Link>
            <Link to="/">Nos meilleurs ventes</Link>
            <Link to="/">Vente flash</Link>
            <Link to="/">Musique</Link>
            <Link to="/">Livre</Link>
            <Link to="/">Informatique</Link>
            <Link to="/">Audio</Link>
            {navLeft && <LeftNavBar closeNavLeft={() => { setNavLeft(false) }} />}
        </>
    )
}
export default MainNav