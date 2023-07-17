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

        const borderGradient = ([greyBorder, solidColor, solidColor, solidColor, solidColor, greyBorder]).join(", ")
        const contentGradient = ([greyContent, lightColor, lightColor, lightColor, lightColor, greyContent]).join(", ")

        return {background:"linear-gradient(to right," + contentGradient + ") padding-box, linear-gradient(to right, " + borderGradient +  ") border-box"}
    }

    else {
        const solidColor1 = colorScheme[types[0]][0]
        const lightColor1 = colorScheme[types[0]][1]
        const solidColor2 = colorScheme[types[1]][0]
        const lightColor2 = colorScheme[types[1]][1]

        const borderGradient = ([greyBorder, solidColor1, solidColor1, solidColor2, solidColor2, greyBorder]).join(", ")
        const contentGradient = ([greyContent, lightColor1, lightColor1, lightColor2, lightColor2, greyContent]).join(", ")
        
        return {background:"linear-gradient(to right," + contentGradient + ") padding-box, linear-gradient(to right, " + borderGradient +  ") border-box"}
    }
}

/*
background: linear-gradient(to right,#bbe3a7, #bbe3a7, #bbe3a7, #d699d6, #d699d6, #d699d6) padding-box,
linear-gradient(to right, #78c850, #78c850, #78c850, #a040a0, #a040a0, #a040a0) border-box;

Normal: ["#a8a878", "#d3d3bb"]
Fighting: ["#c03028", "#e7918c"]
Flying: ["#a890f0", "#d3c7f7"]
Poison: ["#a040a0", "#d699d6"]
Ground: ["#e0c068", "#efdfb3"]
Rock: ["#b8a038", "#dfd297"]
Bug: ["#a8b820", "#dee982"]
Ghost: ["#705898", "#b7a9cd"]
Steel: ["#b8b8d0", "#dbdbe7"]
Fire: ["#f08030", "#f7bf97"]
Water: ["#6890f0", "#b3c7f7"]
Grass: ["#78c850", "#bbe3a7"]
Electric: ["#f8d030", "#fbe797"]
Psychic: ["#f85888", "#fbabc3"]
Ice: ["#98d8d8", "#cbebeb"]
Dragon: ["#7038f8", "#b79bfb"]
Dark: ["#705848", "#bfaa9c"]
Fairy: ["#ee99ac", "#f6ccd5"]
*/

const PrimaryDisplay = (props) => {
    const entryData = props.entryData
    const officialArt = props.officialArt
    const displayName = props.displayName
    const formTags = props.formTags
    const types = generateTyping(entryData)
    const primaryDivStyling = generatePrimaryDivStyling(types)

    return (
        <div className="PrimaryDisplay" style={primaryDivStyling}>
            <div className="secondHandDiv">
                <PictureDisplay officialArt={officialArt} formTags={formTags}/>
                <div className="nameDiv">{displayName}</div> 
            </div>
            <div className="secondHandDiv">
                
                

            </div>
        </div>
    )
}

export default PrimaryDisplay