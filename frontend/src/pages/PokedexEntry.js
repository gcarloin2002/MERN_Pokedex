import EntryContent from "../components/EntryContent"

const PokedexEntry = () => {
    const url = window.location.href;
    const name = url.slice(22)

    return (
        <>
            <EntryContent name={name}/>
        </>
    )
}


export default PokedexEntry