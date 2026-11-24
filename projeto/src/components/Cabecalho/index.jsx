import { Link, NavLink } from 'react-router-dom'
import './style.css'

export default function Cabecalho(){
    return (
        <header className="site-header">
            <div className="header-content">
                <Link className="brand" to="/">
                    <span className="brand-mark" aria-hidden="true">S</span>
                    <span>Gestão <strong>SENAI</strong></span>
                </Link>
                <nav className="site-nav" aria-label="Navegação principal">
                    <NavLink to="/">Início</NavLink>
                    <NavLink to="/usuarios">Usuários</NavLink>
                </nav>
            </div>
        </header>
    )
}