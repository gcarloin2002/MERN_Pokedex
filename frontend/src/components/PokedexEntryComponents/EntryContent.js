import DirectoryBar from "./DirectoryBar"
import ExtraInfo from "./ExtraInfo"
import React, { useState, useEffect } from "react"
import PrimaryDisplay from "./PrimaryDisplay"
import { generateSpeciesName } from "../HomeComponents/DexButton" 
import "./styles/EntryContent.css"

export const RenderEntryFormContext = React.createContext()

const generateNeighbors = (allPokemonData, dexNum) => {

    if (dexNum === 1){
        return ["", "Ivysaur"]
    }

    else if (dexNum === allPokemonData.length) {
        const lorigName = allPokemonData[dexNum - 2].speciesName
        const ldisplayName = generateSpeciesName(lorigName.charAt(0).toUpperCase() + lorigName.slice(1), dexNum - 1)
        const lurlName = (ldisplayName).replace(" ", "_")

        return [lurlName, ""]
    }

    else {
        const lorigName = allPokemonData[dexNum - 2].speciesName
        const ldisplayName = generateSpeciesName(lorigName.charAt(0).toUpperCase() + lorigName.slice(1), dexNum - 1)
        const lurlName = (ldisplayName).replace(" ", "_")

        const rorigName = allPokemonData[dexNum].speciesName
        const rdisplayName = generateSpeciesName(rorigName.charAt(0).toUpperCase() + rorigName.slice(1), dexNum + 1)
        const rurlName = (rdisplayName).replace(" ", "_")

        return [lurlName, rurlName]
    }
}

const EntryContent = (props) => {
    const [renderEntryForm, setRenderEntryForm] = useState(false)
    const [entryData, setEntryData] = useState(false)
    const [run, setRun] = useState(false)
    const [tagObj, setTagObj] = useState(false)
    const speciesData = props.speciesData
    const speciesName = props.speciesName
    const formTags = props.formTags
    const appearanceTags = props.appearanceTags
    const dexNum = props.dexNum
    const pokemonData = props.pokemonData
    const neighbors = generateNeighbors(pokemonData, Number(dexNum))
    

    useEffect(() => {
        fetch("/api/data/" + props.id)
        .then((response) => response.json())
        .then((result) => {
            setTagObj(result)
            fetch("https://pokeapi.co/api/v2/pokemon/" + result["form"])
            .then((response) => response.json())
            .then((result) => {
                setEntryData(result)
                setRun(true)
            })
            .catch(error => console.log(error))
        })
        .catch(error => console.log(error))

    }, [renderEntryForm])

   
    
    return (run && (
        <RenderEntryFormContext.Provider value={[renderEntryForm, setRenderEntryForm]}>
            <div className="EntryContent">
                <DirectoryBar 
                    dexNum={dexNum} 
                    neighbors={neighbors}
                    speciesName={speciesName}
                />
                
                <PrimaryDisplay 
                    id={props.id}
                    tagObj={tagObj}
                    entryData={entryData} 
                    speciesData={speciesData}
                    formTags={formTags}
                    appearanceTags={appearanceTags}
                />
            </div>
        </RenderEntryFormContext.Provider>
    ))
    
}


export default EntryContent