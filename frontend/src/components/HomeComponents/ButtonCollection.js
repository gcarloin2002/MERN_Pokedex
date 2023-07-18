import { DexButton }from "./DexButton"
import React, { useEffect, useState } from 'react'
import "./styles/ButtonCollection.css"
import SearchBar from "./SearchBar"

export const OpaqueContext = React.createContext()
  
const ButtonCollection = (props) => {
    const [opacity, setOpacity] = useState(0);
    const [runOnce, setRunOnce] = useState(false);
    const pokemonData = props.pokemonData // list of every name and url of pokemon

    // Lets component render once
    useEffect(() => {
        setRunOnce(true)
    },[])
    
    return (runOnce && (
        <OpaqueContext.Provider value={[opacity, setOpacity]}>
            <SearchBar opacity={opacity}/>
            <div className="ButtonCollection">
                {pokemonData.map((p, index) => (
                    <DexButton key={index} data={p} dexNumber={index + 1} opacity={opacity}/>
                ))}
            </div>
        </OpaqueContext.Provider>
    ))
}


export default ButtonCollection