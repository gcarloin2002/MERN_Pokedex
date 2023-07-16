import "./styles/PictureDisplay.css"


const PictureDisplay = (props) => {
    const officialArt = props.officialArt
    const nameID = props.nameID
    const formTags = props.formTags
    
    return ( 
        <div className="PictureDisplay">
            <img className="picture" src={officialArt} alt={"unavailable"}/>
            <h1 className="name">{nameID}</h1>
        </div>
    )
}

export default PictureDisplay