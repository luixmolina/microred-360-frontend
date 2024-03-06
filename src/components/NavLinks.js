import React   from 'react';

const NavLinks = (props) => {
    return (
        <ul className="nav-list">
        <li className="nav-list-item" >
            <a href="#microred" className="nav-link" onClick={() => props.isMobile && props.closeMobileMenu()}>Acerda de</a>
        </li>
        <li className="nav-list-item" onClick={() => props.isMobile && props.closeMobileMenu()}>
            <a href="#como_usar" className="nav-link">Cómo usar</a>
        </li>
        <li className="nav-list-item" onClick={() => props.isMobile && props.closeMobileMenu()}>
            <a href="#que_obtiene" className="nav-link">Resultados</a>
        </li>
        <li className="nav-list-item" onClick={() => props.isMobile && props.closeMobileMenu()}>
            <a href="#patrocinadores" className="nav-link">Noticias</a>
        </li>
        </ul>
     );
}

export default NavLinks;