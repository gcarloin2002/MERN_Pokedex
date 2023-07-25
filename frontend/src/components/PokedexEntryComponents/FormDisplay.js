import { useContext, useState } from "react"
import { FormContext } from "./EntryContent"
import { generateNameDisplay } from "./PrimaryDisplay"
import "./styles/FormDisplay.css"

const inBetween = (a, b, c) => ((a <= c) && (c <= b))

const FormDisplay = (props) => {
    const displayName = props.displayName
    const [currentForm, setCurrentForm] = useState(displayName)
    const [currentFormTag, setCurrentFormTag] = useContext(FormContext)
    const formTags = props.formTags
    const speciesName = props.speciesName
    const appearanceTags = props.appearanceTags

    const handleSubmit = (event) => {
        event.preventDefault();
        const formTag = event.target.elements[currentForm]["value"]
        setCurrentFormTag(formTag)
    }


    return (
        <div className="FormDisplay">
            <div className="formLabel">Forms</div>
            <form onSubmit={handleSubmit}>
                {formTags.map((t, index) => {
                    const tag = Number(t)

                    let type = generateNameDisplay(speciesName, tag)
                    

                    return (
                            <label className="formLabelBox" key={"label"+index}>
                                <input 
                                    key={"input"+index} 
                                    type="radio" 
                                    id={type} 
                                    value={t} 
                                    checked={type === currentForm} 
                                    onChange={(e) => setCurrentForm(e.target.id)}
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
                {currentForm}

                <button type="submit">Save Changes</button>
            </form>
        </div>
    )
}

export default FormDisplay