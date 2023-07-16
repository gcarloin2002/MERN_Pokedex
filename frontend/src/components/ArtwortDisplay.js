import PictureDisplay from "./PictureDisplay"
import "./styles/ArtworkDisplay.css"

const ArtworkDisplay = (props) => {
    const officialArt = props.officialArt
    const nameID = props.nameID
    const formTags = props.formTags

    return (
        <div className="ArtworkDisplay">
            <PictureDisplay nameID={nameID} officialArt={officialArt} formTags={formTags}/>
        </div>
    )
}

export default ArtworkDisplay