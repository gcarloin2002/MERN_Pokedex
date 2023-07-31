import { useContext } from "react"
import { RenderEntryFormContext } from "./EntryContent"
import "./styles/FormDisplay.css"

const generateMappedImage = (tag) => {

    if (Number(tag) >= 906 && Number(tag) <= 1010) 
    {return "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/" + tag + ".png"}

    switch (tag) {
        case "493-normal": // Arceus
            return "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/493.png"
        case "shiny/493-normal": // Arceus
            return "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/493.png"
        default:
            return "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/" + tag + ".png"
    }

}

const generateGenderChoiceDiv = (t) => {
    if (t === "m") {return (<div className="selectBox"><div className="genderIcon" style={{backgroundColor: "#3355ff"}}>♂</div></div>)}
    else if (t === "f"){return (<div className="selectBox"><div className="genderIcon" style={{backgroundColor: "#ff77dd"}}>♀</div></div>)}
}

const generateShinyChoiceDiv = (t) => {
    if (t === "f") {return (<div className="selectBox"><div className="normalIcon" ></div></div>)}
    else if (t === "t"){return (<div className="selectBox"><div className="shinyIcon"></div></div>)}
}

const patchRequest = async (id, newObj) => {
    const response = await fetch("/api/data/" + id, {
        method: 'PATCH',
        headers: {
          'content-type': 'application/json'
        },                                                              
        body: JSON.stringify(newObj)                                        
    })
    .then(resp => resp.json())
    .catch(error => console.log(error))
}


const FormDisplay = (props) => {
    const [renderEntryForm, setRenderEntryForm] = useContext(RenderEntryFormContext)
    const tagObj = props.tagObj
    const id = tagObj._id
    const formTags = props.formTags
    const appearanceTags = props.appearanceTags
    const speciesName = props.speciesName
    const form = Number(tagObj["form"])
    const hasGenderDiff = (tagObj["gender"] !== "n/a") && ((form <= 1010) || ([10235, 10025, 10186, 10248, 10254]).includes(form))



    return (
        <div className="FormDisplay">
            {(formTags.length > 1) && 
            (<>
            <div className="wordLabel">Forms</div>
            <form>
                {formTags.map((t, index) => {
                    return (
                            <label key={"flabel"+index}>
                                <input 
                                    key={"finput"+index} type="radio" id={t} value={t} 
                                    checked={t === (tagObj["form"]).toString()} 
                                    onChange={(e) => {
                                        const newObj = {form: e.target.id}
                                        patchRequest(id, newObj)
                                        setRenderEntryForm(!renderEntryForm)
                                    }}
                                />
                                <img 
                                    className="formImg"
                                    key={"fimg"+index} 
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
                            <label key={"alabel"+index}>
                                <input 
                                    key={"ainput"+index} type="radio" id={t} value={t} 
                                    checked={t === (tagObj["appearance"]).toString()} 
                                    onChange={(e) => {
                                        const newObj = {appearance: e.target.id}
                                        patchRequest(id, newObj)
                                        setRenderEntryForm(!renderEntryForm)
                                    }}
                                />
                                <img 
                                    className="formImg"
                                    key={"aimg"+index} 
                                    src={generateMappedImage(t)} alt="unavailable"
                                />
                            </label>
                            )
                })}
            </form> 
            <br/>
            </>)}

            {hasGenderDiff && 
            (<>
                <div className="wordLabel">Gender Differences</div>
                <form className="formContainer">
                    {(["m","f"]).map((t, index) => {
                        return (
                            <label key={"glabel"+index}>
                                <input 
                                    key={"ginput"+index} type="radio" id={t} value={t} 
                                    checked={t === tagObj["gender"]} 
                                    onChange={(e) => {
                                        const newObj = {gender: e.target.id}
                                        // Changes Forms when gender changes
                                        if (["Meowstic", "Indeedee", "Basculegion", "Oinkologne"].includes(speciesName)) {
                                            switch (tagObj["form"]) {
                                                case "678":
                                                    newObj["form"] = "10025"
                                                    break
                                                case "876":
                                                    newObj["form"] = "10186"
                                                    break
                                                case "902":
                                                    newObj["form"] = "10248"
                                                    break
                                                case "916":
                                                    newObj["form"] = "10254"
                                                    break
                                                case "10025":
                                                    newObj["form"] = "678"
                                                    break
                                                case "10186":
                                                    newObj["form"] = "876"
                                                    break
                                                case "10248":
                                                    newObj["form"] = "902"
                                                    break
                                                case "10254":
                                                    newObj["form"] = "916"
                                                    break
                                            }
                                        }
                                        patchRequest(id, newObj)
                                        setRenderEntryForm(!renderEntryForm)
                                    }}
                                />
                                {generateGenderChoiceDiv(t)}
                            </label>
                            )
                    })}
                </form>
                <br/>
            </>)}
            
            {(<>
                <div className="wordLabel">Shiny</div>
                <form className="formContainer">
                    {(["f", "t"]).map((t, index) => {
                        return (
                            <label key={"slabel"+index}>
                                <input 
                                    key={"sinput"+index} type="radio" id={t} value={t} 
                                    checked={t === tagObj["shiny"]} 
                                    onChange={(e) => {
                                        const newObj = {shiny: e.target.id}
                                        patchRequest(id, newObj)
                                        setRenderEntryForm(!renderEntryForm)
                                    }}
                                />
                                {generateShinyChoiceDiv(t)}
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