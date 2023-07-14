import { useNavigate } from 'react-router-dom';
import { useEffect, useContext } from 'react';
import { OpaqueContext } from './ButtonCollection';
import "./styles/DexButton.css"
import pokeball_Icon from "../assets/gui/pokeball-icon.png"


const determineDisplayName = (name, dexNumber) => {
    if (name.includes("-")) {

        // Fixes capitalization
        const index = name.indexOf("-")
        const firstSlice = name.slice(0, index)
        const lastSlice = name.charAt(index + 1).toUpperCase() + name.slice(index + 2, name.length)

        // Checks for already correct names (Ho-Oh)
        if (dexNumber === 250) {    
            return firstSlice  + "-" + lastSlice
        }

        // Checks for Nidorans
        else if (dexNumber === 29 || dexNumber === 32){
            switch(lastSlice){
                case "F":
                    return firstSlice + "♀"
                case "M":
                    return firstSlice + "♂"
                default:
                    return ""
        }}
         
        // Checks for Mr
        else if (dexNumber === 122 || dexNumber === 866){
            switch(lastSlice){
                case "Mime":
                    return firstSlice + ". " + lastSlice
                case "Rime":
                    return firstSlice + ". " + lastSlice
                default:
                    return ""
        }}

        // Checks for Mime. Jr
        else if (dexNumber === 439) {
            return firstSlice + " " + lastSlice + "."
        }

        // Checks for Type Null 
        else if (dexNumber === 772) {
            return firstSlice + " " + lastSlice
        }

        // Checks for Kommo-o line 
        else if ((782 <= dexNumber) && (dexNumber <= 784)) {
            return firstSlice + "-o"
        }

        // Checks for Tapus
        else if ((785 <= dexNumber) && (dexNumber <= 788)){
            return firstSlice + " " + lastSlice
        }

        // Checks for Paradox Pokemon and Ruin Quartet
        else if ((984 <= dexNumber) && (dexNumber <= 1010)) {
            return firstSlice + " " + lastSlice
        }

        // Checks for names where the first slice is the name
        else {
            return firstSlice
        }
    }

    else {
        return name
    }
}

const determineUrlName = (name) => {
    if (name.includes(' ')){
        return name.replace(" ", "_")
    }
    else {
        return name
    }
}

const DexButton = (props) => {
    const [opacity, setOpacity] = useContext(OpaqueContext);

    const data = props.data
    const dexNumber = props.dexNumber
    const imageURL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/" + dexNumber + ".png"
    const origName = data.name
    const displayName = determineDisplayName(origName.charAt(0).toUpperCase() + origName.slice(1), dexNumber)
    const urlName = determineUrlName(displayName)
    const navigate = useNavigate()

    useEffect(() => {
        setOpacity(1);
    }, []);

    const handleClick = () => {
        setOpacity(0)
        setTimeout(() => {
            navigate("/" + urlName)
        }, 500)
    }

    return (
    <div className={"DexButton"} onClick={handleClick} style ={{opacity: props.opacity}}>
        <p className="displayNumber">{dexNumber}</p>
        <img className="DexButtonPicture" src={imageURL} alt={"unavailable"}/>
        <img className="pokeball_Icon" src={pokeball_Icon} alt={"unavailable"}/>
        <p className="displayName">{displayName}</p>
    </div>
    )
}


export { DexButton, determineDisplayName, determineUrlName }