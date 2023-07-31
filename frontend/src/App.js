import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import HomePage from './pages/HomePage';
import PokedexEntry from './pages/PokedexEntry';

const compare = (a,b) => {
  if (Number(a.dexNumber) < Number(b.dexNumber))
     return -1;
  if (Number(a.dexNumber) > Number(b.dexNumber))
    return 1;
  return 0;
}

function App() {
  // Array of every pokemon's data
  const [allRoutes, setAllRoutes] = useState(false)

  // Fetches every Pokemon
  useEffect(() => {
    fetch("/api/data")
    .then((response) => response.json())
    .then((result) => {
      const dataArray = result.sort(compare) // Sorts the objects from mongodb
      const pkmnData = [] 
      for (let i = 0; i < result.length; i++){
        const tagObj = dataArray[i]
        pkmnData.push(tagObj)
      }
    

      const routes = []
      for (let i = 0; i < pkmnData.length; i++) {
        const speciesName = pkmnData[i].speciesName
        const urlName = speciesName.replace(" ", "_")

        const obj = {path: ("/" + urlName), element: <PokedexEntry dexNum={i + 1} pokemonData={pkmnData} id={pkmnData[i]._id}/>}
        routes.push(obj)
      }
      const everyRoute = routes.map(({path, element}, key) => <Route path={path} element={element} key={key} />);
      setAllRoutes(everyRoute)
    })
    .catch(error => console.log(error));
  }, [])

  

  return (
          <Router>
            <div className="App"> 
                <div className="pages">
                  <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    {allRoutes}
                    <Route path="*" element={<p>Unavailable Page</p>} />
                  </Routes>
                </div>
            </div>
          </Router>
  )
}

export default App;