import { useEffect } from "react"
import "./DexButton.css"

const DexButton = (props) => {
    const data = props.data
    const dexNumber = "#" + props.dexNumber
    const name = data.name
    const url = data.url 
    
    return (
    <button key={props.key}>
        {name + " " + dexNumber} 
    </button>
    )
}


export default DexButton