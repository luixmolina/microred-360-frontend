import React from 'react';
import Logo from './logo_1981png.png'
import { Link} from 'react-router-dom';
import './Navbar.css';

function Navbar() {


 
  return (

    
    <nav className="main-navigation">
    <div className="navbar-header animated fadeInUp">
    
        <a className="navbar-brand" href="/#"><Link to="/" className="navbar-logo">
                    <img src={Logo} alt="description "/>
                    </Link></a>
    </div>
    <ul className="nav-list">
        <li className="nav-list-item">
            <a href="/#" className="nav-link">Acerda de</a>
        </li>
        <li className="nav-list-item">
            <a href="/#" className="nav-link">Cómo usar</a>
        </li>
        <li className="nav-list-item">
            <a href="/#" className="nav-link">resultados</a>
        </li>
        <li className="nav-list-item">
            <a href="/#" className="nav-link">Patrocinadores</a>
        </li>
    </ul>

</nav>


  )
}

export default Navbar