import React, { Component }  from 'react';
import './recuperar_password.css';
import NavbarInside from './NavbarInside';
import Footer2 from './Footer2';
import {HiOutlineUser} from "react-icons/hi";
import {HiOutlineLockClosed } from "react-icons/hi";


const RecuperarPassword = () => {



    return (
    <>
    

    <NavbarInside/>
 <div className="  container_recuperar">
   <div className="imagen_recuperar">
   </div>
   <div className="caja_recuperar">
      <div className="encabezado_recuperar">
         ¿Olvidó la contraseña?
      </div>
      <div className="contenido_recuperar">
         <div className="caja_input_recuperar input-icons">
            <span className="textoRecuperar"> Por favor ingrese su correo para restablecer su contraseña.</span>
            <br></br>
            <form action="POST" className='recuperar_formulario'>
              <i className="icon"><HiOutlineUser  size='25px'></HiOutlineUser></i>
               <input type="email" className="inputs input-field" pattern=".+@globex\.com" placeholder='Ingrese por favor su correo' required  /><br></br><br></br>
            </form>
            <div className="olvido_contrasena">
               <button className="btn">Restablecer contraseña</button><br></br>
            </div>
         </div>
      </div>
   </div>
   </div>
   <Footer2 />
    </>
     );
}

export default RecuperarPassword;