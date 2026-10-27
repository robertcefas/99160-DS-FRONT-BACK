import './App.css'
import Footer from './componentes/Footer'
import Header from './componentes/Header'
import AdicionarUsuario from './pages/AdicionarUsuario'

function App() {

  return (
    <>
      <Header />
      <main className='main'>
        <h1>Bem-Vindo ao Sistema de Cadastro de Usuarios</h1>
        <p>Este é um simples sistema de cadastro de usuários.</p>
        <br />
        <AdicionarUsuario />
      </main>
      <Footer />
    </>
  )
}

export default App
