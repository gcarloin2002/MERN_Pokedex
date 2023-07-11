import DexButton from "./DexButton"
import "./ButtonCollection.css"

const ButtonCollection = (props) => {
    const pkmn = props.pkmn // list of every name and url of pokemon
    const imageList = require.context('../images/standard', false, /\.(png)$/).keys(); // List of standard image urls
    console.log(imageList)


    return (
        <div className="DexButtons">
            {pkmn.map((p, index) => (
                <DexButton key={index} data={p} dexNumber={index + 1}/>
            ))}
        </div>
    )
}


export default ButtonCollection