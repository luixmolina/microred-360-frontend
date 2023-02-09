import React from 'react';
import Logo_gers from './logo_gers.png';
import Logo_linkedin from './linkeding-logo.png';
import twiter_logo from './twiter-logo.png';
import facebook_logo from './facebook-logo.png';

import './Footer.css';

function Footer() {


 
  return (

<footer className="footer">

    <div className="logo_gers">
    <img src={Logo_gers} alt="description "/>
</div>
<div className="flex-container-footer">
    <h4>Oficina principal</h4>
    <div> Calle 3A # 65-118</div>
    <div>602 489 700</div>
    <div>gers@gers.com.co</div>
    <div>Cali - Colombia</div>
</div>
<div className="redes">
    <h4 className="titulo_redes">Nuestras redes sociales:</h4>
    <div className="redes_sociales">
    <div><a href={"https://twitter.com/gers_sa"}> <img src={twiter_logo} alt=""  width="30" height="30"></img></a></div>
    <div><a href={"https://www.linkedin.com/company/gers-s-a"}> <img src={Logo_linkedin} alt=""  width="33" height="33"></img></a></div>
    <div> <a href={"https://www.facebook.com/gerscolombia/"}><img src={facebook_logo} alt=""  width="27" height="27"></img></a></div>
    </div>
</div>


  </footer>


  )
}

export default Footer