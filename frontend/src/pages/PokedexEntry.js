import { useEffect, useState } from "react";

import EntryContent from "../components/PokedexEntryComponents/EntryContent"

const PokedexEntry = (props) => {
    const [speciesData, setSpeciesData] = useState(false)
    const [formTags, setFormTags] = useState(false)
    const [appearanceTags, setAppearanceTags] = useState(false)
    const speciesName = (window.location.href).slice(22).replaceAll("_", " ").replaceAll("%E2%99%82", "♂").replaceAll("%E2%99%80", "♀")
    const pokemonData = props.pokemonData
    const dexNum = props.dexNum
    
    // Fetches the pokemon's data
    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon-species/" + dexNum)
        .then((response) => response.json())
        .then((result) => {
            setSpeciesData(result)

            fetch("https://pokeapi.co/api/v2/pokemon-form/?limit=100000&offset=0")
            .then((response) => response.json())
            .then((response) => response.results)
            .then((forms) => {
                const appearanceList = []
                for (let i = 0; i < forms.length; i++) {
                    if (forms[i].name.includes(result.name)){
                        const appearanceTag = dexNum + (forms[i].name).replace(result.name, "")
                        /* No..
                        */
                        // No self dex entries
                        if (appearanceTag === dexNum.toString()) {continue}

                        // No gender differences
                        else if (appearanceTag.includes("-female") || appearanceTag.includes("-male")){continue}

                        // No Pidgeot 
                        else if (appearanceTag.includes("18to")) {continue}

                        // No pikachus
                        else if (appearanceTag.includes("25-")) {continue}
                
                        // No castfroms
                        else if (appearanceTag.includes("351-")){continue}

                        // No deoxys forms
                        else if (appearanceTag.includes("386-")) {continue}

                        // No wormadam forms
                        else if (appearanceTag.includes("413-")){continue}


                        // No rotoms
                        else if (appearanceTag.includes("479-")){continue}

                        // No shaymin-sky
                        else if (appearanceTag.includes("492-")){continue}

                        // No dialga, palkia, or giratina forms
                        else if (appearanceTag.includes("-origin") || appearanceTag.includes("-altered")){continue}

                        // No darmanitans
                        else if (appearanceTag.includes("555-")) {continue}


                        // No kyurems
                        else if (appearanceTag.includes("646-")){continue}

                        // No Keldeo
                        else if (appearanceTag.includes("647-")){continue}

                        // No meloettas
                        else if (appearanceTag.includes("648-")){continue}

                        // No Genies
                        else if (appearanceTag.includes("-therian") || appearanceTag.includes("-incarnate")){continue}

                        // No Spewpas
                        else if (appearanceTag.includes("665-")) {continue}

                        // No aegislash
                        else if (appearanceTag.includes("681-")){continue}

                        // No pumpkaboos / gourgeists
                        else if (appearanceTag.includes("710-") || appearanceTag.includes("711-")){continue}

                        // No zygarde
                        else if (appearanceTag.includes("718-")){continue}

                        // No Hoopa
                        else if (appearanceTag.includes("720-")){continue}


                        // No Megas or Primals 
                        else if (appearanceTag.includes("-mega") || appearanceTag.includes("-primal")){continue}

                        // No Oricorio
                        else if (appearanceTag.includes("741-")){continue}

                        // No Lycanroc
                        else if (appearanceTag.includes("745-")){continue}

                        // No Wishiwash
                        else if (appearanceTag.includes("746-")){continue}

                        // No Miniors ()
                        else if (appearanceTag.includes("774-")){continue}

                        // No Necrozma
                        else if (appearanceTag.includes("800-")){continue}

                        // No Alolan forms
                        else if (appearanceTag.includes("-alola")){continue}

                        // No Toxtricity
                        else if (appearanceTag.includes("849-")){continue}
                        
                        // No Eiscue
                        else if (appearanceTag.includes("875-")){continue}

                        // No full belly morpeko
                        else if (appearanceTag.includes("877-full-belly")){continue}


                        // No zacian or zamazenta
                        else if (appearanceTag.includes("-crowned")){continue}

                        // No Galar forms
                        else if (appearanceTag.includes("-galar")){continue}

                        // No Gmax or eternamax
                        else if (appearanceTag.includes("-gmax") || appearanceTag.includes("-eternamax")){continue}

                        // No Urshifu 
                        else if (appearanceTag.includes("892-")){continue}

                        // No Calyrex
                        else if (appearanceTag.includes("898-")){continue}

                        // No hisuian forms
                        else if (appearanceTag.includes("-hisui")){continue}
                        
                    
                        else {
                            // if alcremie
                            if (appearanceTag.includes("869-")) {
                                console.log(appearanceTag)
                                appearanceList.push(appearanceTag + "-berry-sweet")
                                if (appearanceTag === "869-matcha-cream") { appearanceList.push(appearanceTag + "-clover-sweet")}
                                else {appearanceList.push(appearanceTag + "-clove-sweet")}
                                appearanceList.push(appearanceTag + "-flower-sweet")
                                appearanceList.push(appearanceTag + "-love-sweet")
                                appearanceList.push(appearanceTag + "-ribbon-sweet")
                                appearanceList.push(appearanceTag + "-star-sweet")
                                appearanceList.push(appearanceTag + "-strawberry-sweet")
                            }

                            else {
                                appearanceList.push(appearanceTag)
                            }
                        }
                    }
                }
                setAppearanceTags(appearanceList)
            })
            .catch(error => console.log(error));

            return result.varieties
        })
        .then((varieties) => {
            const formTagList = []
            for (let i = 0; i < varieties.length; i++){
                const url = varieties[i].pokemon.url
                const tag = Number(url.slice(34, url.length - 1))

                // Morpeko hangry
                if (tag === 10187) {continue}

                else {formTagList.push(tag.toString())}
            }
            setFormTags(formTagList)
        })
        .catch(error => console.log(error));
    }, [speciesName])


    return ((formTags && appearanceTags) && (
        <div>
            <EntryContent 
                dexNum={dexNum} 
                pokemonData={pokemonData} 
                formTags={formTags}
                appearanceTags={appearanceTags}
                speciesData={speciesData}
                speciesName={speciesName}
            />
        </div>
    ))
}


export default PokedexEntry