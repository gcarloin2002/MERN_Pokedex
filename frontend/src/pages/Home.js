import ButtonCollection from "../components/HomeComponents/ButtonCollection"
import { useEffect, useState } from "react"

const Home = (props) => {
    const [runOnce, setRunOnce] = useState(false)

    useEffect(() => setRunOnce(true))

    
    return (runOnce && <ButtonCollection pokemonData={props.pokemonData}/>)
}

export default Home