import { useNavigate } from 'react-router-dom';
import { useEffect, useContext } from 'react';
import { OpaqueContext } from './ButtonCollection';
import { CurrentTagObjContext } from '../../App'; 
import { generateImgSrc } from '../PokedexEntryComponents/PictureDisplay';
import pokeballIcon from "./assets/pokeball-icon.png"
import "./styles/DexButton.css"



export const generateSpeciesName = (name, dexNumber) => {
    if (name.includes("-")) {

        // Fixes capitalization
        const index = name.indexOf("-")
        const firstSlice = name.slice(0, index)
        const lastSlice = name.charAt(index + 1).toUpperCase() + name.slice(index + 2, name.length)

        // Checks for already correct names (Ho-Oh)
        if (dexNumber === 250 || dexNumber === 474) {    
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
            return firstSlice + ": " + lastSlice
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

export const generateUrlName = (speciesName) => {
    if (speciesName.includes(' ')){
        return speciesName.replace(" ", "_")
    }
    else {
        return speciesName
    }
}

export const DexButton = (props) => {
    const [opacity, setOpacity] = useContext(OpaqueContext);
    const [currentTagObj, setCurrentTagObj] = useContext(CurrentTagObjContext)
    
    const dexNumber = props.dexNumber
    const speciesName = props.speciesName
    const imgSrc = generateImgSrc(currentTagObj[speciesName])
    const urlName = generateUrlName(speciesName) 
    const navigate = useNavigate()

    const handleClick = () => {
        setOpacity(0)
        setTimeout(() => {
            navigate("/" + urlName)
        }, 800)
    }

    useEffect(() => setOpacity(1));

    return (
    <div className="DexButton" onClick={handleClick} style ={{opacity: props.opacity}}>
        <p className="dexNumber">{dexNumber}</p>
        <img className="DexButtonPicture" src={imgSrc} alt={"DexButtonPicture"}/>
        <img className="pokeballIcon" src={pokeballIcon} alt={"pokeballIcon"}/>
        <p className="speciesName">{speciesName}</p>
    </div>
    )
}


export default DexButton