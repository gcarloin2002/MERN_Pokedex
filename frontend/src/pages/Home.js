import TopBar from "../components/TopBar"
import ButtonCollection from "../components/ButtonCollection"
import { useEffect, useState } from "react"

let pokemonInfo = ""
const Home = () => {
    // Array of every pokemon's data
    const [pokemon, setPokemon] = useState([]);

    // Fetches every Pokemon
    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=1010")
        .then((response) => response.json())
        .then((json) => json.results)
        .then((result) => {
            const pkmn = []
            for (let i = 0; i < result.length; i++){
                pkmn.push(result[i])
            }
            pokemonInfo = pkmn
            setPokemon(pkmn)
        })
        .catch(error => console.log(error));
    }, [])


    return (
        <>
            <TopBar/>
            <ButtonCollection pkmn={pokemon}/>
        </>
    )
}

export {Home, pokemonInfo}