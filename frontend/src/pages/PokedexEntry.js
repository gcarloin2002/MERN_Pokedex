import DirectoryBar from "../components/DirectoryBar";

const PokedexEntry = () => {
    const url = window.location.href;
    const urlName = url.slice(22)
    return (
        <>
            <DirectoryBar/>
            <h1>You are currently accessing the {urlName} page</h1>
        </>
    )
}


export default PokedexEntry