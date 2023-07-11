import "./DexButton.css"

const DexButton = (props) => {
    return (
    <button key={props.key}>
        {props.name}
    </button>
    )
}


export default DexButton