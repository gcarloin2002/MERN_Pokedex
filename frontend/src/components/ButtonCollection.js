import DexButton from "./DexButton"
import "./ButtonCollection.css"
import imagesArray from "./imagesArray"
  
const ButtonCollection = (props) => {
    const pkmn = props.pkmn // list of every name and url of pokemon
    
    return (
        <div className="DexButtons">
            {pkmn.map((p, index) => (
                <DexButton key={index} data={p} dexNumber={index + 1} imgSrc={imagesArray[(index + 1) + ".png"]}/>
            ))}
        </div>
    )
}


export default ButtonCollection