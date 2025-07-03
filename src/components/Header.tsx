import { Link } from 'react-router-dom';



export const Header = () => {
  return (
    <header>
      <h1 className="titulo">Eduardo Orozco <span>Freelancer</span></h1>
      <div className="nav-bg">
        <nav className="navegacion-principal contenedor">
          <Link to="/">Inicio</Link>
          <Link to="/SobreMi">Sobre Mi</Link>
          <Link to="/Portafolio">Portafolio</Link>
          <a href="#contacto_hero">Contacto</a>          
        </nav>

      </div>
    </header>
  )
}
