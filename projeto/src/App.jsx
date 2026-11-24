import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cabecalho from './components/Cabecalho'
import Rodape from './components/Rodape'
import HomePage from './pages/HomePage'
import UsuarioPage from './pages/UsuariosPage'
import './App.css'

export default function App() {
  return (
    <BrowserRouter>
      <div className="site-shell">
        <Cabecalho />
        <main className="site-main">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/usuarios" element={<UsuarioPage />} />
          </Routes>
        </main>
        <Rodape />
      </div>
    </BrowserRouter>
  )
}
