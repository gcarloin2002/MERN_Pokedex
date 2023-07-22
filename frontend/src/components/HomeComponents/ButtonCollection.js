import { DexButton }from "./DexButton"
import SearchBar from "./SearchBar"
import React, { useEffect, useState } from 'react'
import { determineDisplayName } from "./DexButton"
import "./styles/ButtonCollection.css"


export const OpaqueContext = React.createContext()
export const SearchContext = React.createContext()

const generatePokemonDataArray = (pokemonData) => {
    const result = []
    for (let i = 0; i < pokemonData.length; i++) {
        const dexNumber = i + 1
        const dataName = pokemonData[i].name
        const url = pokemonData[i].url
        const displayName = determineDisplayName(dataName.charAt(0).toUpperCase() + dataName.slice(1), i + 1)
        
        const pokemonObj = {
            dexNumber: dexNumber, 
            displayName: displayName,
            data: pokemonData[i]
        }

        result.push(pokemonObj)
    }

    return result
}
  
const ButtonCollection = (props) => {
    const [opacity, setOpacity] = useState(0);
    const [runOnce, setRunOnce] = useState(false);
    const [searchInput, setSearchInput] = useState("")

    const pokemonDataArray = generatePokemonDataArray(props.pokemonData)
    
    // Lets component render once
    useEffect(() => {
        setRunOnce(true)
    },[])
    
    return (runOnce && (
        <OpaqueContext.Provider value={[opacity, setOpacity]}>
            <SearchContext.Provider value={[searchInput, setSearchInput]}>
                <SearchBar opacity={opacity}/>
                <div className="ButtonCollection">
                    {
                        pokemonDataArray.filter((obj) => {
                            return obj.displayName.toLowerCase().includes(searchInput.toLowerCase())
                        }).map((obj, index) => {
                            return <DexButton key={index} displayName={obj.displayName} data={obj.data} dexNumber={obj.dexNumber} opacity={opacity}/>
                        })
                    }
                </div>
            </SearchContext.Provider>
        </OpaqueContext.Provider>
    ))
}


export default ButtonCollection