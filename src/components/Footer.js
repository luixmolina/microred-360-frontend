import React from 'react';
import './Footer.css';


function Footer() {


  return (

<footer className="footer">
    <div className="logo_gers">
    <img src="https://mr360bucket.s3.amazonaws.com/mr360_images/logo_gers.png" alt="description "/>
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
    <div><a href={"https://twitter.com/gers_sa"} rel="noreferrer" target="_blank"> <img src="https://mr360bucket.s3.amazonaws.com/mr360_images/twiter-logo.png" alt=""  className="logos_footer" width="30" height="30"></img></a></div>
    <div><a href={"https://www.linkedin.com/company/gers-s-a"} rel="noreferrer" target="_blank"> <img src="https://mr360bucket.s3.amazonaws.com/mr360_images/linkeding-logo.png" alt=""  className="logos_footer" width="33" height="33"></img></a></div>
    <div> <a href={"https://www.facebook.com/gerscolombia/"} rel="noreferrer" target="_blank" ><img src="https://mr360bucket.s3.amazonaws.com/mr360_images/facebook-logo.png" alt=""  className="logos_footer" width="27" height="27"></img></a></div>
    </div>
</div>
  </footer>
  )
}

export default Footer