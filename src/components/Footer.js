import React from 'react';
import './Footer.css';
import logo_gers from './logo_gers.png';
import linkedinglogo from './linkeding-logo.png';
import facebookLogo from './facebook-logo.png';
import twiterLogo from './twiter-logo.png';




function Footer() {


  return (

<footer className="footer">
    <div className="logo_gers">
    <img src={logo_gers} alt="description "/>
</div>
<div className="flex-container-footer">
    <h4>Oficina principal</h4>
    <div> Calle 3A # 65-118</div>
    <div>602 489 700</div>
    <div>gers@gers.com</div>
    <div>Cali - Colombia</div>
</div>
<div className="redes">
    <h4 className="titulo_redes">Nuestras redes sociales:</h4>
    <div className="redes_sociales">
    <div><a href={"https://twitter.com/gers_sa"} rel="noreferrer" target="_blank"> <img src={twiterLogo} alt=""  className="logos_footer" width="30" height="30"></img></a></div>
    <div><a href={"https://www.linkedin.com/company/gers-s-a"} rel="noreferrer" target="_blank"> <img src={linkedinglogo} alt=""  className="logos_footer" width="33" height="33"></img></a></div>
    <div> <a href={"https://www.facebook.com/gerscolombia/"} rel="noreferrer" target="_blank" ><img src={facebookLogo} alt=""  className="logos_footer" width="27" height="27"></img></a></div>
    </div>
</div>
  </footer>
  )
}

export default Footer