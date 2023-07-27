import TypingDisplay from "./TypingDisplay"
import AbilityDisplay from "./AbilityDisplay"
import GenderDisplay from "./GenderDisplay"
import StatsDisplay from "./StatsDisplay"
import PictureDisplay from "./PictureDisplay"
import { CurrentTagObjContext } from "../../App"  
import { useContext } from "react"
import "./styles/PrimaryDisplay.css"

const inBetween = (a, b, c) => ((a <= c) && (c <= b))

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
        return ((abilityObj.ability.name).split("-").map((word) => (word.charAt(0).toUpperCase() + word.slice(1)).replace("Rks", "RKS"))).join(" ")
    })
}

const generateBaseStats = (entryData) => {
    const stats = entryData.stats
    return {
        HP: stats[0].base_stat,
        Attack: stats[1].base_stat,
        Defense: stats[2].base_stat,
        Sp_Attack: stats[3].base_stat,
        Sp_Defense: stats[4].base_stat,
        Speed: stats[5].base_stat,
        Total: stats[0].base_stat + stats[1].base_stat + stats[2].base_stat + stats[3].base_stat + stats[4].base_stat + stats[5].base_stat  
    }
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

export const generateNameDisplay = (speciesName, tagObj) => {
    const form = Number(tagObj["form"])
    const appearance = tagObj["appearance"]

    // Standard
    if (inBetween(1, 1010, form)) {
        switch(form) {
            case 201: // Unowns
                if (form === Number(appearance)) {return "Unown A"}

                else {
                    return "Unown (" + appearance.slice(4).toUpperCase() + ")"
                }
            case 412:
                return "Burmy (Plant Cloak)"
            case 413:
                return "Wormadam (Plant Cloak)"
            case 892:
                return "Single Strike Style Urshifu"
            default:
                return speciesName
        }
    }

    // Deoxys 
    else if (inBetween(10001, 10003, form)){
        switch(form) {
            case 10001:
                return speciesName + " (Attack Form)"
            case 10002:
                return speciesName + " (Defense Form)"
            case 10003:
                return speciesName + " (Speed Form)"
        }
    }

    // Mega
    else if (inBetween(10033, 10090, form)){
        switch(form) {
            case 10034:
                return "Mega " + speciesName + " X"
            case 10035:
                return "Mega " + speciesName + " Y"
            case 10043:
                return "Mega " + speciesName + " X"
            case 10044:
                return "Mega " + speciesName + " Y"
            default:
                return "Mega " + speciesName
        }
    }

    // Alolan
    else if (inBetween(10091, 10115, form)){
        switch(form) {
            case 10094:
                return "Original Cap Pikachu"
            case 10095:
                return "Hoenn Cap Pikachu"
            case 10096:
                return "Sinnoh Cap Pikachu"
            case 10097:
                return "Unova Cap Pikachu"
            case 10098:
                return "Kalos Cap Pikachu"
            case 10099:
                return "Alola Cap Pikachu"
            default:
                return "Alolan " + speciesName
        }
    }

    else if (form === 10148){return "Partner Cap Pikachu"}
    else if (form === 10160){return "World Cap Pikachu"}

    // Galarian forms
    else if (inBetween(10161, 10180, form)){return "Galarian " + speciesName}

    else if (form === 10190){return "Eternamax Eternatus"}
    else if (form === 10191){return "Rapid Strike Style Urshifu"}

    // G-Max
    else if (inBetween(10195, 10227, form)){
        switch(form){
            case 10226:
                return "G-Max Single Strike Style Urshifu"
            case 10227:
                return "G-Max Rapid Strike Style Urshifu"

            default: 
                return "G-Max " + speciesName
        }
    }

    // Hisuian
    else if (inBetween(10229, 10244, form)){return "Hisuian " + speciesName}
    
}


const PrimaryDisplay = (props) => {
    const [currentTagObj, setCurrentTagObj] = useContext(CurrentTagObjContext)
    const entryData = props.entryData
    const speciesData = props.speciesData
    const speciesName = (window.location.href).slice(22).replaceAll("_", " ").replaceAll("%E2%99%82", "♂").replaceAll("%E2%99%80", "♀")
    const officialArt = props.officialArt
    const displayName = generateNameDisplay(speciesName, currentTagObj[speciesName])
    const formTags = props.formTags
    const appearanceTags = props.appearanceTags

    const types = generateTyping(entryData)
    const primaryDivStyling = generatePrimaryDivStyling(types)
    const leftFontStyling = generateFontStyling("left", types)
    const rightFontStyling = generateFontStyling("right", types)
    const abilities = generateAbilities(entryData)
    const baseStats = generateBaseStats(entryData)

    return (
        <div className="PrimaryDisplay" style={primaryDivStyling}>
            <div className="secondHandDiv">
                <PictureDisplay 
                    officialArt={officialArt} 
                    formTags={formTags} 
                    appearanceTags={appearanceTags}
                    types={types}
                    displayName={displayName}
                    speciesData={speciesData}
                    speciesName={speciesName}
                />
                <div className="nameDisplay" style={leftFontStyling}>{displayName}</div> 
            </div>
            <div className="secondHandDiv">
                <TypingDisplay style={rightFontStyling} types={types}/>
                <AbilityDisplay style={rightFontStyling} abilities={abilities}/>
                <GenderDisplay speciesData={speciesData}/>
                <StatsDisplay types={types} baseStats={baseStats}/>
            </div>
        </div>
    )
}

export default PrimaryDisplay