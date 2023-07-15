import PictureDisplay from "./PictureDisplay"
import "./styles/ArtworkDisplay.css"

const ArtworkDisplay = (props) => {
    const officialArt = props.officialArt
    

    return (
        <div className="ArtworkDisplay">
            <PictureDisplay officialArt={officialArt}/>
        </div>
    )
}

export default ArtworkDisplay