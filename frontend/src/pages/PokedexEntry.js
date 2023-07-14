import { useState, useEffect } from "react";
import EntryContent from "../components/EntryContent"

const PokedexEntry = (props) => {
    const [pokemonData, setPokemonData] = useState([])

    const url = window.location.href;
    const name = url.slice(22)
    const dexNum = props.dexNum
    
    
    // Fetches the pokemon's data
    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon/" + dexNum)
        .then((response) => response.json())
        .then((result) => {
            setPokemonData(result)
        })
        .catch(error => console.log(error));
    }, [])

    return (
        <>
            <EntryContent name={name} pokemonData={pokemonData}/>
        </>
    )
}


export default PokedexEntry