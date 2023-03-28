import React  from 'react';
import { Link} from 'react-router-dom';
import './NavbarInside.css';
import logo_gers from './logo_gers.png';

const NavbarInside = () => {


    function cerrarSeccion(){

        localStorage.removeItem('token');
        window.location.href = '/'
    }

    return (
        <nav className="main-navigation2">
        <div className="navbar-header animated fadeInUp">
        <a className="navbar-brand" href="/#"><Link to="/" className="navbar-logo">
                    <img src={logo_gers} alt="description "/>
                    </Link>
        </a>
        <ul className="cerrar_ul">
        <li className="cerrar_li" >
            {window.location.href !== "http://localhost:3000/Login"? <a href="/" className="nav-link-cerrar" onClick={cerrarSeccion}>Cerrar sesión</a>:""}
        </li>
        </ul>
        </div>
        </nav>
     );
}

export default NavbarInside;