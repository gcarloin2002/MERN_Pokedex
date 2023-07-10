import React, { useEffect, useState } from "react"

const TestComponent = () => {
    const [name, setName]= useState("N/A")

    const response = fetch("https://pokeapi.co/api/v2/pokemon/152/")
    .then((response) => response.json())
    .then((json) => setName(json.name))


    return (
        <div>
            {name}
        </div>
    )
}




export default TestComponent