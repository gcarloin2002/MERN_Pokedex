import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// pages & components
import { Home } from './pages/Home'
import PokedexEntry from './pages/PokedexEntry';

function App() {
  return (
    <Router>
      <div className="App">
          <div className="pages">
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/:id" element={<PokedexEntry/>}/>
            </Routes>
          </div>
      </div>
    </Router>
  )
}

export default App;
