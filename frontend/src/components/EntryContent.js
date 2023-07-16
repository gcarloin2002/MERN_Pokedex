import { useState } from "react"
import DirectoryBar from "./DirectoryBar"
import ArtworkDisplay from "./ArtwortDisplay"
import { determineDisplayName, determineUrlName } from "./DexButton"
import "./styles/EntryContent.css"
import { useEffect } from "react"

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

const inBetweenInclusive = (a, b, number) => {return ((a <= number) && (number <= b))}

// const generateAppearanceIDs

const EntryContent = (props) => {
    const apiURLs = props.apiURLs
    const formTags = props.formTags
    const appearanceTags = props.appearanceTags
    const randomFormTag = formTags[Math.floor(Math.random()*formTags.length)]
    const randomAppearanceTag = appearanceTags[Math.floor(Math.random()*appearanceTags.length)]
    const dexNum = props.dexNum
    const officialArt = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/" + randomFormTag + ".png"
    const pokemonData = props.pokemonData
    const displayName = props.displayName
    const nameID = displayName
    const neighbors = generateNeighbors(pokemonData, dexNum)

    console.log(formTags)
    console.log(appearanceTags)
    
    return ((
        <div className="EntryContent">
            <DirectoryBar dexNum={dexNum} neighbors={neighbors}/>
            <ArtworkDisplay nameID={nameID} officialArt={officialArt} formTags={formTags}/>
            <h1>You are currently accessing the {displayName} page</h1>
        </div>
    ))
}


export default EntryContent