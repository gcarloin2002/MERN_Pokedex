import "./DexButton.css"

const DexButton = (props) => {
    const number = props.pokemon
    const name = props.data.name
    return (
    <button key={props.key}>
        {name} 
    </button>
    )
}


export default DexButton