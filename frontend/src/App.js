import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useEffect, useState, useContext } from 'react';
import { determineDisplayName, determineUrlName } from './components/HomeComponents/DexButton';

// pages & components
import Home from './pages/Home'
import PokedexEntry from './pages/PokedexEntry';

export const CurrentTagArray = React.createContext()

function App() {
  // Array of every pokemon's data
  const [pokemonData, setPokemonData] = useState([]);
  const [currentTagArray, setCurrentTagArray] = useState([])

  // Fetches every Pokemon
  useEffect(() => {
  fetch("https://pokeapi.co/api/v2/pokemon-species/?limit=1010")
  .then((response) => response.json())
  .then((json) => json.results)
  .then((result) => {
      const pkmnData = []
      for (let i = 0; i < result.length; i++){
          pkmnData.push(result[i])
      }
      
      setPokemonData(pkmnData)
  })
  .catch(error => console.log(error));
  }, [])

  const routes = []
  const attributesObj = {}
  for (let i = 0; i < pokemonData.length; i++) {
    const origName = pokemonData[i].name
    const displayName = determineDisplayName(origName.charAt(0).toUpperCase() + origName.slice(1), i + 1)
    const urlName = determineUrlName(displayName)
    attributesObj[displayName] = i + 1

    const obj = {path: ("/" + urlName), element: <PokedexEntry dexNum={i + 1} pokemonData={pokemonData}/>}
    routes.push(obj)
  }
  
  const everyRoute = routes.map(({path, element}, key) => <Route path={path} element={element} key={key} />);

  return (
  <Router>
    <CurrentTagArray.Provider value={[currentTagArray, setCurrentTagArray]}>
      <div className="App">
          <div className="pages">
            <Routes>
              <Route path="/" element={<Home pokemonData={pokemonData}/>}/>
              {everyRoute}
              <Route path="*" element={<p></p>} />
            </Routes>
          </div>
      </div>
    </CurrentTagArray.Provider>
  </Router>
  )
}

export default App;
