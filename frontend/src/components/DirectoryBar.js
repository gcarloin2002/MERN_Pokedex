import "./styles/DirectoryBar.css"

const DirectoryBar = (props) => {
    const dexNum = props.dexNum
    const leftPic = (dexNum) => {
        if (dexNum !== 1){
            return (
            <img 
                className="leftPic" 
                src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/" + (dexNum - 1) + ".png"} 
                alt={""}
            />
            )
        }
    }
    
    const rightPic = (dexNum) => {
        if (dexNum !== 1010){
            return (
            <img 
                className="rightPic" 
                src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/" + (dexNum + 1) +".png"} 
                alt={""}
            />
            )
        }
    }

    return (
        <div className="DirectoryBar">
            {leftPic(dexNum)}
            {rightPic(dexNum)}
        </div>
    )
}

export default DirectoryBar