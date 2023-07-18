import ButtonCollection from "../components/HomeComponents/ButtonCollection"

const Home = (props) => {
    // Array of every pokemon's data
    const pokemonData = props.pokemonData
    
    return (
        <>
           <ButtonCollection pokemonData={pokemonData}/>
        </>
    )
}

export default Home