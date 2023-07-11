import { useEffect } from "react"
import "./DexButton.css"

const DexButton = (props) => {
    const data = props.data
    const dexNumber = "#" + props.dexNumber
    const origName = data.name
    const displayName = origName.charAt(0).toUpperCase() + origName.slice(1)
    const url = data.url 
    const imageFilepath = props.imgSrc
    
    
    return (
    <div className="DexButton" key={props.key}>
        <img className="DexButtonPicture" src={imageFilepath} alt={"unavailable"}/>
        {displayName}
    </div>
    )
}


export default DexButton