import { useEffect, useState } from "react";
import EntryContent from "../components/EntryContent"

const PokedexEntry = (props) => {
    const [apiURLs, setAPIURLs] = useState(false)
    const [formTags, setFormTags] = useState(false)
    const [apiNameTag, setAPINameTag] = useState(false)
    const [appearanceTags, setAppearanceTags] = useState(false)
    const displayName = (window.location.href).slice(22)
    const pokemonData = props.pokemonData
    const dexNum = props.dexNum
    
    // Fetches the pokemon's data
    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon-species/" + dexNum)
        .then((response) => response.json())
        .then((result) => {
            setAPINameTag(result.name)

            fetch("https://pokeapi.co/api/v2/pokemon-form/?limit=100000&offset=1010")
            .then((response) => response.json())
            .then((response) => response.results)
            .then((forms) => {
                const appearanceList = []
                for (let i = 0; i < forms.length; i++) {
                    if (forms[i].name.includes(result.name)){
                        const appearanceTag = dexNum + (forms[i].name).replace(result.name, "")
                        appearanceList.push(appearanceTag)
                    }
                }
                setAppearanceTags(appearanceList)
            })
            .catch(error => console.log(error));
            
            return result.varieties
        })
        .then((varieties) => {
            const urlList = []
            const formTagList = []
            for (let i = 0; i < varieties.length; i++){
                const url = varieties[i].pokemon.url
                urlList.push(url)
                formTagList.push(url.slice(34, url.length - 1))
            }
            setAPIURLs(urlList)  
            setFormTags(formTagList)
        })
        .catch(error => console.log(error));
    }, [])

    return ((
        <div>
            <EntryContent 
                displayName={displayName} 
                apiNameTag={apiNameTag}
                dexNum={dexNum} 
                pokemonData={pokemonData} 
                apiURLs={apiURLs} 
                formTags={formTags}
                appearanceTags={appearanceTags}
            />
        </div>
    ))
}


export default PokedexEntry