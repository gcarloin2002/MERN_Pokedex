import { useContext, useState } from "react"
import { FormContext } from "./EntryContent"
import "./styles/FormDisplay.css"

const inBetween = (a, b, c) => ((a <= c) && (c <= b))

const FormDisplay = (props) => {
    const [currentForm, setCurrentForm] = useState("")
    const [currentFormTag, setCurrentFormTag] = useContext(FormContext)
    const formTags = props.formTags
    const appearanceTags = props.appearanceTags

    const handleSubmit = (event) => {
        event.preventDefault();
        const formTag = event.target.elements[currentForm]["value"]
        setCurrentFormTag(formTag)
        console.log(formTag)
    }


    return (
        <div className="FormDisplay">
            <div className="formLabel">Forms</div>
            <form onSubmit={handleSubmit}>
                {formTags.map((t, index) => {
                    const tag = Number(t)
                    let type = "Standard"

                    // Standard
                    if (inBetween(1, 1010, tag)){
                        switch (tag){
                            case 413:
                                type = "Plant Cloak"
                                break
                            case 492:
                                type = "Land"
                                break
                            default:
                                type = "Standard"
                                break
                        }
                    }

                    // Deoxys
                    else if (inBetween(10001, 10003, tag)){
                        switch (tag){
                            case 10001:
                                type = "Attack"
                                break
                            case 10002:
                                type = "Defense"
                                break
                            case 10003:
                                type = "Speed"
                                break
                        }
                    }

                    // Wormadam
                    else if (inBetween(10004, 10005, tag)){
                        switch (tag){
                            case 10004:
                                type = "Sandy Cloak"
                                break
                            case 10005:
                                type = "Trash Cloak"
                                break
                        }
                    }

                    // Origin Forms
                    else if (inBetween(10245, 10246, tag) || tag === 10007) {type = "Origin"}

                    // Shaymin-Sky
                    else if (tag === 10006) {
                        type = "Sky"
                    }

                    // Mega
                    else if (inBetween(10033, 10090, tag)){type = "Mega"}

                    // G-Max
                    else if (inBetween(10195, 10227, tag)){type = "G-Max"}

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
                                <img className="formImg"key={"img"+index} src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/" + t + ".png"} alt="unavailable"/>
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