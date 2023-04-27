import React , {useState} from 'react';
import './login.css';
import NavbarOutside from './NavbarOutside';
import Footer2 from './Footer2';
import {HiOutlineUser} from "react-icons/hi";
import {HiOutlineLockClosed } from "react-icons/hi";
import Swal from 'sweetalert2';


function Login() {

   const [correo, setCorreo] = useState('');
   const [password, setPassword] = useState('');
   const [mantenerSeccion, setmantenerSeccion] = useState(false);

   // funcion para login
   async function LoginUser(event) {

      event.preventDefault();
      
      const responseLogin= await fetch(process.env.REACT_APP_URL_LOGIN, {
              method: 'POST',
              headers:{
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                correo,
                password,
                mantenerSeccion,
              }),
          })

      const data = await responseLogin.json()
         // si se encuentra el usuario, almacena el hash en localstorage
      if(data.user){

            localStorage.setItem('token', data.user);

             window.location.href = '/Dashboard'

      } else{

         Swal.fire({
               title: 'Por favor revise su correo o contraseña',
               confirmButtonColor: '#4f7df2',
         });
      }

   
   }



  return (
    <>
    <NavbarOutside/>
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
               <input type="checkbox" onChange={ev => setmantenerSeccion(ev.target.value)}/><span className="mantener"> Mantener inicio de sesión</span><br></br>
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