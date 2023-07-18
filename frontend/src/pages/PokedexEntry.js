import { useEffect, useState } from "react";

import EntryContent from "../components/PokedexEntryComponents/EntryContent"

const PokedexEntry = (props) => {
    const [entryData, setEntryData] = useState(false)
    const [apiURLs, setAPIURLs] = useState(false)
    const [formTags, setFormTags] = useState(false)
    const [apiNameTag, setAPINameTag] = useState(false)
    const [appearanceTags, setAppearanceTags] = useState(false)
    const displayName = (window.location.href).slice(22).replaceAll("_", " ")
    const pokemonData = props.pokemonData
    const dexNum = props.dexNum
    
    // Fetches the pokemon's data
    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon-species/" + dexNum)
        .then((response) => response.json())
        .then((result) => {
            setAPINameTag(result.name)

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

                        // No unown-a
                        else if (appearanceTag.includes("201-a")) {continue}
                
                        // No castfroms
                        else if (appearanceTag.includes("351-")){continue}

                        // No deoxys forms
                        else if (appearanceTag.includes("386-")) {continue}

                        // No Burmy 
                        else if (appearanceTag.includes("412-plant")) {continue}

                        // No wormadam forms
                        else if (appearanceTag.includes("413-")){continue}

                        // No cherrim overcast
                        else if (appearanceTag.includes("421-overcast")){continue}


                        // No west-sea 
                        else if (appearanceTag.includes("-west")){continue}


                        // No rotoms
                        else if (appearanceTag.includes("479-")){continue}

                        // No shaymin-sky
                        else if (appearanceTag.includes("492-")){continue}

                        // No Normaltype Arceus
                        else if (appearanceTag.includes("-normal")){continue}

                        // No dialga, palkia, or giratina forms
                        else if (appearanceTag.includes("-origin") || appearanceTag.includes("-altered")){continue}

                        // No darmanitans
                        else if (appearanceTag.includes("555-")) {continue}

                        // No spring form deerling / sawsbuck
                        else if (appearanceTag.includes("-spring")) {continue}


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

                        // No meadow vivillon
                        else if (appearanceTag.includes("-meadow")) {continue}

                        // Flabebe line red
                        else if (appearanceTag.includes("-red")) {continue}

                        // No natrual furfrou
                        else if (appearanceTag.includes("-natural")) {continue}

                        // No aegislash
                        else if (appearanceTag.includes("681-")){continue}

                        // No pumpkaboos / gourgeists
                        else if (appearanceTag.includes("710-") || appearanceTag.includes("711-")){continue}

                        // No neutral xerneas
                        else if (appearanceTag.includes("-neutral")){continue}

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

                        // No normal silvally
                        else if (appearanceTag.includes("-normal")){continue}

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
                                appearanceList.push(appearanceTag + "-berry-sweet")
                                appearanceList.push(appearanceTag + "-clove-sweet")
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
            const urlList = []
            const formTagList = []
            for (let i = 0; i < varieties.length; i++){
                const url = varieties[i].pokemon.url
                urlList.push(url)
                formTagList.push(url.slice(34, url.length - 1))
            }
            setAPIURLs(urlList)  
            setFormTags(formTagList)

            fetch(urlList[0])
            .then((response) => response.json())
            .then((result) => setEntryData(result))
        })
        .catch(error => console.log(error));
    }, [displayName, dexNum])

    return ((formTags && appearanceTags && apiURLs && entryData) && (
        <div>
            <EntryContent 
                displayName={displayName} 
                apiNameTag={apiNameTag}
                dexNum={dexNum} 
                pokemonData={pokemonData} 
                apiURLs={apiURLs} 
                formTags={formTags}
                appearanceTags={appearanceTags}
                entryData={entryData}
            />
        </div>
    ))
}


export default PokedexEntry