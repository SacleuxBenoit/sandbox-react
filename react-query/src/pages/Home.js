import { useContext } from 'react' 
import { AppContext } from '../App'
import { useQuery } from '@tanstack/react-query'
import Axios from "axios";

export let Home = () => {
    let { data, isLoading, refetch } = useQuery(["cat"], () => {
        return Axios.get("https://catfact.ninja/fact").then((res) => res.data)
    });

    const {username} = useContext(AppContext)
    
    return(
        <div>
            <h1>Hello {username} you are in the Home page</h1>
            {isLoading ? <p>api is loading</p> : <p>{data?.fact}</p>}
            <button onClick={refetch}>Update data</button>
        </div>
    )
}