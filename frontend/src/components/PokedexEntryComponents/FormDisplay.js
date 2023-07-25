import { useContext } from "react"
import { EntryFormTagContext } from "./EntryContent"
import { CurrentTagObjContext } from "../../App"
import { generateNameDisplay } from "./PrimaryDisplay"
import "./styles/FormDisplay.css"

const FormDisplay = (props) => {
    const [entryFormTag, setEntryFormTag] = useContext(EntryFormTagContext)
    const [currentTagObj, setCurrentTagObj] = useContext(CurrentTagObjContext)
    const formTags = props.formTags
    const speciesName = props.speciesName
    const appearanceTags = props.appearanceTags


    return (
        <div className="FormDisplay">
            <div className="formLabel">Forms</div>
            <form>
                {formTags.map((t, index) => {
                    return (
                            <label className="formLabelBox" key={"label"+index}>
                                <input 
                                    key={"input"+index} 
                                    type="radio" 
                                    id={t} 
                                    value={t} 
                                    checked={t === currentTagObj[speciesName].toString()} 
                                    onChange={(e) => {
                                        setEntryFormTag(e.target.id)
                                        const tagObj = currentTagObj
                                        tagObj[speciesName] = e.target.id
                                        setCurrentTagObj(tagObj)
                                    }}
                                />
                                <img 
                                    className="formImg"
                                    key={"img"+index} 
                                    src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/" + t + ".png"} 
                                    alt="unavailable"
                                />
                            </label>
                    )
                })}
                <br/>
                {generateNameDisplay(speciesName, currentTagObj[speciesName])}
            </form>
        </div>
    )
}

export default FormDisplay