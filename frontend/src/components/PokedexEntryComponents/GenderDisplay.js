
import "./styles/GenderDisplay.css"

const generateGenderRates = (speciesData) => {
    const gender_rate = speciesData.gender_rate

    // if genderless
    if (gender_rate === -1) {
        return {male: 0, female: 0}
    }

    // has genders
    else {
        const rateF = (gender_rate * 0.125) * 100
        const rateM = 100 - rateF
        return {male: rateM, female: rateF}
    }
}

const generateGenderBarDiv = (genderRates) => {
    if (genderRates.male === 0 && genderRates.female === 0) {
        return (
            <div className="genderContainer">
                <div className="genderBar" style={{"justifyContent": "center", "backgroundColor": "black"}}>
                    <div className="certainNum">Gender Unknown</div>
                </div>
            </div>
        )
    }

    else if (genderRates.male === 100 && genderRates.female === 0) {
        return (
            <div className="genderContainer">
                <div className="genderBar" style={{"justifyContent": "center", "backgroundColor": "#3355FF"}}>
                    <div className="certainNum">{genderRates.male + "% ♂"}</div>
                </div>
            </div>
            
        )
    }

    else if (genderRates.male === 0 && genderRates.female === 100) {
        return (
            <div className="genderContainer">
                <div className="genderBar" style={{"justifyContent": "center", "backgroundColor": "#FF77DD"}}>
                    <div className="certainNum">{genderRates.female + "% ♂"}</div>
                </div>
            </div>
        )
    }

    else {
        // ["#3355FF","#FF77DD"]
        const mCol = "#3355FF"
        const fCol = "#FF77DD"
        const mRate = genderRates.male
        const fRate = genderRates.female
        const contentColors = ["".concat(mCol, " 0%"), "".concat(mCol, " ", mRate, "%"), "".concat(fCol, " ", mRate, "%"), "".concat(fCol, " 100%")]
        

        const contentGradient = (contentColors).join(", ")
        console.log(contentGradient)
        const style = {background:"linear-gradient(to right," + contentGradient + ") padding-box"}


        return (
            <div className="genderContainer">
                <div className="maleNum">{mRate + "% ♂"}</div>
                <div className="genderBar" style={style}></div>
                <div className="femaleNum">{fRate + "% ♀"}</div>
            </div>
        )
    }

    
}

const GenderDisplay = (props) => {
    const speciesData = props.speciesData
    const genderRates = generateGenderRates(speciesData)
    
    return (
        <div className="GenderDisplay">
            {generateGenderBarDiv(genderRates)}
        </div>
    )
}


export default GenderDisplay