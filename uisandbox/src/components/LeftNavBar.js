import '../styles/LeftNavBar.css'
import { Link } from 'react-router-dom'

function LeftNavBar({ closeNavLeft }) {
    return (
        <div className='wrapper'>
            <div className="containerNavLeft">
                <Link to="/"><div className='identification'>Bonjour, identifiez-vous</div></Link>
                <div>
                    <ul>
                        <li className="menuTitle">Tendances</li>
                        <Link to="/"><li>Meilleurs ventes</li></Link>
                        <Link to="/"><li>Dernières Nouveautés</li></Link>
                        <Link to="/"><li>Baromètre des ventes</li></Link>

                        <li className="menuSeparator"></li>

                        <li className="menuTitle">Contenu Numérique et Appareils</li>
                        <Link to="/"><li>Vidéo</li></Link>
                        <Link to="/"><li>Musique</li></Link>
                        <Link to="/"><li>Maison connectée</li></Link>
                        <Link to="/"><li>Kindle & ebooks</li></Link>
                        <Link to="/"><li>Livre audio</li></Link>

                        <li className="menuSeparator"></li>

                        <li className="menuTitle">Choisir une catégorie</li>
                        <Link to="/"><li>Livres</li></Link>
                        <Link to="/"><li>Musique, DvD</li></Link>
                        <Link to="/"><li>Jeux Vidéo et console</li></Link>
                        <Link to="/"><li>High-tech</li></Link>

                        <li className="menuSeparator"></li>

                        <li className='menuTitle'>Programmes et services</li>
                        <Link to="/"><li>Launchpad</li></Link>
                        <Link to="/"><li>Fabriqué en France</li></Link>
                        <Link to="/"><li>Essayez avant d'acheter</li></Link>
                    </ul>
                </div>
            </div>
            <div className='divButtonClose' onClick={closeNavLeft}>x</div>
        </div>
    )
}

export default LeftNavBar