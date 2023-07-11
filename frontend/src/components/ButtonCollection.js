import DexButton from "./DexButton"
import "./ButtonCollection.css"
import standardImages from "./imagesArrays"
  
const ButtonCollection = (props) => {
    const pkmn = props.pkmn // list of every name and url of pokemon
    console.log(standardImages)
    
    return (
        <div className="DexButtons">
            {Object.keys(standardImages).map((imageName, index) => (
            <img key={index} src={standardImages[imageName]} alt={imageName} className="pokemonImages"/>
        ))}
            {pkmn.map((p, index) => (
                <DexButton key={index} data={p} dexNumber={index + 1}/>
            ))}
        </div>
    )
}


export default ButtonCollection