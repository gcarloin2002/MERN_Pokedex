import "./styles/PictureDisplay.css"


const PictureDisplay = (props) => {
    const URLs = props.URLs
    const mainURL = props.URLs[0]

    return ( 
        <div className="PictureDisplay">
            {URLs.map((item, index) => <p key={index}>{item}</p>)}
        </div>
    )
}

export default PictureDisplay