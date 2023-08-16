import { NavLink } from "react-router-dom"
export default function NavBar(){
    return(
        <>
        <NavLink to="/home">Home</NavLink> |
        <NavLink to="/planet"> Planet</NavLink> |
        <NavLink to="/incrementButton"> Increment Button</NavLink> |
        <NavLink to="/hideShow"> Hide /Show</NavLink>
        <NavLink to="/count">Count</NavLink>
        </>
    )
}