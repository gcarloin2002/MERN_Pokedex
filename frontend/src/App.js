import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { generateSpeciesName, generateUrlName } from './components/HomeComponents/DexButton';
import Home from './pages/Home'
import PokedexEntry from './pages/PokedexEntry';

export const CurrentTagObjContext = React.createContext() 


function App() {
  // Array of every pokemon's data
  const [pokemonData, setPokemonData] = useState([]);
  const [currentTagObj, setCurrentTagObj] = useState({})

  // Fetches every Pokemon
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon-species/?limit=1010")
    .then((response) => response.json())
    .then((json) => json.results)
    .then((result) => {
        const pkmnData = []
        const attributesObj = {}
        for (let i = 0; i < result.length; i++){
            pkmnData.push(result[i])
            const origName = pkmnData[i].name
            const speciesName = generateSpeciesName(origName.charAt(0).toUpperCase() + origName.slice(1), i + 1)
            const dexNumber = ((i + 1) + "")
            let gender = "n/a" 
            const genderDiffNums = ['3', '12', '19', '20', '25', '26', '41', '42', '44', '45', '64', '65', '84', '85', 
            '97', '111', '112', '118', '119', '123', '129', '130', '133', '154', '165', '166', '178', '185', '186', '190', 
            '194', '195', '198', '202', '203', '207', '208', '212', '214', '215', '217', '221', '224', '229', '232', '255', 
            '256', '257', '267', '269', '272', '274', '275', '307', '308', '315', '316', '317', '322', '323', '332', '350', 
            '369', '396', '397', '398', '399', '400', '401', '402', '403', '404', '405', '407', '415', '417', '418', '419', 
            '424', '443', '444', '445', '449', '450', '453', '454', '456', '457', '459', '460', '461', '464', '465', '473', 
            '521', '592', '593', '668', '678', '876', '902', '916']
            
            if (genderDiffNums.includes(dexNumber)) {
              gender = "m"
            }

            // Dexnumber, species, form, appearance, shiny
            const tagObj = {
              dexNumber: dexNumber,
              speciesName: speciesName,
              form: dexNumber,
              appearance: dexNumber,
              gender: gender,
              shiny: "f"
            }
            attributesObj[speciesName] = tagObj        
        }


        setCurrentTagObj(attributesObj)
        setPokemonData(pkmnData)
        
        
    })
    .catch(error => console.log(error));
  }, [])

  const routes = []
  for (let i = 0; i < pokemonData.length; i++) {
    const origName = pokemonData[i].name
    const speciesName = generateSpeciesName(origName.charAt(0).toUpperCase() + origName.slice(1), i + 1)
    const urlName = generateUrlName(speciesName)

    const obj = {path: ("/" + urlName), element: <PokedexEntry dexNum={i + 1} pokemonData={pokemonData}/>}
    routes.push(obj)
  }
  const everyRoute = routes.map(({path, element}, key) => <Route path={path} element={element} key={key} />);

  return (
  <Router>
    <CurrentTagObjContext.Provider value={[currentTagObj, setCurrentTagObj]}>
      <div className="App">
          <div className="pages">
            <Routes>
              <Route path="/" element={<Home pokemonData={pokemonData}/>}/>
              {everyRoute}
              <Route path="*" element={<p></p>} />
            </Routes>
          </div>
      </div>
    </CurrentTagObjContext.Provider>
  </Router>
  )
}

export default App;