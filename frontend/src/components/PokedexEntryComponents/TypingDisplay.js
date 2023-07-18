import generateFontStyling from "./PrimaryDisplay"
import "./styles/TypingDisplay.css"

const TypingDisplay = (props) => {
    const types = props.types
    const t = "i"
    console.log(t)



    return (
        <div className="TypingDisplay">
            <div className="typeLabel">Type</div>
            <div className="pokemonType">
                
            </div>
        </div>
    )
}


export default TypingDisplay