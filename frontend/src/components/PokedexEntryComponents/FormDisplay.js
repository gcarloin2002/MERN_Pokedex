import { useContext } from "react"
import { RenderEntryFormContext } from "./EntryContent"
import { CurrentTagObjContext } from "../../App" 
import { generateNameDisplay } from "./PrimaryDisplay"
import "./styles/FormDisplay.css"

const generateMappedImage = (tag) => {
    const url = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/" + tag + ".png"
    switch (tag) {
        case "493-normal": // Arceus
            return "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/493.png"
        default:
            return url
    }

}

const generateGenderAttribute = (hasGenderDiff) => {

    return ""
}

const FormDisplay = (props) => {
    const [currentTagObj, setCurrentTagObj] = useContext(CurrentTagObjContext)
    const [renderEntryForm, setRenderEntryForm] = useContext(RenderEntryFormContext)
    const formTags = props.formTags
    const appearanceTags = props.appearanceTags
    const speciesName = props.speciesName
    const speciesData = props.speciesData
    const hasGenderDiff = speciesData["has_gender_differences"]
    


    return (
        <div className="FormDisplay">
            {(formTags.length > 1) && 
            (<>
            <div className="wordLabel">Forms</div>
            <form>
                {formTags.map((t, index) => {
                    return (
                            <label className="labelBox" key={"label"+index}>
                                <input 
                                    key={"finput"+index} type="radio" id={t} value={t} 
                                    checked={t === (currentTagObj[speciesName]["form"]).toString()} 
                                    onChange={(e) => {
                                        const tagObj = currentTagObj
                                        tagObj[speciesName]["form"] = e.target.id
                                        setCurrentTagObj(tagObj)
                                        setRenderEntryForm(e.target.id)
                                    }}
                                />
                                <img 
                                    className="formImg" key={"fimg"+index} 
                                    src={generateMappedImage(t)} alt="unavailable"
                                />
                            </label>
                            )
                })}
            </form>
            <br/>
            </>)}
            
            {(appearanceTags.length > 0) && 
            (<>
            <div className="wordLabel">Forms</div>
            <form>
                {appearanceTags.map((t, index) => {
                    return (
                            <label className="labelBox" key={"appearance"+index}>
                                <input 
                                    key={"ainput"+index} type="radio" id={t} value={t} 
                                    checked={t === (currentTagObj[speciesName]["appearance"]).toString()} 
                                    onChange={(e) => {
                                        const tagObj = currentTagObj
                                        tagObj[speciesName]["appearance"] = e.target.id
                                        setCurrentTagObj(tagObj)
                                        setRenderEntryForm(e.target.id)
                                    }}
                                />
                                <img 
                                    className="appearanceImg" key={"aimg"+index} 
                                    src={generateMappedImage(t)} alt="unavailable"
                                />
                            </label>
                            )
                })}
            </form> 
            <br/>
            </>)}
        </div>
    )
}

export {FormDisplay, generateMappedImage}