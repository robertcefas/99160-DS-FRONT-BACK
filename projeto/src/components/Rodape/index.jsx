import './style.css'

export default function Rodape() {
    const anoAtual = new Date().getFullYear()
    return (
            <footer className="site-footer">
                <div className="footer-content">
                <p>
                    &copy; {anoAtual} Gestão SENAI. Todos os direitos reservados.
                </p>
                <p className="footer-location">SENAI - Bahia</p>
                </div>
            </footer>
    )
}