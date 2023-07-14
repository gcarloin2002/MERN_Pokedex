import "./styles/DirectoryBar.css"

const DirectoryBar = (props) => {
    const dexNum = props.dexNum
    const leftPicURL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/" + (dexNum - 1) + ".png"
    const rightPicURL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/" + (dexNum + 1) +".png"
    
    return (
        <div className="DirectoryBar">
            <img className="leftPic" src={leftPicURL} alt={"leftPicture"}/>
            <img className="rightPic" src={rightPicURL} alt={"rightPicture"}/>
        </div>
    )
}

export default DirectoryBar