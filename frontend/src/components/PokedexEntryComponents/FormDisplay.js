import { useContext } from "react"
import { RenderEntryFormContext } from "./EntryContent"
import { CurrentTagObjContext } from "../../App" 
import { generateNameDisplay } from "./PrimaryDisplay"
import "./styles/FormDisplay.css"

const FormDisplay = (props) => {
    const [currentTagObj, setCurrentTagObj] = useContext(CurrentTagObjContext)
    const [renderEntryForm, setRenderEntryForm] = useContext(RenderEntryFormContext)
    const formTags = props.formTags
    const speciesName = props.speciesName
    const appearanceTags = props.appearanceTags


    return (
        <div className="FormDisplay">
            <div className="formLabel">Forms</div>
            {(<form>
                {formTags.map((t, index) => {
                    return (
                            <label className="formLabelBox" key={"label"+index}>
                                <input 
                                    key={"finput"+index} 
                                    type="radio" 
                                    id={t} 
                                    value={t} 
                                    checked={t === (currentTagObj[speciesName]["form"]).toString()} 
                                    onChange={(e) => {
                                        setRenderEntryForm(e.target.id)
                                          
                                        const tagObj = currentTagObj
                                        tagObj[speciesName]["form"] = e.target.id
                                        setCurrentTagObj(tagObj)
                                    }}
                                />
                                <img 
                                    className="formImg"
                                    key={"fimg"+index} 
                                    src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/" + t + ".png"} 
                                    alt="unavailable"
                                />
                            </label>
                    )
                })}
                <br/>
                {generateNameDisplay(speciesName, currentTagObj[speciesName]["form"])}
            </form>)}
            {(<form>
                {appearanceTags.map((t, index) => {
                    return (
                            <label className="appearanceLabelBox" key={"appearance"+index}>
                                <input 
                                    key={"ainput"+index} 
                                    type="radio" 
                                    id={t} 
                                    value={t} 
                                    checked={t === (currentTagObj[speciesName]).toString()} 
                                    onChange={(e) => {
                                        setRenderEntryForm(e.target.id)
                                          
                                        const tagObj = currentTagObj
                                    }}
                                />
                                <img 
                                    className="appearanceImg"
                                    key={"aimg"+index} 
                                    src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/" + t + ".png"} 
                                    alt="unavailable"
                                />
                            </label>
                    )
                })}

            </form>)}
        </div>
    )
}

export default FormDisplay