import { useEffect } from "react"
import "./DexButton.css"

const DexButton = (props) => {
    const data = props.data
    const dexNumber = "#" + props.dexNumber
    const name = data.name
    const url = data.url 
    const imageFilepath = props.imgSrc
    console.log(imageFilepath)
    
    return (
    <div className="DexButton" key={props.key}>
        <img src={imageFilepath} alt={"unavailable"}/>
        {name + " " + dexNumber} 
    </div>
    )
}


export default DexButton