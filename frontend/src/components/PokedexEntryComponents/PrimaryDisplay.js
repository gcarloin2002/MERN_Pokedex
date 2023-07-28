import TypingDisplay from "./TypingDisplay"
import AbilityDisplay from "./AbilityDisplay"
import GenderDisplay from "./GenderDisplay"
import StatsDisplay from "./StatsDisplay"
import PictureDisplay from "./PictureDisplay"
import { CurrentTagObjContext } from "../../App"  
import { useContext } from "react"
import "./styles/PrimaryDisplay.css"

const inBetween = (a, b, c) => ((a <= c) && (c <= b))

const generateTyping = (entryData, tagObj) => {
    const types = entryData.types

 
    // Checks for Arceus or Silvally
    if (tagObj.speciesName === "Arceus" || tagObj.speciesName === "Silvally"){
        if (tagObj.appearance === "493" || tagObj.appearance === "493-normal") {return ["normal"]}
        else if (tagObj.appearance === "773" || tagObj.appearance === "773-normal") {return ["normal"]}
        
        else {
            const formType = tagObj.appearance.slice(4)
            return [formType]
        }
    }

    else {
        if (types.length === 1){
            return [types[0].type.name]
        }

        else {
            return [types[0].type.name, types[1].type.name]
        }
    }
}

const generateAbilities = (entryData) => {
    const abilities = entryData.abilities
    return abilities.map((abilityObj) => {
        return ((abilityObj.ability.name).split("-").map((word) => (word.charAt(0).toUpperCase() + word.slice(1)).replace("Rks", "RKS").replace("Spectrier", "").replace("Glastrier", ""))).join(" ")
    })
}

const generateBaseStats = (entryData) => {
    const stats = entryData.stats
    return {
        HP: stats[0].base_stat,
        Attack: stats[1].base_stat,
        Defense: stats[2].base_stat,
        Sp_Attack: stats[3].base_stat,
        Sp_Defense: stats[4].base_stat,
        Speed: stats[5].base_stat,
        Total: stats[0].base_stat + stats[1].base_stat + stats[2].base_stat + stats[3].base_stat + stats[4].base_stat + stats[5].base_stat  
    }
}

const generatePrimaryDivStyling = (types) => {

    const colorScheme = {
        normal: ["#a8a878", "#d3d3bb"],
        fighting: ["#c03028", "#e7918c"],
        flying: ["#a890f0", "#d3c7f7"],
        poison: ["#a040a0", "#d699d6"],
        ground: ["#e0c068", "#efdfb3"],
        rock: ["#b8a038", "#dfd297"],
        bug: ["#a8b820", "#dee982"],
        ghost: ["#705898", "#b7a9cd"],
        steel: ["#b8b8d0", "#dbdbe7"],
        fire: ["#f08030", "#f7bf97"],
        water: ["#6890f0", "#b3c7f7"],
        grass: ["#78c850", "#bbe3a7"],
        electric: ["#f8d030", "#fbe797"],
        psychic: ["#f85888", "#fbabc3"],
        ice: ["#98d8d8", "#cbebeb"],
        dragon: ["#7038f8", "#b79bfb"],
        dark: ["#705848", "#bfaa9c"],
        fairy: ["#ee99ac", "#f6ccd5"]
    }

    const greyBorder = "#808080"
    const greyContent = "#c0c0c0"

    if (types.length === 1){
        const solidColor = colorScheme[types[0]][0]
        const lightColor = colorScheme[types[0]][1]

        const borderGradient = ([greyBorder, solidColor, solidColor, solidColor, solidColor, solidColor, solidColor, greyBorder]).join(", ")
        const contentGradient = ([greyContent, lightColor, lightColor, lightColor, lightColor, greyContent]).join(", ")

        return {background:"linear-gradient(to right," + contentGradient + ") padding-box, linear-gradient(to right, " + borderGradient +  ") border-box"}
    }

    else {
        const solidColor1 = colorScheme[types[0]][0]
        const lightColor1 = colorScheme[types[0]][1]
        const solidColor2 = colorScheme[types[1]][0]
        const lightColor2 = colorScheme[types[1]][1]

        const borderGradient = ([greyBorder, solidColor1, solidColor1, solidColor1, solidColor2, solidColor2, solidColor2, greyBorder]).join(", ")
        const contentGradient = ([greyContent, lightColor1, lightColor1, lightColor2, lightColor2, greyContent]).join(", ")

        return {background:"linear-gradient(to right," + contentGradient + ") padding-box, linear-gradient(to right, " + borderGradient +  ") border-box"}
    }
}

