import { useEffect, useState } from "react";
import EntryContent from "../components/EntryContent"

const PokedexEntry = (props) => {
    const [apiURLs, setAPIURLs] = useState(false)
    const [formIDs, setFormIDs] = useState(false)
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
            const formIDList = []
            for (let i = 0; i < varieties.length; i++){
                const url = varieties[i].pokemon.url
                urlList.push(url)
                formIDList.push(url.slice(34, url.length - 1))
            }
            setAPIURLs(urlList)  
            setFormIDs(formIDList)

        })
        .catch(error => console.log(error));
    }, [name])

    return (formIDs && (
        <>
            <EntryContent 
                name={name} 
                dexNum={dexNum} 
                pokemonData={pokemonData} 
                apiURLs={apiURLs} 
                formIDs={formIDs}
            />
        </>
    ))
}


export default PokedexEntry