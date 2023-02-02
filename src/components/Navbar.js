import React from 'react';
import Logo from './logo_1981png.png'
import { Link} from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (

    
    <nav class="main-navigation">
    <div class="navbar-header animated fadeInUp">
    
        <a class="navbar-brand" href="/#"><Link to="/" className="navbar-logo">
                    <img src={Logo} alt="description "/>
                    </Link></a>
    </div>
    <ul class="nav-list">
        <li class="nav-list-item">
            <a href="/#" class="nav-link">Acerda de</a>
        </li>
        <li class="nav-list-item">
            <a href="/#" class="nav-link">Cómo usar</a>
        </li>
        <li class="nav-list-item">
            <a href="/#" class="nav-link">resultados</a>
        </li>
        <li class="nav-list-item">
            <a href="/#" class="nav-link">Patrocinadores</a>
        </li>
        
    </ul>

</nav>


  )
}

export default Navbar