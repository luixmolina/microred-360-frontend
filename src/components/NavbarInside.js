import React  from 'react';
import { Link} from 'react-router-dom';
import './NavbarInside.css';


const NavbarInside = () => {


    function cerrarSeccion(){

        localStorage.removeItem('token');
        window.location.href = '/'
    }

    return (
        <nav className="main-navigation2">
        <div className="navbar-header animated fadeInUp">
        <a className="navbar-brand" href="/#"><Link to="/" className="navbar-logo">
                    <img src="https://mr360bucket.s3.amazonaws.com/mr360_images/logo_1981png.png" alt="description "/>
                    </Link>
        </a>
        <ul className="cerrar_ul">
        <li className="cerrar_li" >
            {window.location.href !== "http://localhost:3000/Login"? <a href="/" className="nav-link-cerrar" onClick={cerrarSeccion}>Cerrar sección</a>:""}
        </li>
        </ul>
        </div>
        </nav>
     );
}

export default NavbarInside;