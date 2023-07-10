import React, { useEffect, useState } from "react"

const TestComponent = () => {
    const [names, setNames] = useState([]);
    
    const response = fetch("https://pokeapi.co/api/v2/pokemon?limit=1010")
    .then((response) => response.json())
    .then((json) => json.results)
    .then((result) => {
        const n = []
        for (let i = 0; i < result.length; i++){
            n.push(result[i].name.charAt(0).toUpperCase() + result[i].name.slice(1))
        }
        setNames(n)
    })

    const listItems = names.map((n) => 
        <li key={n.toString()}>{n}</li>
    )


    return (
        <div>
            {listItems}
        </div>
    )
}




export default TestComponent