import "./styles/AbilityDisplay.css"
import { useContext } from "react"
import { CurrentTagObjContext } from "../../App"

const generateAbilityDivs = (abilities, tagObj) => {
    // Has one ability
    if (tagObj.form === "718" || tagObj.form === "10118") {
        return (
            <>
                <div className="abilityDiv">
                    {abilities[0]}
                </div>
                <div className="abilityDiv">
                    Power Construct
                </div>
            </>
        )
    } 


    else if (abilities.length === 1 || tagObj.form === "10120") {
        return (
            <div className="abilityDiv">
                {abilities[0]}
            </div>
        )
    }

    // Has one regular and one hidden ability
    else if (abilities.length === 2) {
        if (abilities[0] === abilities[1]){
            return (
                <div className="abilityDiv">
                    {abilities[0]}
                </div>
            )
        }

        else {
            return (
                <>
                    <div className="abilityDiv">
                        {abilities[0]}
                    </div>
                    <div className="abilityDiv">
                        {abilities[1]} <br/>(Hidden)
                    </div>
                </>
            )
        }
    }

    // Has two regular and one hidden ability
    else if (abilities.length === 3) {
        return (
            <>
                <div className="abilityDiv">
                    <div className="abilityDiv">
                        {abilities[0]}
                    </div>

                    <div className="abilityDiv">
                            {abilities[1]}
                    </div>
                </div>
                    



                <div className="abilityDiv">
                    <div className="abilityDiv">
                        {abilities[2]}
                    </div>
                    (Hidden)
                </div>
            </>
        )
    }
    return ""
}

const AbilityDisplay = (props) => {
    const [currentTagObj, setCurrentTagObj] = useContext(CurrentTagObjContext)
    const style = props.style
    const abilities = props.abilities
    const speciesName = props.speciesName
    return (
        <div className="AbilityDisplay" style={style}>
            <div className="abilityLabel">Abilities</div>
            <div className="abilityContainer">
                {generateAbilityDivs(abilities, currentTagObj[speciesName])}
            </div>
        </div>
    )
}


export default AbilityDisplay