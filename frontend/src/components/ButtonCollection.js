import { DexButton }from "./DexButton"
import "./styles/ButtonCollection.css"

  
const ButtonCollection = (props) => {
    const pkmn = props.pkmn // list of every name and url of pokemon
    
    return (
        <div className="DexButtons">
            {pkmn.map((p, index) => (
                 <DexButton key={index} data={p} dexNumber={index + 1} />
            ))}
        </div>
    )
}


export default ButtonCollection