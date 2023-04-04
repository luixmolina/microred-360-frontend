import React   from 'react';
import { Link} from 'react-router-dom';
import './NavbarInside.css';


const NavbarOutside = () => {

    return (
        <nav className="main-navigation2">
        <div className="navbar-header animated fadeInUp">
        <a className="navbar-brand" href="/#"><Link to="/" className="navbar-logo">
                    <img src="https://mr360bucket.s3.amazonaws.com/mr360_images/logo_1981png.png" alt="description "/>
                    </Link>
        </a>
        </div>
        </nav>
    );
}

export default NavbarOutside;