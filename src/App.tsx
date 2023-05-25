import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Detalhe } from './pages/Detalhe'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:number" element={<Detalhe />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
