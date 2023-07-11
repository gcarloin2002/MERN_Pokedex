import DexButton from "./DexButton"
import "./ButtonCollection.css"

const ButtonCollection = (props) => {
    const names = props.names
    return (
        <div className="DexButtons">
            <DexButton name={names[1]}/>
            <DexButton name={names[2]}/>
            <DexButton name={names[3]}/>
            <DexButton name={names[4]}/>
            <DexButton name={names[5]}/>
            <DexButton name={names[6]}/>
            <DexButton name={names[7]}/>
        </div>
    )
}


export default ButtonCollection