import React, { useState} from 'react';
import './recuperar_password.css';
import NavbarOutside from './NavbarOutside';
import Footer2 from './Footer2';
import {HiOutlineUser} from "react-icons/hi";
import Swal from 'sweetalert2'

const RecuperarPassword = () => {

   const [correo, setCorreo] = useState(undefined)
   
   async function recuperarContrasena(event) {
         
      event.preventDefault();
      
      const responseRegister = await fetch(process.env.REACT_APP_URL_FORGOT_PASSWORD, {
              method: 'POST',
              headers:{
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                correo,
              }),
      })

      const data = await responseRegister.json()
     
      if(data.status === "success"){
              Swal.fire({
               title: 'Enviamos a tu correo electrónico un link de cambio de clave con el que podrás finalizar el proceso de recuperación de tu cuenta.',
               confirmButtonColor: '#4f7df2',
               });

            window.location.href = '/Login';
      } else{
         Swal.fire({
            title: 'El usuario no existe.',
            confirmButtonColor: '#4f7df2',
            });
      }
   }


    return (
    <>

    <NavbarOutside/>
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
            <form onSubmit={recuperarContrasena} className='recuperar_formulario'>
              <i className="icon"><HiOutlineUser  size='25px'></HiOutlineUser></i>
               <input type="email" className="inputs input-field"  onChange={ev => setCorreo(ev.target.value)} placeholder='Ingrese por favor su correo' required  /><br></br><br></br>
               <div className="olvido_contrasena">
               <button className="btn">Restablecer contraseña</button><br></br>
            </div>
            </form>
           
         </div>
      </div>
   </div>
   </div>
   <Footer2 />
    </>
     );
}

export default RecuperarPassword;