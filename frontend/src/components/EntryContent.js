import DirectoryBar from "./DirectoryBar"
import ExtraInfo from "./ExtraInfo"
import PrimaryDisplay from "./PrimaryDisplay"
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
    const entryData = props.entryData
    const apiURLs = props.apiURLs
    const formTags = props.formTags
    const appearanceTags = props.appearanceTags
    const randomTag = formTags[0]
    const dexNum = props.dexNum
    const officialArt = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/" + randomTag + ".png"
    const pokemonData = props.pokemonData
    const displayName = props.displayName
    const neighbors = generateNeighbors(pokemonData, dexNum)

    return ((
        <div className="EntryContent">
            <DirectoryBar dexNum={dexNum} neighbors={neighbors}/>
            <PrimaryDisplay entryData={entryData} displayName={displayName} officialArt={officialArt} formTags={formTags}/>
            <ExtraInfo entryData={entryData}/>
            <h1>You are currently accessing the {displayName} page</h1>
        </div>
    ))
}


export default EntryContent