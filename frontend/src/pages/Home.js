import TestComponent from "../components/TestComponent"
import ButtonCollection from "../components/ButtonCollection"
import { useEffect, useState } from "react"

const Home = () => {
    // Array of every pokemon's name
    const [names, setNames] = useState([]);

    // Fetches every Pokemon
    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=1010")
        .then((response) => response.json())
        .then((json) => json.results)
        .then((result) => {
            const n = ['Missingno']
            for (let i = 0; i < result.length; i++){
                n.push(result[i].name.charAt(0).toUpperCase() + result[i].name.slice(1))
            }
            setNames(n)
        })
    }, [])


    return (
        <div>
            <h2>Home</h2>
            <ButtonCollection names={names}/>
        </div>
    )
}

export default Home