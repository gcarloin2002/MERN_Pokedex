import "./styles/DirectoryBar.css"
import { RenderEntryFormContext } from "./EntryContent"
import leftArrow from "./assets/leftArrow.png"
import rightArrow from "./assets/rightArrow.png"
import { CurrentTagObjContext } from "../../App"
import { useNavigate} from "react-router-dom"
import { useContext } from "react"

const leftPic = (dexNum, handleLeftContainerClick) => {
    if (dexNum !== 1){
        return (
        <div className="leftContainer" onClick={handleLeftContainerClick}>
            <img className="leftArrowPic" src={leftArrow} alt={""}/>
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
            <img className="rightArrowPic" src={rightArrow} alt={""}/>
        </div>
        )
    }

    else {
        return <div className="soleRightContainer"></div>
    }
}

// Component
const DirectoryBar = (props) => {
    const [renderEntryForm, setRenderEntryForm] = useContext(RenderEntryFormContext)
    const dexNum = props.dexNum
    const speciesName = props.speciesName
    const neighbors = props.neighbors
    const navigate = useNavigate()

    const handleCentralContainerClick = () => {
        navigate("/")
    }

    const handleLeftContainerClick = () => {    
        setRenderEntryForm(!renderEntryForm)
        navigate("/" + neighbors[0])
    }

    const handleleRightContainerClick = () => {
        setRenderEntryForm(!renderEntryForm)
        navigate("/" + neighbors[1])
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