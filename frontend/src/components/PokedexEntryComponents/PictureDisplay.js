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

    const solidColor = colorScheme[types[0]][0]
    const border = ([solidColor, solidColor]).join(", ")

    return {background:"radial-gradient(#ffffff, #ffffff, #f8f8f8, #c0c0c0) padding-box, linear-gradient(to right, " + border +  ") border-box"}
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