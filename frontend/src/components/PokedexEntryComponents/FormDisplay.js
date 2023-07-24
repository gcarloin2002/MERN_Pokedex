import { useState } from "react"
import "./styles/FormDisplay.css"

const inBetween = (a, b, c) => ((a <= c) && (c <= b))

// Standard: 1 -> 1010
// Deoxys Forms: 10001 -> 10003
// Mega: 10003 -> 10090
// G-Max: 10195 -> 10227

const FormDisplay = (props) => {
    const [currentForm, setCurrentForm] = useState("Standard")
    const formTags = props.formTags
    const appearanceTags = props.appearanceTags

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log(event.target.elements[currentForm])

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
                        type = "Standard"
                    }

                    // Mega
                    else if (inBetween(10003, 10090, tag)){
                        type = "Mega"
                    }

                    // Mega
                    else if (inBetween(10195, 10227, tag)){
                        type = "G-Max"
                    }

                    return (
                    
                            <input 
                                key={index} 
                                type="radio" 
                                id={type} 
                                value={type} 
                                checked={type === currentForm} 
                                onChange={(e) => setCurrentForm(e.target.value)}/>
                        
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