import { Link } from 'react-router-dom'
import './style.css'

export default function Cabecalho(){
    return(
        <div>
            <header>
                <Link to='/'>Home</Link>
                <nav>
                    <NaveLink to='/cadastrar'>Cadastarar</NaveLink>
                    <NaveLink to='/listar-ususarios'>Usúarios</NaveLink>
                </nav>
            </header>
        </div>
    )
}