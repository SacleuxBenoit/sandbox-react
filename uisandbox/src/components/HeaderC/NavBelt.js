import { Link } from "react-router-dom"

function HeaderC() {
    return (
        <div className="containerBelt">
            <div className="nav-left">
                <Link to="/">Company</Link>
                <Link to="/">placeholder address</Link>
            </div>

            <div className="nav-fill">
                <input type="text" placeholder="Rechercher sur Company" />
            </div>

            <div className="nav-right">
                <Link to="/">Bonjour, identifiez-vous</Link>
                <Link to="/">Retours et commandes</Link>
                <Link to="/">Panier</Link>
            </div>
        </div>
    )
}

export default HeaderC