import React , {useState} from 'react';
import './singup.css';
import NavbarOutside from './NavbarOutside';
import Footer2 from './Footer2';
import Swal from 'sweetalert2'
import PoliticasGers from './PoliticasDePrivacidad.pdf';

function SingUp() {
   
     const [nombre, setNombre] = useState('');
     const [correo, setCorreo] = useState('');
     const [institucion, setInstitucion] = useState('');
     const [cargo, setCargo] = useState('');
     const [telefono, setTelefono] = useState('');
     const [password, setPassword] = useState('');
     const [politicas, setPoliticas] = useState(false);
     const [error, setError] = useState(false);

   
     async function registerUser(event) {

        event.preventDefault();

        
        if(nombre.length === 0 || correo.length === 0 || telefono.length === 0 || password.length === 0 || politicas === false){
            setError(true);
        } else{
            setError(false);
        }

        if(nombre && correo && telefono && password && politicas === true){
            
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
                  politicas,
                }),
        })

        const data = await responseRegister.json()
        if(data.status === "success"){

                Swal.fire({
                    title:'Usuario creado exitosamente',
                    confirmButtonText: "Ok",
                 }).then((result) => {
                    if(result.isConfirmed){
                       window.location.href = '/Login';
                    }
                });
        
        } else{
           
        }
        }
    }

    return (
      
        <>
        <NavbarOutside/>
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
                        <input type="text" name="nombre" id="nombre" className="inputs_singup" value={nombre} onChange={ev => setNombre(ev.target.value)}/>
                        {error&&nombre.length<=0?
                            <label className="error_formulario">El nombre es requerido</label>:""}
                        <br></br><br></br>
                        Email*:
                        <input type="email" name="correo" id="correo" className="inputs_singup emailL_singup" value={correo} onChange={ev => setCorreo(ev.target.value)} />
                        {error&&correo.length<=0&&(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(correo))?
                            <label className="error_formulario" >El correo es requerido</label>:""}
                        <br></br><br></br>
                        Entidad:
                        <input type="text" name="institucion" id="institucion" className="inputs_singup" value={institucion} onChange={ev => setInstitucion(ev.target.value)}/><br></br><br></br>
                        Cargo:
                        <input type="text" name="cargo" id="cargo" className="inputs_singup" value={cargo} onChange={ev => setCargo(ev.target.value)}/><br></br><br></br>
                        Número de contacto*:
                        <input type="number" name="telefono" id="telefono" className="inputs_singup" value={telefono} onChange={ev => setTelefono(parseInt(ev.target.value))}/>
                        {error&&telefono.length<=0?
                            <label className="error_formulario" >El telefono es requerido</label>:""}
                        <br></br><br></br>
                        Contraseña*:<br></br>
                        <input type="password" className="inputs_singup  password_singup" value={password} onChange={ev => setPassword(ev.target.value)} />
                        {error && password.length<=0?
                            <label className="error_formulario" >La contraseña es requerida</label>:""}
                        <br></br>
                        <input type="checkbox"  onChange={ev => setPoliticas(ev.target.checked)}/><span className="politicas">Al enviar el formulario, autorizo a GERS a ponerse en contacto conmigo. <a href={PoliticasGers} rel="noreferrer" target="_blank" className="subrayado">Y acepto la politica de privacidad de GERS.*</a></span><br></br>
                        {error && politicas===false?
                            <label className="error_formulario" >Debe de aceptar las politicas de privacidad de GERS<br></br></label>:""}
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