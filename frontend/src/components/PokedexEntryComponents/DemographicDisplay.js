

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

const DemographicDisplay = (props) => {
    
    return (
        <div>
            DemographicDisplay
        </div>
    )
}


export default DemographicDisplay