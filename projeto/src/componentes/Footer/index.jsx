import './style.css'
function Footer() {

  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Todos os direitos reservados.<br />
        SENAI Dendezeiros
      </p>
    </footer>
  );
}
export default Footer;