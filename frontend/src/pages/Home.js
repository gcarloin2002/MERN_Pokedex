import ButtonCollection from "../components/ButtonCollection"
import { useEffect, useState } from "react"

const Home = () => {
    // Array of every pokemon's data
    const [pokemonData, setPokemonData] = useState(false);

    // Fetches every Pokemon
    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon-species/?limit=1010")
        .then((response) => response.json())
        .then((json) => json.results)
        .then((result) => {
            const pkmnData = []
            for (let i = 0; i < result.length; i++){
                pkmnData.push(result[i])
            }
            setPokemonData(pkmnData)
        })
        .catch(error => console.log(error));
    }, [])

    
    return (
        <>
           {(pokemonData && <ButtonCollection pokemonData={pokemonData}/>)}
        </>
    )
}

export default Home