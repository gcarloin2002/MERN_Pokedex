import DirectoryBar from "./DirectoryBar"
import ExtraInfo from "./ExtraInfo"
import React, { useState, useEffect, useContext } from "react"
import PrimaryDisplay from "./PrimaryDisplay"
import { determineDisplayName, determineUrlName } from "../HomeComponents/DexButton"
import "./styles/EntryContent.css"

export const FormContext = React.createContext()

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
    const [entryData, setEntryData] = useState(false)
    const [currentFormTag, setCurrentFormTag] = useState(props.formTags[0])
    const speciesData = props.speciesData
    const formTags = props.formTags
    const appearanceTags = props.appearanceTags
    const randomTag = formTags[0]
    const dexNum = props.dexNum
    const officialArt = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/" + randomTag + ".png"
    const pokemonData = props.pokemonData
    const displayName = props.displayName
    const neighbors = generateNeighbors(pokemonData, dexNum)

    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon/" + currentFormTag)
        .then((response) => response.json())
        .then((result) => {setEntryData(result)})
        .catch(error => console.log(error));
    }, [currentFormTag])

    return (entryData && (
        <FormContext.Provider value={[currentFormTag, setCurrentFormTag]}>
            <div className="EntryContent">
                <DirectoryBar dexNum={dexNum} neighbors={neighbors}/>
                <PrimaryDisplay 
                    entryData={entryData} 
                    speciesData={speciesData}
                    displayName={displayName} 
                    officialArt={officialArt} 
                    formTags={formTags}
                    appearanceTags={appearanceTags}
                />
            </div>
         </FormContext.Provider>
    ))
}


export default EntryContent