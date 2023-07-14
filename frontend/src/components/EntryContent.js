import DirectoryBar from "./DirectoryBar"
import "./styles/EntryContent.css"


const EntryContent = (props) => {
    const name = props.name

    return (
        <>
            <DirectoryBar/>
            <h1>You are currently accessing the {name} page</h1>
        </>
    )
}


export default EntryContent