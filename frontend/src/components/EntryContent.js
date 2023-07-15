import { useEffect, useState } from "react"
import DirectoryBar from "./DirectoryBar"
import ArtworkDisplay from "./ArtwortDisplay"
import { determineDisplayName, determineUrlName } from "./DexButton"
import "./styles/EntryContent.css"

const generateNeighbors = (allPokemonData, dexNum) => {

    if (dexNum === 1){
        return ["", "Ivysaur"]
    }

    else if (dexNum === allPokemonData.length) {
        const lorigName = allPokemonData[dexNum - 2].name
        const ldisplayName = determineDisplayName(lorigName.charAt(0).toUpperCase() + lorigName.slice(1), dexNum - 1)
        const lurlName = determineUrlName(ldisplayName)

        return [lurlName, ""]
    }

    else {
        const lorigName = allPokemonData[dexNum - 2].name
        const ldisplayName = determineDisplayName(lorigName.charAt(0).toUpperCase() + lorigName.slice(1), dexNum - 1)
        const lurlName = determineUrlName(ldisplayName)

        const rorigName = allPokemonData[dexNum].name
        const rdisplayName = determineDisplayName(rorigName.charAt(0).toUpperCase() + rorigName.slice(1), dexNum + 1)
        const rurlName = determineUrlName(rdisplayName)

        return [lurlName, rurlName]
    }
}

const EntryContent = (props) => {
    const [officialArt, setOfficialArt] = useState("")
    const pokemonData = props.pokemonData
    const name = props.name
    const dexNum = props.dexNum
    const apiURLs = props.apiURLs
    const neighbors = generateNeighbors(props.pokemonData, dexNum)

    /*
    useEffect(() => {
        fetch(activeURL)
        .then((response) => response.json())
        .then((result) => {
            setPokemonData(result)
            return result.sprites
        })
        .then((sprites) => setOfficialArt(sprites["other"]["official-artwork"]["front_default"]))
        .catch(error => console.log(error));
    },[activeURL])
    */

    
    return (
        <div className="EntryContent">
            <DirectoryBar dexNum={dexNum} neighbors={neighbors}/>
            <ArtworkDisplay src={officialArt}/>
            <h1>You are currently accessing the {name} page</h1>
            {apiURLs.map((url) => <p>{url}</p>)}
        </div>
    )
}


export default EntryContent