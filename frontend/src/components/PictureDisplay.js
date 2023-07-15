import "./styles/PictureDisplay.css"


const PictureDisplay = (props) => {
    const officialArt = props.officialArt
    const name = props.name
    
    return ( 
        <div className="PictureDisplay">
            <img className="picture" src={officialArt} alt={"unavailable"}/>
            <h1 className="name">{name}</h1>
        </div>
    )
}

export default PictureDisplay