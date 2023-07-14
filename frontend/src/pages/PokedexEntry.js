
import EntryContent from "../components/EntryContent"

const PokedexEntry = (props) => {
    const url = window.location.href;
    const name = url.slice(22)
    const allPokemonData = props.pokemon
    

    return (
        <>
            <EntryContent name={name} dexNum={props.dexNum} allPokemonData={allPokemonData}/>
        </>
    )
}


export default PokedexEntry