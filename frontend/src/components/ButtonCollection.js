import { DexButton }from "./DexButton"
import "./styles/ButtonCollection.css"


const importAll = (r) => {
    let images = {};
    r.keys().map((item, index) => {images[item.replace('./', '')] = r(item); });
    return images;
}

  
const ButtonCollection = (props) => {
    const pkmn = props.pkmn // list of every name and url of pokemon
    const imagesArray = importAll(require.context('../assets/images/official_artwork', false, /\.(png)$/));
    
    return (
        <div className="DexButtons">
            {pkmn.map((p, index) => (
                 <DexButton key={index} data={p} dexNumber={index + 1} imgSrc={imagesArray[(index + 1) + ".png"]}/>
            ))}
        </div>
    )
}


export default ButtonCollection