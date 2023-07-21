import TypingDisplay from "./TypingDisplay"
import AbilityDisplay from "./AbilityDisplay"
import GenderDisplay from "./GenderDisplay"
import StatsDisplay from "./StatsDisplay"
import PictureDisplay from "./PictureDisplay"
import "./styles/PrimaryDisplay.css"

const generateTyping = (entryData) => {
    const types = entryData.types
    if (types.length === 1){
        return [types[0].type.name]
    }

    else {
        return [types[0].type.name, types[1].type.name]
    }
}

const generateAbilities = (entryData) => {
    const abilities = entryData.abilities
    return abilities.map((abilityObj) => {
        return ((abilityObj.ability.name).split("-").map((word) => word.charAt(0).toUpperCase() + word.slice(1))).join(" ")
    })
}

const generatePrimaryDivStyling = (types) => {

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

    const greyBorder = "#808080"
    const greyContent = "#c0c0c0"

    if (types.length === 1){
        const solidColor = colorScheme[types[0]][0]
        const lightColor = colorScheme[types[0]][1]

        const borderGradient = ([greyBorder, solidColor, solidColor, solidColor, solidColor, solidColor, solidColor, greyBorder]).join(", ")
        const contentGradient = ([greyContent, lightColor, lightColor, lightColor, lightColor, greyContent]).join(", ")

        return {background:"linear-gradient(to right," + contentGradient + ") padding-box, linear-gradient(to right, " + borderGradient +  ") border-box"}
    }

    else {
        const solidColor1 = colorScheme[types[0]][0]
        const lightColor1 = colorScheme[types[0]][1]
        const solidColor2 = colorScheme[types[1]][0]
        const lightColor2 = colorScheme[types[1]][1]

        const borderGradient = ([greyBorder, solidColor1, solidColor1, solidColor1, solidColor2, solidColor2, solidColor2, greyBorder]).join(", ")
        const contentGradient = ([greyContent, lightColor1, lightColor1, lightColor2, lightColor2, greyContent]).join(", ")

        return {background:"linear-gradient(to right," + contentGradient + ") padding-box, linear-gradient(to right, " + borderGradient +  ") border-box"}
    }
}

const generateFontStyling = (zone, types) => {
    const colorScheme = {
        normal: "#585838",
        fighting: "#601814",
        flying: "#3b17a9",
        poison: "#502050",
        ground: "#886b1c",
        rock: "#5c501c",
        bug: "#545c10",
        ghost: "#382c4c",
        steel: "#4e4e76",
        fire: "#863e0a",
        water: "#10399c",
        grass: "#3a6b21",
        electric: "#8f7305",
        psychic: "#a10735",
        ice: "#338585",
        dragon: "#2e0593",
        dark: "#382c24",
        fairy: "#a81c3b"
    }
    
    if (zone === "left"){
        return {color: colorScheme[types[0]]}
    }
    
    else {
        if (types.length === 1){
            return {color: colorScheme[types[0]]}
        }

        else {
            return {color: colorScheme[types[1]]}
        }
    }
}


const PrimaryDisplay = (props) => {
    const entryData = props.entryData
    const speciesData = props.speciesData
    const officialArt = props.officialArt
    const displayName = props.displayName
    const formTags = props.formTags

    const types = generateTyping(entryData)
    const primaryDivStyling = generatePrimaryDivStyling(types)
    const leftFontStyling = generateFontStyling("left", types)
    const rightFontStyling = generateFontStyling("right", types)
    const abilities = generateAbilities(entryData)

    return (
        <div className="PrimaryDisplay" style={primaryDivStyling}>
            <div className="secondHandDiv">
                <PictureDisplay officialArt={officialArt} formTags={formTags} types={types}/>
                <div className="nameDisplay" style={leftFontStyling}>{displayName}</div> 
            </div>
            <div className="secondHandDiv">
                <TypingDisplay style={rightFontStyling} types={types}/>
                <AbilityDisplay style={rightFontStyling} abilities={abilities}/>
                <GenderDisplay speciesData={speciesData}/>
                <StatsDisplay types={types}/>
            </div>
        </div>
    )
}

export default PrimaryDisplay