const generateFontStyling = (zone, types) => {
    const colorScheme = {
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
    
    if (zone === "left"){
        return {color: colorScheme[types[0]]}
    }
    
    else {
        if (types.length === 1){
            return {color: colorScheme[types[0]]}
        }

        else {
            return {color: colorScheme[types[1]]}
        }
    }
}

export const generateNameDisplay = (speciesName, tagObj) => {
    const form = Number(tagObj["form"])
    const appearance = tagObj["appearance"]
    console.log(form)
    //console.log(appearance)

    // Standard
    if (inBetween(1, 1010, form)) {
        switch(form) {
            case 201: // Unowns
                if (form === Number(appearance)) {return 'Unown (A)'}
                else {
                    switch (appearance){
                        case "201-exclamation":
                            return "Unown (!)"
                        case "201-question":
                            return "Unown (?)"
                        default:
                            return "Unown (" + appearance.slice(4).toUpperCase() + ")"
                    }
                }
            case 412: // Burmys
                if (form === Number(appearance)) {return "Burmy (Plant Cloak)"}
                else {
                    const burmyForm = appearance.slice(4)[0].toUpperCase() + appearance.slice(5)
                    return "Burmy (" + burmyForm + " Cloak)"
                }
            case 413: // Wormadam
                return "Wormadam (Plant Cloak)"
            case 421: // Cherrims
                if (form === Number(appearance)) {return "Cherrim (Overcast)"}
                else {
                    const cherrimForm = appearance.slice(4)[0].toUpperCase() + appearance.slice(5)
                    return "Cherrim (" + cherrimForm + ")"
                }
            case 422: // Shellos
                if (form === Number(appearance)) {return "Shellos (West Sea)"}
                else {
                    const shellosForm = appearance.slice(4)[0].toUpperCase() + appearance.slice(5)
                    return "Shellos (" + shellosForm + " Sea)"
                }
            case 423: // Gastrodon
                if (form === Number(appearance)) {return "Gastrodon (West Sea)"}
                else {
                    const gastrodonForm = appearance.slice(4)[0].toUpperCase() + appearance.slice(5)
                    return "Gastrodon (" + gastrodonForm + " Sea)"
                }
            case 493: // Arceus
                if (form === Number(appearance) || appearance === "493-normal") {return "Arceus"}
                else {
                    const arceusForm = appearance.slice(4)[0].toUpperCase() + appearance.slice(5)
                    return "Arceus (" + arceusForm + ")"
                }
            case 550: // Basculin
                return "Basculin (Red Striped Form)"
            case 585: // Deerling
                if (form === Number(appearance)) {return "Deerling (Spring Form)"}
                else {
                    const deerlingForm = appearance.slice(4)[0].toUpperCase() + appearance.slice(5)
                    return "Deerling (" + deerlingForm + " Form)"
                }   
            case 586: // Sawsbuck
                if (form === Number(appearance)) {return "Sawsbuck (Spring Form)"}
                else {
                    const sawsbuckForm = appearance.slice(4)[0].toUpperCase() + appearance.slice(5)
                    return "Sawsbuck (" + sawsbuckForm + " Form)"
                } 
            case 641:
                return "Tornadus (Incarnate Form)"
            case 642:
                return "Thundurus (Incarnate Form)"
            case 645:
                return "Tornadus (Incarnate Form)"
            case 648: // Meloetta
                return "Meloetta (Aria Form)"
            case 649: // Genesect
                if (form === Number(appearance)) {return "Genesect"}
                else {
                    const genesectForm = appearance.slice(4)[0].toUpperCase() + appearance.slice(5)
                    return "Genesect (" + genesectForm + " Drive)"
                }
            case 666: // Vivillon
                if (form === Number(appearance)) {return "Vivillon (Meadow Pattern)"}
                else {
                    const vivForm = (appearance.slice(4)[0].toUpperCase() + appearance.slice(5))
                    .replace("-", " ").replace("snow", "Snow").replace("plains", "Plains").replace("Poke ball", "Pokeball")
                    return "Vivillon (" + vivForm + " Pattern)"
                } 
            case 669: // Flabebe
                if (form === Number(appearance)) {return "Flabebe (Red Flower)"}
                else {
                    const flowerForm = appearance.slice(4)[0].toUpperCase() + appearance.slice(5)
                    return "Flabebe (" + flowerForm + " Flower)"
                }
            case 670: // Floette
                if (form === Number(appearance)) {return "Floette (Red Flower)"}
                else {
                    const flowerForm = appearance.slice(4)[0].toUpperCase() + appearance.slice(5)
                    return "Floette (" + flowerForm + " Flower)"
                }
            case 671: // Florges
                if (form === Number(appearance)) {return "Florges (Red Flower)"}
                else {
                    const flowerForm = appearance.slice(4)[0].toUpperCase() + appearance.slice(5)
                    return "Florges (" + flowerForm + " Flower)"
                }
            case 676: // Furfrou
                if (form === Number(appearance) || appearance === "676-natural") {return "Furfrou"}
                else {
                    const cutForm = appearance.slice(4)[0].toUpperCase() + appearance.slice(5).replace("-", " ").replace("reine", "Reine")
                    return "Furfrou (" + cutForm + " Trim)"
                }
            case 681: // Aegislash
                return "Aegislash (Shield Form)"
            case 710: // Pumpkaboo
                return "Pumpkaboo (Average Size)"
            case 711: // Gourgeist
                return "Gourgeist (Average Size)"
            case 716: // Xerneas
                if (form === Number(appearance) || appearance === "716-neutral") {return "Xerneas (Neutral Mode)"}
                else {
                    const xerneasForm = appearance.slice(4)[0].toUpperCase() + appearance.slice(5)
                    return "Xerneas (" + xerneasForm + " Mode)"
                }
            case 718:
                return "Zygarde (50% Form)"
            case 741:
                return "Oricorio (Baile Style)"
            case 745:
                return "Lycanroc (Midday Form)"
            case 746:
                return "Wishiwashi (Solo Form)"
            case 773: // Silvally
                if (form === Number(appearance) || appearance === "773-normal") {return "Silvally"}
                else {
                    const silvallyForm = appearance.slice(4)[0].toUpperCase() + appearance.slice(5)
                    return "Sivally (" + silvallyForm + " Memory)"
                }
            case 774:
                return "Minior (Meteor Form)"
            case 778:
                return "Mimikyu (Disguised Form)"
            case 845: // Cramorant
                if (form === Number(appearance)) {return "Cramorant"}
                else {
                    const cramForm = appearance.slice(4)[0].toUpperCase() + appearance.slice(5)
                    return "Cramorant (" + cramForm + " Form)"
                }
            case 849: // Toxtricity
                return "Toxtricity (Amped Form)"
            case 875: // Eiscue
                return "Eiscue (Ice Face)"
            case 888: // Zacian
                return "Zacian (Hero of Many Battles)"
            case 889: // Zamazenta
                return "Zamazenta (Hero of Many Battles)"
            case 893: // Zarude
                if (form === Number(appearance)) {return "Zarude"}
                else {return "Dada Zarude"}
            case 892: // Urshifu
                return "Single Strike Style Urshifu"
            case 905: // Enamorus
                return "Enamorus (Incarnate Form)"
            default:
                return speciesName
        }
    }

    // Deoxys 
    else if (inBetween(10001, 10003, form)){
        switch(form) {
            case 10001:
                return speciesName + " (Attack Form)"
            case 10002:
                return speciesName + " (Defense Form)"
            case 10003:
                return speciesName + " (Speed Form)"
        }
    }

    else if (form === 10004){return "Wormadam (Sandy Cloak)"}
    else if (form === 10005){return "Wormadam (Trash Cloak)"}
    else if (form === 10006){return "Shaymin (Sky Form)"}
    else if (form === 10007){return "Giratina (Origin Form)"}

    // Rotoms
    else if (inBetween(10008, 10012, form)){
        switch(form) {
            case 10008:
                return "Rotom (Heat Form)"
            case 10009:
                return "Rotom (Wash Form)"
            case 10010:
                return "Rotom (Frost Form)"
            case 10011:
                return "Rotom (Fan Form)"
            case 10012:
                return "Rotom (Mow Form)"
        }
    }

    // Castforms
    else if (inBetween(10013, 10015, form)){
        switch(form) {
            case 10013:
                return "Castform (Sunny Form)"
            case 10014:
                return "Castform (Rainy Form)"
            case 10015:
                return "Castform (Snowy Form)"
        }
    }


    else if (form === 10016) {return "Basculin (Blue Striped Form)"}
    else if (form === 10017) {return "Zen Mode Darmanitan"}
    else if (form === 10018) {return "Meloetta (Piroutte form)"}
    else if (inBetween(10019, 10021, form)){return speciesName + " (Therian Form)"} // Weather trio
    else if (form === 10022){return "Black Kyurem"}
    else if (form === 10023){return "White Kyurem"}
    else if (form === 10024){return "Keldeo (Resolute Form)"}
    else if (form === 10025){return "Meowstic"}
    else if (form === 10026){return "Aegislash (Blade Form)"}
    else if (form === 10027){return "Pumpkaboo (Small Size)"}
    else if (form === 10028){return "Pumpkaboo (Large Size)"}
    else if (form === 10029){return "Pumpkaboo (Super Size)"}

    else if (form === 10030){return "Gourgeist (Small Size)"}
    else if (form === 10031){return "Gourgeist (Large Size)"}
    else if (form === 10032){return "Gourgeist (Super Size)"}

    // Mega
    else if (inBetween(10033, 10090, form)){
        switch(form) {
            case 10034:
                return "Mega " + speciesName + " X"
            case 10035:
                return "Mega " + speciesName + " Y"
            case 10043:
                return "Mega " + speciesName + " X"
            case 10044:
                return "Mega " + speciesName + " Y"
            case 10077:
                return "Primal " + speciesName
            case 10078:
                return "Primal " + speciesName
            case 10086:
                return "Hoopa Unbound"
            default:
                return "Mega " + speciesName
        }
    }

    // Alolan
    else if (inBetween(10091, 10115, form)){
        switch(form) {
            case 10094:
                return "Original Cap Pikachu"
            case 10095:
                return "Hoenn Cap Pikachu"
            case 10096:
                return "Sinnoh Cap Pikachu"
            case 10097:
                return "Unova Cap Pikachu"
            case 10098:
                return "Kalos Cap Pikachu"
            case 10099:
                return "Alola Cap Pikachu"
            default:
                return "Alolan " + speciesName
        }
    }


    else if (form === 10117) {return "Ash Greninja"}
    else if (form === 10118) {return "Zygarde (10% Form)"}
    else if (form === 10120) {return "Zygarde (Complete Form)"}
    else if (form === 10123) {return "Oricorio (Pom-Pom Style)"}
    else if (form === 10124) {return "Oricorio (Pa'u Style)"}
    else if (form === 10125) {return "Oricorio (Sensu Style)"}
    else if (form === 10126) {return "Lycanroc (Midnight Form)"}

    else if (form === 10127) {return "Wishiwashi (School Form)"}

    else if (form === 10143){return "Mimikyu (Busted Form)"}
    else if (form === 10147){return "Original Color Magearna"}
    else if (form === 10148){return "Partner Cap Pikachu"}

    // Miniors
    else if (inBetween(10136, 10142, form)){
        switch (form){
        case 10136:
            return "Minior (Red Core)"
        case 10137:
            return "Minior (Orange Core)"
        case 10138:
            return "Minior (Yellow Core)"
        case 10139:
            return "Minior (Green Core)"
        case 10140:
            return "Minior (Blue Core)"
        case 10141:
            return "Minior (Indigo Core)"
        case 10142:
            return "Minior (Violet Core)"
        }
    }

    else if (form === 10152){return "Lycanroc (Dusk Form)"}

    else if (form === 10155){return "Dusk Mane Necrozma"}
    else if (form === 10156){return "Dawn Wings Necrozma"}
    else if (form === 10157){return "Ultra Necrozma"}

    else if (form === 10160){return "World Cap Pikachu"}

    // Galarian forms
    else if (inBetween(10161, 10180, form)){
        switch (form){
            case 10178:
                return "Galarian Zen Mode Darmanitan"

            default:
                return "Galarian " + speciesName
        }
    }
        
    else if (form === 10184){return "Toxtricity (Low Key Form)"}
    else if (form === 10185){return "Eiscue (Noice Face)"}
    else if (form === 10186){return "Indeedee"}

    else if (form === 10188){return "Zacian (Crowned Sword)"}
    else if (form === 10189){return "Zamazenta (Crowned Shield)"}


    else if (form === 10190){return "Eternamax Eternatus"}
    else if (form === 10191){return "Rapid Strike Style Urshifu"}

    else if (form === 10193){return "Ice Rider Calyrex"}
    else if (form === 10194){return "Shadow Rider Calyrex"}


    // G-Max
    else if (inBetween(10195, 10227, form)){
        switch(form){
            case 10226:
                return "G-Max Single Strike Style Urshifu"
            case 10227:
                return "G-Max Rapid Strike Style Urshifu"
            default: 
                return "G-Max " + speciesName
        }
    }

    // Hisuian
    else if (inBetween(10229, 10244, form)){return "Hisuian " + speciesName}
    else if (inBetween(10245, 10246, form)){return speciesName + " (Origin Form)"}
    else if (form === 10247) {return "Basculin (White Striped Form)"}
    else if (form === 10248) {return "Basculegion"}
    else if (form === 10249) {return speciesName + " (Therian Form)"}
    else if (form === 10254) {return "Oinkologne"}
    
}


const PrimaryDisplay = (props) => {
    const [currentTagObj, setCurrentTagObj] = useContext(CurrentTagObjContext)
    const entryData = props.entryData
    const speciesData = props.speciesData
    const speciesName = (window.location.href).slice(22).replaceAll("_", " ").replaceAll("%E2%99%82", "♂").replaceAll("%E2%99%80", "♀")
    const officialArt = props.officialArt
    const displayName = generateNameDisplay(speciesName, currentTagObj[speciesName])
    const formTags = props.formTags
    const appearanceTags = props.appearanceTags

    const types = generateTyping(entryData, currentTagObj[speciesName])
    const primaryDivStyling = generatePrimaryDivStyling(types)
    const leftFontStyling = generateFontStyling("left", types)
    const rightFontStyling = generateFontStyling("right", types)
    const abilities = generateAbilities(entryData)
    const baseStats = generateBaseStats(entryData)

    return (
        <div className="PrimaryDisplay" style={primaryDivStyling}>
            <div className="secondHandDiv">
                <PictureDisplay 
                    officialArt={officialArt} 
                    formTags={formTags} 
                    appearanceTags={appearanceTags}
                    types={types}
                    displayName={displayName}
                    speciesData={speciesData}
                    speciesName={speciesName}
                />
                <div className="nameDisplay" style={leftFontStyling}>{displayName}</div> 
            </div>
            <div className="secondHandDiv">
                <TypingDisplay style={rightFontStyling} types={types}/>
                <AbilityDisplay style={rightFontStyling} abilities={abilities} speciesName={speciesName}/>
                <GenderDisplay speciesData={speciesData}/>
                <StatsDisplay types={types} baseStats={baseStats}/>
            </div>
        </div>
    )
}

export default PrimaryDisplay