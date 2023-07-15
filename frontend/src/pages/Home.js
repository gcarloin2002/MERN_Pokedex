import ButtonCollection from "../components/ButtonCollection"
import { useEffect, useState } from "react"

const Home = (props) => {
    // Array of every pokemon's data
    const pokemonData = props.pokemonData

    
    return (
        <>
           <ButtonCollection pokemonData={pokemonData}/>
        </>
    )
}

export default Home