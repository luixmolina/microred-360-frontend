import React , {useEffect, useState} from 'react';
import Logo from './logo_1981png.png'
import { Link} from 'react-router-dom';
import './login.css';
import NavbarInside from './NavbarInside';
import Footer2 from './Footer2';
import {HiOutlineUser} from "react-icons/hi";
import {HiOutlineLockClosed } from "react-icons/hi";


function Login() {
   const [correo, setCorreo] = useState('');
   const [password, setPassword] = useState('');

   async function LoginUser(event) {
         
   
      event.preventDefault();
      
      const responseLogin= await fetch('http://localhost:5000/Login', {
              method: 'POST',
              headers:{
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                correo,
                password,
              }),
          })

          const data = await responseLogin.json()
          if(data.user){
           
             localStorage.setItem('token', data.user);

             window.location.href = '/Dashboard'

          } else{
             alert('Por favor revise su correo o contraseña')
            }

          console.log(data)
   }



  return (
    <>
    <NavbarInside/>
 <div className="  container_login">
   <div className="imagen_login">
   </div>
   <div className="caja_login">
      <div className="encabezado_login">
         Microrred 360
      </div>
      <div className="contenido_login">
         <div className="caja_inputs input-icons">
            Inicia sesión<br></br>
            <form onSubmit={LoginUser}>
              <i className="icon"><HiOutlineUser  size='25px'></HiOutlineUser></i>
               <input type="email" className="inputs input-field"  required  onChange={ev => setCorreo(ev.target.value)} placeholder='Ingrese por favor su correo' /><br></br><br></br>
               <i className="icon"><HiOutlineLockClosed  size='25px'></HiOutlineLockClosed></i>
            
               <input type="password" className="inputs" onChange={ev => setPassword(ev.target.value)} placeholder='Ingrese por favor su contraseña'/><br></br>
               <input type="checkbox" /><span className="mantener"> Mantener inicio de sesión</span><br></br>
               <div className="olvido_contrasena">
            <input type="submit" value="Iniciar sesión" className="btn_iniciar"></input><br></br>
               <div className='texto_olvido'>¿Olvidó su <a href="/recuperar" className="subrayado" >contraseña</a>?</div><br></br>
            </div>
            </form>
           
         </div>
         <div className="sin_cuenta">
            ¿Sin cuenta? <a href="/singup" className="subrayado" >Crea una cuenta</a>
            <div></div>
         </div>
      </div>
   </div>
   </div>
   <Footer2 />
    </>
  
)
}

export default Login