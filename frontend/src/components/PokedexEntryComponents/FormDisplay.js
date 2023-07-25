import { useContext, useState } from "react"
import { EntryFormTagContext } from "./EntryContent"
import { generateNameDisplay } from "./PrimaryDisplay"
import "./styles/FormDisplay.css"

const inBetween = (a, b, c) => ((a <= c) && (c <= b))

const FormDisplay = (props) => {
    const [entryFormTag, setEntryFormTag] = useContext(EntryFormTagContext)
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
                                    checked={t === entryFormTag} 
                                    onChange={(e) => setEntryFormTag(e.target.id)}
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
                {generateNameDisplay(speciesName, entryFormTag)}
            </form>
        </div>
    )
}

export default FormDisplay