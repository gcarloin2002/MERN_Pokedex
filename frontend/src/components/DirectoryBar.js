import "./styles/DirectoryBar.css"
import leftArrow from "../assets/gui/leftArrow.png"
import rightArrow from "../assets/gui/rightArrow.png"
import { useNavigate } from "react-router-dom"

const DirectoryBar = (props) => {
    const dexNum = props.dexNum
    const neighbors = props.neighbors
    const navigate = useNavigate()
    const leftPic = (dexNum) => {
        if (dexNum !== 1){
            return (
            <div className="leftContainer">
                <img className="leftArrowPic" src={leftArrow} alt={""}/>
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
                    className="rightArrowPic" src={rightArrow} alt={""}/>
                <img 
                    className="rightPokemonPic" 
                    src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/" + (dexNum + 1) +".png"} 
                    alt={""}
                />
            </div>
            )
        }
    }

    const handleCentralContainerClick = () => {
        navigate("/")
    }

    return (
        <div className="DirectoryBar">
            {leftPic(dexNum)}
            <div className="centralContainer" onClick={handleCentralContainerClick}>
                <p className="centralContainerText">return to Homepage</p>
            </div>
            {rightPic(dexNum)}
        </div>
    )
}

export default DirectoryBar