import "./styles/StatsDisplay.css"


const generateStatsDisplayStyle = (types) => {
    const colorScheme = {
        normal: ["#a8a878", "#d3d3bb"],
        fighting: ["#c03028", "#e7918c"],
        flying: ["#a890f0", "#d3c7f7"],
        poison: ["#a040a0", "#d699d6"],
        ground: ["#e0c068", "#efdfb3"],
        rock: ["#b8a038", "#dfd297"],
        bug: ["#a8b820", "#dee982"],
        ghost: ["#705898", "#b7a9cd"],
        steel: ["#b8b8d0", "#dbdbe7"],
        fire: ["#f08030", "#f7bf97"],
        water: ["#6890f0", "#b3c7f7"],
        grass: ["#78c850", "#bbe3a7"],
        electric: ["#f8d030", "#fbe797"],
        psychic: ["#f85888", "#fbabc3"],
        ice: ["#98d8d8", "#cbebeb"],
        dragon: ["#7038f8", "#b79bfb"],
        dark: ["#705848", "#bfaa9c"],
        fairy: ["#ee99ac", "#f6ccd5"]
    }


    if (types.length === 1){
        return {backgroundColor: colorScheme[types[0]][0]}
    }

    else {
        return {backgroundColor: colorScheme[types[1]][0]}
    }
}

const generateStatsBarDiv = (types, statName, statNum) => {
    const colorScheme = {
        normal: ["#a8a878", "#d3d3bb"],
        fighting: ["#c03028", "#e7918c"],
        flying: ["#a890f0", "#d3c7f7"],
        poison: ["#a040a0", "#d699d6"],
        ground: ["#e0c068", "#efdfb3"],
        rock: ["#b8a038", "#dfd297"],
        bug: ["#a8b820", "#dee982"],
        ghost: ["#705898", "#b7a9cd"],
        steel: ["#b8b8d0", "#dbdbe7"],
        fire: ["#f08030", "#f7bf97"],
        water: ["#6890f0", "#b3c7f7"],
        grass: ["#78c850", "#bbe3a7"],
        electric: ["#f8d030", "#fbe797"],
        psychic: ["#f85888", "#fbabc3"],
        ice: ["#98d8d8", "#cbebeb"],
        dragon: ["#7038f8", "#b79bfb"],
        dark: ["#705848", "#bfaa9c"],
        fairy: ["#ee99ac", "#f6ccd5"]
    }

    if (statName === "Total"){
        return (
            <div className="statRowContainer">
                <div className="leftStatContainer">
                    <div className="statName">{statName + ":"} </div>
                    <div className="statNum">{statNum}</div>
                </div>
            </div>
        )
    }

    else if (types.length === 1){
        const lightColor = colorScheme[types[0]][1]
        return (
            <div className="statRowContainer">
                <div className="leftStatContainer">
                    <div className="statName">{statName + ":"} </div>
                    <div className="statNum">{statNum}</div>
                </div>
                <div className="statBar" style={{width: statNum + "px"}}></div>
            </div>
        )
    }

    else {
        const lightColor = colorScheme[types[1]][1]
        return (
            <div className="statRowContainer">
                <div className="leftStatContainer">
                    <div className="statName">{statName + ":"} </div>
                    <div className="statNum">{statNum}</div>
                </div>
                <div className="statBar" style={{width: statNum + "px"}}></div>
            </div>
        )
    }
}

const StatsDisplay = (props) => {  
    const types = props.types
    const baseStats = props.baseStats
    const StatsDisplayStyle = generateStatsDisplayStyle(types)


    return (
        <div className="StatsDisplay" style={StatsDisplayStyle}>
            <div className="statsLabel">Base Stats</div>
            <div className="statsContainer">
                {generateStatsBarDiv(types, "HP", baseStats.HP)}
                {generateStatsBarDiv(types, "Attack", baseStats.Attack)}
                {generateStatsBarDiv(types, "Defense", baseStats.Defense)}
                {generateStatsBarDiv(types, "Sp Atk", baseStats.Sp_Attack)}
                {generateStatsBarDiv(types, "Sp Def", baseStats.Sp_Defense)}
                {generateStatsBarDiv(types, "Speed", baseStats.Speed)}
                {generateStatsBarDiv(types, "Total", baseStats.Total)}
            </div>
        </div>
    )
}


export default StatsDisplay