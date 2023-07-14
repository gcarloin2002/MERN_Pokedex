import { useEffect, useState } from "react"
import DirectoryBar from "./DirectoryBar"
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
    const [URLs, setURLs] = useState([])
    const [mainURL, setMainURL] = useState("")
    const name = props.name
    const dexNum = props.dexNum
    const neighbors = generateNeighbors(props.allPokemonData, dexNum)

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
            setURLs(urlList)
            setMainURL(urlList[0])
        })
        .catch(error => console.log(error));
    }, [])

    return (
        <>
            <DirectoryBar dexNum={dexNum} neighbors={neighbors}/>
            <h1>You are currently accessing the {name} page</h1>
            <p>{mainURL}</p>
        </>
    )
}


export default EntryContent