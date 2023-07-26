import React, { useState, useContext, useEffect } from "react"
import { CurrentTagObjContext } from "../../App" 
import FormDisplay from "./FormDisplay"
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
    //  Gigantamax: radial-gradient(circle, rgba(0,0,0,1) 48%, rgba(255,70,120,1) 87%, rgba(255,0,0,1) 100%)
    //  Mega: linear-gradient(0deg, rgba(254,255,220,1) 14%, rgba(216,246,219,1) 37%, rgba(191,224,247,1) 53%, rgba(222,212,255,1) 77%, rgba(252,191,255,1) 98%)
    
    return {background:"radial-gradient(#ffffff, #ffffff, #f8f8f8, #c0c0c0) padding-box, linear-gradient(to right, " + border +  ") border-box"}
}

export const generateImgSrc = (tagObj) => {
    let shiny = ""
    let appearance = ""

    // Makes shiny
    if (tagObj.shiny) {
        shiny = "shiny/"
    }

    if (tagObj.appearance !== tagObj.form) {
        appearance = "-" + (tagObj.appearance.slice(tagObj.dexNumber.length + 1))
    }

    const tag = shiny + tagObj.form + appearance

    const result = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/" + tag + ".png"
    return result
}

const PictureDisplay = (props) => {
    const [currentTagObj, setCurrentTagObj] = useContext(CurrentTagObjContext)
    const types = props.types
    const formTags = props.formTags
    const appearanceTags = props.appearanceTags
    const displayName = props.displayName
    const speciesData = props.speciesData 
    const speciesName = props.speciesName
    const pictureDisplayStyling = generatePictureDisplayStyling(types)
    const [formActive, setFormActive] = useState(false)

    const handleThreeDotClick = () => {
        setFormActive(!formActive)
    }

    useEffect(() => {
        setFormActive(false)
    }, [speciesName])

    // console.log(currentTagObj[speciesName]["appearance"])
    
    
    return ( 
        <div className="PictureDisplay" style={pictureDisplayStyling}>
            <img 
                className="picture" 
                src={generateImgSrc(currentTagObj[speciesName])} 
                alt={"unavailable"}
            />
            <div className="threeDots" onClick={handleThreeDotClick}>
                <div className="oneDot"></div>
                <div className="oneDot"></div>
                <div className="oneDot"></div>
            </div>
            {formActive && <FormDisplay 
                                formTags={formTags} 
                                appearanceTags={appearanceTags}
                                displayName={displayName}
                                speciesName={speciesName}
                            />}
        </div>
    )
}

export default PictureDisplay