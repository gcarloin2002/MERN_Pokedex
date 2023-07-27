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
            <div className="wordLabel">Forms</div>
            {(<form>
                {formTags.map((t, index) => {
                    return (
                            <label className="labelBox" key={"label"+index}>
                                <input 
                                    key={"finput"+index} 
                                    type="radio" 
                                    id={t} 
                                    value={t} 
                                    checked={t === (currentTagObj[speciesName]["form"]).toString()} 
                                    onChange={(e) => {
                                        const tagObj = currentTagObj
                                        tagObj[speciesName]["form"] = e.target.id
                                        setCurrentTagObj(tagObj)
                                        setRenderEntryForm(e.target.id)
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
            <hr/>
            {(<form>
                {appearanceTags.map((t, index) => {
                    return (
                            <label className="labelBox" key={"appearance"+index}>
                                <input 
                                    key={"ainput"+index} 
                                    type="radio" 
                                    id={t} 
                                    value={t} 
                                    checked={t === (currentTagObj[speciesName]["appearance"]).toString()} 
                                    onChange={(e) => {
                                        const tagObj = currentTagObj
                                        tagObj[speciesName]["appearance"] = e.target.id
                                        setCurrentTagObj(tagObj)
                                        setRenderEntryForm(e.target.id)
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