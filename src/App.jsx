import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<About />} />

        <Route path="*" element={<h1>Página não encontrada</h1>} />
      </Routes>
    </Router>
  )
}

export default App

