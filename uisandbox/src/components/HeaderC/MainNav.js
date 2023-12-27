import { useState } from "react"
import { Link } from "react-router-dom"
import '../../styles/Header.css'

function MainNav() {
    const [navLeft, setNavLeft] = useState(false)

    function toggleLeftNav() {
        setNavLeft(!navLeft)
    }

    return (
        <>
            <button onClick={toggleLeftNav}>Tous</button>
            <Link to="/">Carte cadeaux</Link>
            <Link to="/">Nos meilleurs ventes</Link>
            <Link to="/">Vente flash</Link>
            <Link to="/">Musique</Link>
            <Link to="/">Livre</Link>
            <Link to="/">Informatique</Link>
            <Link to="/">Audio</Link>
            {navLeft && (
                <div className="containerNavLeft">
                    <div>Bonjour, identifiez-vous</div>
                    <div>
                        <ul>
                            <li className="menuTitle">Tendances</li>
                            <li>Meilleurs ventes</li>
                            <li>Dernières Nouveautés</li>
                            <li>Baromètre des ventes</li>

                            <li className="menuSeparator"></li>

                            <li className="menuTitle">Choisir une catégorie</li>
                            <li>Livres</li>
                            <li>Musique, DvD</li>
                            <li>Jeux Vidéo et console</li>
                            <li>High-tech</li>

                            <li className="menuSeparator"></li>
                            <li>Programmes et services</li>
                            <li>Launchpad</li>
                            <li>Fabriqué en France</li>
                            <li>Essayez avant d'acheter</li>
                        </ul>
                    </div>
                </div>
            )}
        </>
    )
}
export default MainNav