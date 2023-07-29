import React, { useState, useContext, useEffect } from "react"
import { CurrentTagObjContext } from "../../App" 
import { generateMappedImage, FormDisplay } from "./FormDisplay"
import "./styles/PictureDisplay.css"

const inBetween = (a, b, c) => ((a <= c) && (c <= b))

const generatePictureDisplayStyling = (types, tagObj) => {
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
    const t = Number(tagObj.form)
   
    // Mega Background
    if (inBetween(10033,10076,t) || inBetween(10087,10090,t) || t === 10079) 
    {return {background: "linear-gradient(0deg, rgba(254,255,220,1) 14%, rgba(216,246,219,1) 37%, rgba(191,224,247,1) 53%, rgba(222,212,255,1) 77%, rgba(252,191,255,1) 98%) padding-box, linear-gradient(to right, " + border +  ") border-box"}}
    
    // GMax background
    else if (inBetween(10195,10227,t) || t === 10190) 
    {return {background: "radial-gradient(circle, rgba(0,0,0,1) 48%, rgba(255,70,120,1) 87%, rgba(255,0,0,1) 100%) padding-box, linear-gradient(to right, " + border +  ") border-box"}}
    
    // Ultra beast 
    else if (inBetween(789, 800, t) || inBetween(10155, 10157, t))
    {return {background: "radial-gradient(circle, rgba(244,244,244,1) 29%, rgba(107,212,255,1) 36%, rgba(54,145,255,1) 40%, rgba(219,146,255,1) 45%, rgba(234,190,255,1) 49%, rgba(159,227,255,1) 52%, rgba(244,244,244,1) 66%) padding-box, linear-gradient(to right, " + border +  ") border-box"}}


    // Regular Background
    else 
    {return {background:"radial-gradient(#ffffff, #ffffff, #f8f8f8, #c0c0c0) padding-box, linear-gradient(to right, " + border +  ") border-box"}}
}

export const generateImgSrc = (tagObj) => {
    let shiny = ""
    let appearance = ""
    let gender = ""

    // Makes shiny
    if (tagObj.shiny === "t") {
        shiny = "shiny/"
    }

    // Makes female
    if (tagObj.gender === "f" && ((Number(tagObj.form) <= 1010) || (Number(tagObj.form) === 10235))) {
        gender = "female/"
    }

    // Choosing another form
    if (Number(tagObj.form) >= 10000) {
        appearance = ""
    }

    // Choosing another appearance
    else if ((tagObj.appearance.includes(tagObj.form)) && (tagObj.appearance !== tagObj.form)) {
        appearance = "-" + (tagObj.appearance.slice(tagObj.dexNumber.length + 1))
    }

    let tag = shiny + gender + tagObj.form + appearance
    
    // Switches depending on alcremie
    if ((tagObj.dexNumber === "869") && (tagObj.shiny === "t") &&  (tagObj.form !== tagObj.appearance)) {
        if (tagObj.form === "10223") {tag = "shiny/10223"}
        else if (tagObj.appearance.includes("-berry")){tag = "shiny/869-berry-sweet"}
        else if (tagObj.appearance.includes("-clove")){tag = "shiny/869-clove-sweet"}
        else if (tagObj.appearance.includes("-flower")){tag = "shiny/869-flower-sweet"}
        else if (tagObj.appearance.includes("-love")){tag = "shiny/869-love-sweet"}
        else if (tagObj.appearance.includes("-ribbon")){tag = "shiny/869-ribbon-sweet"}
        else if (tagObj.appearance.includes("-star")){tag = "shiny/869-star-sweet"}
        else if (tagObj.appearance.includes("-strawberry")){tag = "shiny/869-strawberry-sweet"}
    }

    // Pikachu Caps
    else if (inBetween(10094, 10099, Number(tagObj.form)) || tagObj.form === "10148" || tagObj.form === "10160") {
        tag = tagObj.form
    }

    // Minior Meteor
    else if (tagObj.shiny === "t" && tagObj.form === "774") {
        tag = tagObj.form
    }

    // Minior cores
    else if (tagObj.shiny === "t" && inBetween(10137, 10142, Number(tagObj.form))) {
        tag = "shiny/10136"
    }

    // Zygarde
    else if (tagObj.shiny === "t" && tagObj.form === "718") {
        tag = "shiny/10119"
    }


    return generateMappedImage(tag)
}

const PictureDisplay = (props) => {
    const [currentTagObj, setCurrentTagObj] = useContext(CurrentTagObjContext)
    const types = props.types
    const formTags = props.formTags
    const appearanceTags = props.appearanceTags
    const displayName = props.displayName
    const speciesData = props.speciesData 
    const speciesName = props.speciesName
    const pictureDisplayStyling = generatePictureDisplayStyling(types, currentTagObj[speciesName])
    const [formActive, setFormActive] = useState(false)


    const handleThreeDotClick = () => {
        setFormActive(!formActive)
    }

    useEffect(() => {
        setFormActive(false)
    }, [speciesName])

    
    
    return ( 
        <div className="PictureDisplay" style={pictureDisplayStyling}>
            <img 
                className="pkmnPicture" 
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
                                speciesData={speciesData}
                            />}
        </div>
    )
}

export default PictureDisplay