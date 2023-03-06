import React , {useEffect, useState} from 'react';
import './singup.css';
import NavbarInside from './NavbarInside';
import Footer2 from './Footer2';



function SingUp() {
   

     const [nombre, setNombre] = useState('');
     const [correo, setCorreo] = useState('');
     const [institucion, setInstitucion] = useState('');
     const [cargo, setCargo] = useState('');
     const [telefono, setTelefono] = useState('');
     const [password, setPassword] = useState('');


     async function registerUser(event) {
         
        event.preventDefault();
        
        const responseRegister = await fetch('http://localhost:5000/registrarUsuario', {
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  nombre,
                  correo,
                  institucion,
                  cargo,
                  telefono,
                  password,
                }),
            })

            const data = await responseRegister.json()
            if(data.status === "success"){

                alert('Usuario creado exitosamente')
                window.location.href = '/Login'
            }
        
     }
    return (
      
        <>
        <NavbarInside/>
     <div className="container_singup">
            <div className="imagen_singup">
            </div>
        <div className="caja_singup">
            <div className="encabezado_singup">
                Microrred 360
            </div>
            <div className="contenido_singup">
                <div className="caja_inputs">
                    <form onSubmit={registerUser}>
                        Nombre completo*:
                        <input type="text" name="nombre" id="nombre" className="inputs_singup" onChange={ev => setNombre(ev.target.value)}/><br></br><br></br>
                        Email*:
                        <input type="email" name="correo" id="correo" className="inputs_singup emailL_singup" onChange={ev => setCorreo(ev.target.value)} /><br></br><br></br>
                        Institución:
                        <input type="text" name="institucion" id="institucion" className="inputs_singup" onChange={ev => setInstitucion(ev.target.value)}/><br></br><br></br>
                        Profesión/cargo:
                        <input type="text" name="cargo" id="cargo" className="inputs_singup" onChange={ev => setCargo(ev.target.value)}/><br></br><br></br>
                        Número de telefono/celular*:
                        <input type="number" name="telefono" id="telefono" className="inputs_singup" onChange={ev => setTelefono(parseInt(ev.target.value))}/><br></br><br></br>
                        Contraseña*:<br></br>
                        <input type="password" className="inputs_singup  password_singup" onChange={ev => setPassword(ev.target.value)} /><br></br>
                        <input type="checkbox" /><span className="politicas">Al enviar el formulario, autorizo a GERS a ponerse en contacto conmigo. Acepto la politica de privacidad de GERS.*</span><br></br>
                        <span className="politicas">*Requerido</span>
                        <div className="crear_cuenta">
                        <input type="submit" value="Crear cuenta" className="btn_registrar"></input>
                    </div>
                    </form>

                </div>
            </div>
        </div>
     </div>
     <Footer2 />
    </>
    )
  }
  
  export default SingUp