import "./styles/DirectoryBar.css"
import leftArrow from "../assets/gui/leftArrow.png"
import rightArrow from "../assets/gui/rightArrow.png"

const DirectoryBar = (props) => {
    const dexNum = props.dexNum
    const leftPic = (dexNum) => {
        if (dexNum !== 1){
            return (
            <div className="leftContainer">
                <img 
                    className="leftArrowPic"
                    src={leftArrow}
                    alt={""}
                />
                <img 
                    className="leftPokemonPic" 
                    src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/" + (dexNum - 1) + ".png"} 
                    alt={""}
                />
            </div>
            )
        }
    }
    
    const rightPic = (dexNum) => {
        if (dexNum !== 1010){
            return (
            <div className="rightContainer">
                <img 
                    className="rightArrowPic"
                    src={rightArrow}
                    alt={""}
                />
                
                <img 
                    className="rightPokemonPic" 
                    src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/" + (dexNum + 1) +".png"} 
                    alt={""}
                />
            </div>
            )
        }
    }

    return (
        <div className="DirectoryBar">
            {leftPic(dexNum)}
            <div className="centralContainer"></div>
            {rightPic(dexNum)}
        </div>
    )
}

export default DirectoryBar