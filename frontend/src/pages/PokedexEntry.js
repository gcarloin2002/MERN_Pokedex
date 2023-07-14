
import EntryContent from "../components/EntryContent"

const PokedexEntry = (props) => {
    const url = window.location.href;
    const name = url.slice(22)
    

    return (
        <>
            <EntryContent name={name} dexNum={props.dexNum}/>
        </>
    )
}


export default PokedexEntry