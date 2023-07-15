import PictureDisplay from "./PictureDisplay"
import "./styles/ArtworkDisplay.css"

const ArtworkDisplay = (props) => {
    const officialArt = props.officialArt
    const nameID = props.nameID
    const formIDs = props.formIDs

    return (
        <div className="ArtworkDisplay">
            <PictureDisplay nameID={nameID} officialArt={officialArt} formIDs={formIDs}/>
        </div>
    )
}

export default ArtworkDisplay