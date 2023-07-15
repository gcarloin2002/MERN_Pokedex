import PictureDisplay from "./PictureDisplay"
import "./styles/ArtworkDisplay.css"

const ArtworkDisplay = (props) => {
    const officialArt = props.officialArt
    const name = props.name
    

    return (
        <div className="ArtworkDisplay">
            <PictureDisplay name={name} officialArt={officialArt}/>
        </div>
    )
}

export default ArtworkDisplay