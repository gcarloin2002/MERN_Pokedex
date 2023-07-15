import { useEffect, useState } from "react";
import EntryContent from "../components/EntryContent"

const PokedexEntry = (props) => {
    const [apiURLs, setAPIURLs] = useState(false)
    const name = (window.location.href).slice(22)
    const pokemonData = props.pokemonData
    const dexNum = props.dexNum
    
    // Fetches the pokemon's data
    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon-species/" + dexNum)
        .then((response) => response.json())
        .then((result) => result.varieties)
        .then((varieties) => {
            const urlList = []
            for (let i = 0; i < varieties.length; i++){
                urlList.push(varieties[i].pokemon.url)
            }
            setAPIURLs(urlList)
        })
        .catch(error => console.log(error));
    }, [name])

    return (apiURLs && (
        <>
            <EntryContent name={name} dexNum={dexNum} pokemonData={pokemonData} apiURLs={apiURLs}/>
        </>
    ))
}


export default PokedexEntry