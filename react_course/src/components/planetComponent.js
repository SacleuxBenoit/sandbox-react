export default function PlanetComponent(){
    const planets = [
        {name: "Mars", isGasPlanet: false},
        {name: "Earth", isGasPlanet: false},
        {name: "Jupiter", isGasPlanet: true},
        {name: "Venus", isGasPlanet: false},
        {name: "Neptune", isGasPlanet: true},
        {name: "Uranus", isGasPlanet: true},
    ]

    return(
        planets.map((planet,key) => {
            if(planet.isGasPlanet) return <div>{planet.name}</div>
        })
    )
}