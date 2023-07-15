import PictureDisplay from "./PictureDisplay"
import "./styles/ArtworkDisplay.css"

const ArtworkDisplay = (props) => {
    const URLs = props.URLs

    return (
        <div className="ArtworkDisplay">
            <PictureDisplay URLs={URLs}/>
        </div>
    )
}

export default ArtworkDisplay