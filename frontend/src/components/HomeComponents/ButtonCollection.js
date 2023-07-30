import { DexButton, generateSpeciesName }from "./DexButton"
import SearchBar from "./SearchBar"
import { CurrentTagObjContext } from "../../App"
import React, { useEffect, useState, useContext } from 'react'
import "./styles/ButtonCollection.css"


export const OpaqueContext = React.createContext()
export const SearchContext = React.createContext()

const generatePokemonDataArray = (pokemonData) => {
    const result = []
    for (let i = 0; i < pokemonData.length; i++) {
        const dexNumber = i + 1
        const dataName = pokemonData[i].name
        const speciesName = generateSpeciesName(dataName.charAt(0).toUpperCase() + dataName.slice(1), i + 1)
        
        const pokemonObj = {
            dexNumber: dexNumber, 
            speciesName: speciesName,
        }

        result.push(pokemonObj)
    }

    return result
}


  
const ButtonCollection = (props) => {
    const [opacity, setOpacity] = useState(0);
    const [runOnce, setRunOnce] = useState(false);
    const [searchInput, setSearchInput] = useState("")
    const [currentTagObj, setCurrentTagObj] = useContext(CurrentTagObjContext)

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
                            return obj.speciesName.toLowerCase().includes(searchInput.toLowerCase())
                        }).map((obj, index) => {
                            return <DexButton 
                                        key={index} 
                                        speciesName={obj.speciesName} 
                                        dexNumber={obj.dexNumber} 
                                        opacity={opacity}
                                    />
                        })
                    }
                </div>
            </SearchContext.Provider>
        </OpaqueContext.Provider>
    ))
}


export default ButtonCollection