import "./styles/PictureDisplay.css"


const PictureDisplay = (props) => {
    const officialArt = props.officialArt
    
    return ( 
        <div className="PictureDisplay">
            <img src={officialArt} alt={"unavailable"}/>
        </div>
    )
}

export default PictureDisplay