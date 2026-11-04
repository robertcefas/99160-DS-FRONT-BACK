import {Footer} from './components/Footer'
import {Header} from './components/Header'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { FaleConosco } from './pages/FaleConosco'
import { SobreNos } from './pages/SobreNos'
import { Home } from './pages/Home'

function App() {
  return (
    <>
      
      <div className="app-shell">
        <Header />
        <div className="app-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre-nos" element={<SobreNos />} />
            <Route path="/fale-conosco" element={<FaleConosco />} />
          </Routes>
        </div>
        <Footer />
      </div>
    
    </>
  )
}

export default App
