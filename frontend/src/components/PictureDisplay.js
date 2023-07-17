import "./styles/PictureDisplay.css"


const PictureDisplay = (props) => {
    const officialArt = props.officialArt
    const nameID = props.nameID
    const formTags = props.formTags
    
    return ( 
        <div className="PictureDisplay">
            <img className="picture" src={officialArt} alt={"unavailable"}/>
            <p className="name">{nameID}</p>
        </div>
    )
}

export default PictureDisplay