import { useEffect, useState } from "react"
import DirectoryBar from "./DirectoryBar"
import "./styles/EntryContent.css"


const EntryContent = (props) => {
    const [URLs, setURLs] = useState([])
    const [mainURL, setMainURL] = useState("")
    const name = props.name
    const dexNum = props.dexNum

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
            <DirectoryBar dexNum={dexNum}/>
            <h1>You are currently accessing the {name} page</h1>
            <p>{mainURL}</p>
        </>
    )
}


export default EntryContent