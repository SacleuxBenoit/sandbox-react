import { Link } from 'react-router-dom';

export let NavBar = () => {
    return(
        <div>
            <Link to="/">Home</Link>
            <Link to="/menu">Menu</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/profile">Profile</Link>
      </div>
    )
} 