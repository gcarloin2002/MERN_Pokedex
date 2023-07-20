import "./styles/AbilityDisplay.css"

const generateAbilityDivs = (abilities) => {
    // Has one ability
    if (abilities.length === 1) {
        return (
            <div className="abilityDiv">
                {abilities[0]}
            </div>
        )
    }

    // Has one regular and one hidden ability
    else if (abilities.length === 2) {
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
    const style = props.style
    const abilities = props.abilities
    return (
        <div className="AbilityDisplay" style={style}>
            <div className="abilityLabel">{((abilities.length === 1) ? "Ability" : "Abilities")}</div>
            <div className="abilityContainer">
                {generateAbilityDivs(abilities)}
            </div>
        </div>
    )
}


export default AbilityDisplay