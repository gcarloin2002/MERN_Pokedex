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

const inBetweenInclusive = (a, b, number) => {return ((a <= number) && (number <= b))}

const generateNameID = (name, ID) => {
    const number = parseInt(ID)

    // Checks if its an Unown form
    if (number === 201) {
        console.log("Unown")
    }

    else {
        return name
    }
}

const EntryContent = (props) => {
    const apiURLs = props.apiURLs
    const formIDs = props.formIDs
    const dexNum = props.dexNum
    const randomID = formIDs[Math.floor(Math.random() * formIDs.length)]
    const officialArt = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/" + randomID + ".png"
    const pokemonData = props.pokemonData
    const name = props.name
    const nameID = generateNameID(name, randomID)
    const neighbors = generateNeighbors(pokemonData, dexNum)

    
    return ((
        <div className="EntryContent">
            <DirectoryBar dexNum={dexNum} neighbors={neighbors}/>
            <ArtworkDisplay nameID={nameID} officialArt={officialArt} formIDs={formIDs}/>
            <h1>You are currently accessing the {name} page</h1>
        </div>
    ))
}


export default EntryContent