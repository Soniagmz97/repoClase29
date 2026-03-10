import './App.css'
import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom'
import Home from './components/Home/Home'
import Ofertas from './components/Ofertas/Ofertas'

function App() {

  return (
    <>
      <BrowserRouter>
        <nav className="p-4 bg-indigo-600 text-white flex gap-4 shadow-lg">
          <Link to="/" className="hover:underline font-bold">Home</Link>
          <Link to="/Ofertas" className="hover:underline font-bold">Ofertas</Link>
        </nav>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/perfil' element={<Ofertas />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
