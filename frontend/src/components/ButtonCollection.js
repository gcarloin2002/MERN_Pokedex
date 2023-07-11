import DexButton from "./DexButton"
import "./ButtonCollection.css"

const ButtonCollection = (props) => {
    const names = props.names
    return (
        <div className="DexButtons">
            {names.map((name, index) => (
                <DexButton key={index} name={name} />
            ))}
        </div>
    )
}


export default ButtonCollection