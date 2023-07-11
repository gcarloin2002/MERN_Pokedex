import TestComponent from "../components/TestComponent"
import ButtonCollection from "../components/ButtonCollection"
import { useEffect, useState } from "react"

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
            setPokemon(pkmn)
        })
        .catch(error => console.log(error));
    }, [])


    return (
        <div>
            <h2>Home</h2>
            <ButtonCollection pkmn={pokemon}/>
        </div>
    )
}

export default Home