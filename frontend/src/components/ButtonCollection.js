import DexButton from "./DexButton"
import "./ButtonCollection.css"

const ButtonCollection = (props) => {
    const pkmn = props.pkmn

    return (
        <div className="DexButtons">
            {pkmn.map((p, index) => (
                <DexButton key={index} data={p} dexNumber={index + 1}/>
            ))}
        </div>
    )
}


export default ButtonCollection