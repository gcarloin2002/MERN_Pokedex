import DirectoryBar from "./DirectoryBar"
import ExtraInfo from "./ExtraInfo"
import React, { useState, useEffect, useContext } from "react"
import { CurrentTagObjContext } from "../../App" 
import PrimaryDisplay from "./PrimaryDisplay"
import { determineDisplayName, determineUrlName } from "../HomeComponents/DexButton"
import "./styles/EntryContent.css"

export const RenderEntryFormContext = React.createContext()

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
    const [renderEntryForm, setRenderEntryForm] = useState("")
    const [currentTagObj, setCurrentTagObj] = useContext(CurrentTagObjContext)
    const speciesData = props.speciesData
    const speciesName = props.speciesName
    const formTags = props.formTags
    const appearanceTags = props.appearanceTags
    const dexNum = props.dexNum
    const pokemonData = props.pokemonData
    const neighbors = generateNeighbors(pokemonData, dexNum)

    useEffect(() => {
        console.log("changed")
        fetch("https://pokeapi.co/api/v2/pokemon/" + currentTagObj[speciesName]["form"])
        .then((response) => response.json())
        .then((result) => {setEntryData(result)})
        .catch(error => console.log(error));
    }, [currentTagObj[speciesName["appearance"]]])

    return (entryData && (
        <RenderEntryFormContext.Provider value={[renderEntryForm, setRenderEntryForm]}>
            <div className="EntryContent">
                <DirectoryBar dexNum={dexNum} neighbors={neighbors}/>
                <PrimaryDisplay 
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