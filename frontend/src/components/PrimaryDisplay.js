import PictureDisplay from "./PictureDisplay"
import "./styles/PrimaryDisplay.css"

const PrimaryDisplay = (props) => {
    const officialArt = props.officialArt
    const displayName = props.displayName
    const formTags = props.formTags

    return (
        <div className="PrimaryDisplay">
            <div className="secondHandDiv">
                <PictureDisplay officialArt={officialArt} formTags={formTags}/>
                <div className="nameDiv">{displayName}</div> 
            </div>
            <div className="secondHandDiv">
                
                

            </div>
        </div>
    )
}

export default PrimaryDisplay