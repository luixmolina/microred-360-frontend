import React, { Component }  from 'react';
import Logo from './logo_1981png.png'
import { Link} from 'react-router-dom';
import './NavbarInside.css';


const NavbarInside = () => {
    return ( 
        <nav className="main-navigation2">
    <div className="navbar-header animated fadeInUp">
    
        <a className="navbar-brand" href="/#"><Link to="/" className="navbar-logo">
                    <img src={Logo} alt="description "/>
                    </Link></a>
    </div>


</nav>
     );
}

export default NavbarInside;