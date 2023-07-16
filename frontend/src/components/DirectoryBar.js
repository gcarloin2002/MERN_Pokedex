import "./styles/DirectoryBar.css"
import leftArrow from "../assets/gui/leftArrow.png"
import rightArrow from "../assets/gui/rightArrow.png"
import { useNavigate } from "react-router-dom"

const leftPic = (dexNum, handleLeftContainerClick) => {
    if (dexNum !== 1){
        return (
        <div className="leftContainer" onClick={handleLeftContainerClick}>
            <img className="leftArrowPic" src={leftArrow} alt={""}/>
            <img 
                className="leftPokemonPic" 
                src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/" + (dexNum - 1)  +".png"} 
                alt={""}
            />
        </div>
        )
    }

    else {
        return <div className="soleLeftContainer"></div>
    }
}

const rightPic = (dexNum, handleleRightContainerClick) => {
    if (dexNum !== 1010){
        return (
        <div className="rightContainer" onClick={handleleRightContainerClick}>
            <img 
                className="rightArrowPic" src={rightArrow} alt={""}/>
            <img 
                className="rightPokemonPic" 
                src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/" + (dexNum + 1) + ".png"} 
                alt={""}
            />
        </div>
        )
    }

    else {
        return <div className="soleRightContainer"></div>
    }
}

// Component
const DirectoryBar = (props) => {
    const dexNum = props.dexNum
    const neighbors = props.neighbors
    const navigate = useNavigate()

    const handleCentralContainerClick = () => {
        navigate("/")
    }

    const handleLeftContainerClick = () => {
        navigate("/" + neighbors[0])
        navigate(0)
    }

    const handleleRightContainerClick = () => {
        navigate("/" + neighbors[1])
        navigate(0)
    }

    return (
        <div className="DirectoryBar">
            {leftPic(dexNum, handleLeftContainerClick)}
            <div className="centralContainer" onClick={handleCentralContainerClick}>
                <p className="centralContainerText">return to Homepage</p>
            </div>
            {rightPic(dexNum, handleleRightContainerClick)}
        </div>
    )
}

export default DirectoryBar