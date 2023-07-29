import ButtonCollection from "../components/HomeComponents/ButtonCollection"
import { useEffect, useState } from "react"

const Home = (props) => {
    const [runOnce, setRunOnce] = useState(false)
    
    useEffect(() => {
        setRunOnce(true)
        console.log("Home")
    })

    
    return (runOnce && <ButtonCollection pokemonData={props.pokemonData}/>)
}

export default Home