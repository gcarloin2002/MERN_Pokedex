import { useEffect, useState } from "react"
import ButtonCollection from "../components/HomeComponents/ButtonCollection";

const compare = (a,b) => {
    if (Number(a.dexNumber) < Number(b.dexNumber))
       return -1;
    if (Number(a.dexNumber) > Number(b.dexNumber))
      return 1;
    return 0;
}

const HomePage = () => {
    const [pokemonDataArray, setPokemonDataArray] = useState(false)
    useEffect(() => {
        fetch("/api/data")
        .then((response) => response.json())
        .then((result) => {
          setPokemonDataArray(result.sort(compare))
          console.log(result.sort(compare))
        })
    }, [])
   


    return((pokemonDataArray !== false) && (<ButtonCollection pokemonDataArray={pokemonDataArray}/>))
}

export default HomePage 