import React from 'react';
import Logo from './logo_1981png.png'
import { Link} from 'react-router-dom';
import './Navbar.css';
import MobileNavigation from './MobileNavigation';
import NormalNavigation from './NormalNavigation';

function Navbar() {


 
  return (

    
    <nav className="main-navigation">
    <div className="navbar-header animated fadeInUp">
    
        <a className="navbar-brand" href="/#"><Link to="/" className="navbar-logo">
                    <img src={Logo} alt="description "/>
                    </Link></a>
    </div>
    <NormalNavigation />
    <MobileNavigation />
    

</nav>


  )
}

export default Navbar