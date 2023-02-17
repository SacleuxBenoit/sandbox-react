import { useContext } from 'react' 
import { AppContext } from '../App'

export let Home = () => {
    const {username} = useContext(AppContext)
    return <h1>Hello {username} you are in the Home page</h1>
}