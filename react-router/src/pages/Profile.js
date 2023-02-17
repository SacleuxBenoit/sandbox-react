import { ChangeProfile  } from "../components/ChangeProfile"
import { useContext } from 'react' 
import { AppContext } from '../App'

export let Profile = () => {
    let {username} = useContext(AppContext);
    return(
        <div>
            Profile is : {username}
            <ChangeProfile />
        </div>
    )
}