import "./styles/TypingDisplay.css"


const generateTypeDivs = (types) => {

    const contentScheme = {
        normal: "#a8a878",
        fighting: "#c03028",
        flying: "#a890f0",
        poison: "#a040a0",
        ground: "#e0c068",
        rock: "#b8a038",
        bug: "#a8b820",
        ghost: "#705898",
        steel: "#b8b8d0", 
        fire: "#f08030", 
        water: "#6890f0", 
        grass: "#78c850", 
        electric: "#f8d030", 
        psychic: "#f85888", 
        ice: "#98d8d8", 
        dragon: "#7038f8", 
        dark: "#705848", 
        fairy: "#ee99ac"
    }

    const borderScheme = {
        normal: "#585838",
        fighting: "#601814",
        flying: "#3b17a9",
        poison: "#502050",
        ground: "#886b1c",
        rock: "#5c501c",
        bug: "#545c10",
        ghost: "#382c4c",
        steel: "#4e4e76",
        fire: "#863e0a",
        water: "#10399c",
        grass: "#3a6b21",
        electric: "#8f7305",
        psychic: "#a10735",
        ice: "#338585",
        dragon: "#2e0593",
        dark: "#382c24",
        fairy: "#a81c3b"
    }


    if (types.length === 1){
        const t = types[0][0].toUpperCase() + types[0].slice(1);
        const style = {
            backgroundColor: contentScheme[types[0]],
            borderColor: borderScheme[types[0]]
        }

        return (<div className="typeDiv" style={style}>{t}</div>)
    }

    else {
        const t1 = types[0][0].toUpperCase() + types[0].slice(1);
        const t2 = types[1][0].toUpperCase() + types[1].slice(1);

        const s1 = {
            backgroundColor: contentScheme[types[0]],
            borderColor: borderScheme[types[0]]
        }

        const s2 = {
            backgroundColor: contentScheme[types[1]],
            borderColor: borderScheme[types[1]]
        }

        return (
            <>
                <div className="typeDiv" style={s1}>{t1}</div>
                <div className="typeDiv" style={s2}>{t2}</div>
            </>
        )
    }
}


const TypingDisplay = (props) => {
    const types = props.types
    const fontStyle = props.style

    return (
        <div className="TypingDisplay">
            <div className="typeLabel" style={fontStyle}>Type</div>
            <div className="typeContainer">
                {generateTypeDivs(types)}
            </div>
        </div>
    )
}


export default TypingDisplay