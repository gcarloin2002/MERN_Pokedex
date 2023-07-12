import { useParams } from 'react-router-dom';
import { pokemonInfo } from './Home';
import { determineDisplayName, determineUrlName } from '../components/DexButton';

const generateValidURLNames = () => {
    const results = []
    for (let i = 0; i < pokemonInfo.length; i++) {
        const displayName = determineDisplayName(pokemonInfo[i].name, i + 1)
        const urlName = determineUrlName(displayName)
        const finalName = urlName.charAt(0).toUpperCase() + urlName.slice(1)
        results.push(finalName)
    }

    return results
}
    

const PokedexEntry = () => {
    const { id } = useParams()
    const validURLNames = generateValidURLNames()
    
    if (validURLNames.includes(id)) {
        return (
            <h1>Welcome to the {id} page!</h1>
        )
    }

    else {
        return <h1>Sorry! This page doesn't exist!</h1>
    }
}


export default PokedexEntry