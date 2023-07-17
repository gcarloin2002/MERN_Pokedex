import "./styles/PictureDisplay.css"

const generatePictureDisplayStyling = (types) => {
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
    const whiteBackground = ["#f5f5f5", "#d8d8d8"]
    const contentGradient = ([whiteBackground[0], whiteBackground[0] ,whiteBackground[1], whiteBackground[0], whiteBackground[1], whiteBackground[0], whiteBackground[0]]).join(", ")

    if (types.length === 1){
        const solidColor = colorScheme[types[0]][0]

        const borderGradient = ([greyBorder, solidColor, solidColor, solidColor, solidColor, greyBorder]).join(", ")

        return {background:"linear-gradient(45deg, " + contentGradient + ") padding-box, linear-gradient(to right, " + borderGradient +  ") border-box"}
    }

    else {
        const solidColor1 = colorScheme[types[0]][0]
        const solidColor2 = colorScheme[types[1]][0]

        const borderGradient = ([solidColor1, solidColor1, solidColor2, solidColor2]).join(", ")

        return {background:"linear-gradient(45deg, " + contentGradient + ") padding-box, linear-gradient(to right, " + borderGradient +  ") border-box"}
    }
}

const PictureDisplay = (props) => {
    const officialArt = props.officialArt
    const types = props.types
    const pictureDisplayStyling = generatePictureDisplayStyling(types)
    
    return ( 
        <div className="PictureDisplay" style={pictureDisplayStyling}>
            <img className="picture" src={officialArt} alt={"unavailable"}/>
        </div>
    )
}

export default PictureDisplay