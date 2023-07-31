import { DexButton}from "./DexButton"
import SearchBar from "./SearchBar"
import React, { useEffect, useState } from 'react'
import "./styles/ButtonCollection.css"


export const OpaqueContext = React.createContext()
export const SearchContext = React.createContext()


  
const ButtonCollection = (props) => {
    const [opacity, setOpacity] = useState(0);
    const [runOnce, setRunOnce] = useState(false);
    const [searchInput, setSearchInput] = useState("")

    const pokemonDataArray = props.pokemonDataArray
    
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
                                        tagObj={obj}
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