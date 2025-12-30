import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Engine from './pages/Engine'
import Reliv from './pages/Reliv'
import Contact from './pages/Contact'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/engine" element={<Engine />} />
        <Route path="/reliv" element={<Reliv />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  )
}
