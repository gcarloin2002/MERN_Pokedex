import { useEffect } from "react"
import "./DexButton.css"

const DexButton = (props) => {
    const data = props.data
    const url = data.url 
    const imageFilepath = props.imgSrc
    const dexNumber = "#" + props.dexNumber
    const origName = data.name
    console.log(origName)

    const protoDisplayName = origName.charAt(0).toUpperCase() + origName.slice(1)
    const determineDisplayName = (name) => {

        if (name.includes("-")) {
            const index = name.indexOf("-")
            return name.slice(0, index) + "-" + name.charAt(index + 1).toUpperCase() + name.slice(index + 2, name.length)
           
        }

        else {
            return name
        }

        /*
        switch (name) {
            case "Nidoran-f":
                return "Nidoran♀"
            case "Nidoran-m":
                return "Nidoran♂"
            case "Mr-mime":
                return "Mr. Mime"
            case "Ho-oh":
                return "Ho-Oh"
            case "Deoxys-normal":
                return "Deoxys"
            case "Wormadam-plant":
                return "Wormadam"
            case "Mime-jr":
                return "Mime Jr."
            case "Porygon-z":
                return "Porygon-Z"
            case "Giratina-altered":
                return "Giratina"
            case "Shaymin-land":
                return "Shaymin"
            case "Basculin-red-striped":
                return "Basculin"
            case "Darmanitan-standard":
                return "Darmanitan"
            case "Tornadus-incarnate": 
                return "Tornadus"
            case "Thundurus-incarnate":
                return "Thundurus"
            case "Landorus-incarnate":
                return "Landorus"
            default: 
                return name
        }*/
    }
    

    const displayName = determineDisplayName(protoDisplayName)
    
    return (
    <div className="DexButton" key={props.key}>
        <img className="DexButtonPicture" src={imageFilepath} alt={"unavailable"}/>
        {displayName}
    </div>
    )
}


export default DexButton