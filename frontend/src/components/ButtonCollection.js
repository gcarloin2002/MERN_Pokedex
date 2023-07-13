import { DexButton }from "./DexButton"
import React from 'react'
import { useState } from 'react'
import TopBar from "./TopBar"
import "./styles/ButtonCollection.css"

export const OpaqueContext = React.createContext()
  
const ButtonCollection = (props) => {
    const pkmn = props.pkmn // list of every name and url of pokemon
    const [opacity, setOpacity] = useState(0);
    
    return (
        <OpaqueContext.Provider value={[opacity, setOpacity]}>
            <TopBar opacity={opacity}/>
            <div className="DexButtons">
                {pkmn.map((p, index) => (
                    <DexButton key={index} data={p} dexNumber={index + 1} opacity={opacity}/>
                ))}
            </div>
        </OpaqueContext.Provider>
    )
}


export default ButtonCollection