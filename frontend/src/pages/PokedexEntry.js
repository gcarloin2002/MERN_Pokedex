
import EntryContent from "../components/EntryContent"

const PokedexEntry = (props) => {
    const url = window.location.href;
    const name = url.slice(22)
    const pokemonData = props.pokemonData
    

    return (
        <>
            <EntryContent name={name} dexNum={props.dexNum} pokemonData={pokemonData}/>
        </>
    )
}


export default PokedexEntry