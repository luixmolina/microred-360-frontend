import React from 'react';
import Logo_gers from './logo_gers.png';
import Logo_linkedin from './linkeding-logo.png';
import twiter_logo from './twiter-logo.png';
import facebook_logo from './facebook-logo.png';

import './Footer2.css';

function Footer2() {


 
  return (

<footer className="footer2">

    <div className="logo_gers2">
    <img src={Logo_gers} alt="description "/>
</div>
<div className="flex-container-footer2">
    <h4>Oficina principal</h4>
    <div> Calle 3A # 65-118</div>
    <div>602 489 700</div>
    <div>gers@gers.com.co</div>
    <div>Cali - Colombia</div>
</div>
<div className="redes2">
    <h4 className="titulo_redes2">Nuestras redes sociales:</h4>
    <div className="redes_sociales2">
    <div><a href={"https://twitter.com/gers_sa"}  target="_blank"> <img src={twiter_logo} alt=""  className="logos_footer" width="30" height="30"></img></a></div>
    <div><a href={"https://www.linkedin.com/company/gers-s-a"}  target="_blank"> <img src={Logo_linkedin} alt=""  className="logos_footer" width="33" height="33"></img></a></div>
    <div> <a href={"https://www.facebook.com/gerscolombia/"}  target="_blank" ><img src={facebook_logo} alt=""  className="logos_footer" width="27" height="27"></img></a></div>
    </div>
</div>


  </footer>


  )
}

export default Footer2