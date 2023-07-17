import PictureDisplay from "./PictureDisplay"
import "./styles/PrimaryDisplay.css"

const PrimaryDisplay = (props) => {
    const officialArt = props.officialArt
    const nameID = props.nameID
    const formTags = props.formTags

    return (
        <div className="PrimaryDisplay">
            <PictureDisplay nameID={nameID} officialArt={officialArt} formTags={formTags}/>
        </div>
    )
}

export default PrimaryDisplay