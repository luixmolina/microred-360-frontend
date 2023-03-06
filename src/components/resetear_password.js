import React, { Component }  from 'react';
import './resetear_password.css';
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
            <span className="textoRecuperar"> Por favor ingrese su nueva contraseña.</span>
            <br></br>
            <form action="POST" className='recuperar_formulario'>
            <i className="icon"><HiOutlineLockClosed  size='25px'></HiOutlineLockClosed></i>
              <input type="password" className="inputs" placeholder='Nueva contraseña'/><br></br>
              <i className="icon2"><HiOutlineLockClosed  size='25px'></HiOutlineLockClosed></i>
              <input type="password" className="inputs password2" placeholder='Confirmar contraseña' /><br></br><br></br>
            </form>
            <div className="olvido_contrasena">
               <button className="btn">Resetear contraseña</button><br></br>
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