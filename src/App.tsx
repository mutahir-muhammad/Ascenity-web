import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Engine from './pages/Engine'
import Reliv from './pages/Reliv'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/engine" element={<Engine />} />
        <Route path="/reliv" element={<Reliv />} />
      </Routes>
    </Router>
  )
}
