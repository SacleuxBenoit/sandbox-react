import '../styles/LeftNavBar.css'

function LeftNavBar() {
    return (
        <div className="containerNavLeft">
            <div className='identification'>Bonjour, identifiez-vous</div>
            <div>
                <ul>
                    <li className="menuTitle">Tendances</li>
                    <li>Meilleurs ventes</li>
                    <li>Dernières Nouveautés</li>
                    <li>Baromètre des ventes</li>

                    <li className="menuSeparator"></li>

                    <li className="menuTitle">Contenu Numérique et Appareils</li>
                    <li>Vidéo</li>
                    <li>Musique</li>
                    <li>Maison connectée</li>
                    <li>Kindle & ebooks</li>
                    <li>Livre audio</li>

                    <li className="menuSeparator"></li>

                    <li className="menuTitle">Choisir une catégorie</li>
                    <li>Livres</li>
                    <li>Musique, DvD</li>
                    <li>Jeux Vidéo et console</li>
                    <li>High-tech</li>

                    <li className="menuSeparator"></li>

                    <li className='menuTitle'>Programmes et services</li>
                    <li>Launchpad</li>
                    <li>Fabriqué en France</li>
                    <li>Essayez avant d'acheter</li>
                </ul>
            </div>
        </div>
    )
}

export default LeftNavBar