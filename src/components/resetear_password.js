import React, {useEffect, useState} from 'react';
import './resetear_password.css';
import Footer2 from './Footer2';
import {HiOutlineLockClosed } from "react-icons/hi";
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2'
import NavbarOutside from './NavbarOutside';

const RecuperarPassword = () => {

   let { id, token } = useParams();
   const [correo, setCorreo] = useState(undefined)
   const [password, setPassword] = useState(undefined)

   useEffect(() => {
         fetch("http://localhost:5000/reset-password", {
            method: "POST",
            mode: 'cors',
            headers: {"Content-type": "application/json;charset=UTF-8"},
            body: JSON.stringify({id, token})
         }).then(
            response => response.json()
         ).then(
            data => {
            
               if(data.status === "Error"){
                  window.location.href = '/login'
               } else{
                  setCorreo(data.correo)
               }
            }
         )
   }, [])


      async function cambiarContrasena(event) {

            event.preventDefault();

            const responseRegister = await fetch('http://localhost:5000/cambiar_password', {
                  method: 'POST',
                  headers:{
                       'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({
                  id,
                  token,
                  correo,
                  password,
                  }),
            })

            const data = await responseRegister.json()
           
            if(data.status == 'success'){

                  Swal.fire({
                     title:'Contraseña cambiada exitosamente',
                     confirmButtonText: "Ok",
                     confirmButtonColor: '#4f7df2',
                  }).then((result) => {
                     if(result.isConfirmed){
                        window.location.href = '/Login';
                     }
                  })
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
            <span className="textoRecuperar"> Por favor ingrese su nueva contraseña.</span>
            <br></br>
            <form onSubmit={cambiarContrasena} className='recuperar_formulario'>
            <i className="icon"><HiOutlineLockClosed  size='25px'></HiOutlineLockClosed></i>
              <input type="password" className="inputs" placeholder='Nueva contraseña' onChange={ev => setPassword(ev.target.value)}/><br></br>
              <br></br>
              <div className="olvido_contrasena">
               <button className="btn">Resetear contraseña</button><br></br>
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