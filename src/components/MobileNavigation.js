import NavLinks  from "./NavLinks";
import React from "react";
import {SlMenu} from 'react-icons/all'
import {CgCloseO} from 'react-icons/cg'
import {useState} from 'react';
const MobileNavigation = () => {

    const [open, setOpen]  = useState(false);

    const hamburgerIcon =  <SlMenu className="Hamburger" size='40px'
    onClick={() => setOpen(!open)}></SlMenu>
     
     const closeIcon =  <CgCloseO className="Hamburger" size='40px'
     onClick={() => setOpen(!open)}></CgCloseO>

    const closeMobileMenu = () => setOpen(false);

    return ( 
        <div className="MobileNavigation">
      
        
       {open ? closeIcon  : hamburgerIcon}
        {open && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu} />}
        </div>
     );
}
 
export default MobileNavigation;