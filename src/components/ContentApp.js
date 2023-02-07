import React from 'react';
import './ContentApp.css';
import imagen1 from './img1.png';
import imagen2 from './img2.png';
import imagen3 from './img3.png';
import cidet_logo from './logo-CIDET.png';
import logo_gers from './logo-gers.jpg';
import logo_colombia_inteligente from './logo_colombia_inteligente.png';
import { Navigate } from "react-router-dom";
import Login from './Login';



function ContentApp() {

const [goToLogin, setGoToLogin] = React.useState(false);


if (goToLogin) {
    return <Navigate to="/Login"></Navigate>;
}

  return (
<div className="  container">
    <div id="microred" className="microred">
        <div className="flex-container">

                <div  className="microred_clase" >
                    <div className="boton_center"> <h1> Microrred 360</h1>
                        <p>Microrred 360 es una herramienta para la
                        planificación de microrredes urbanas
                        residenciales. Basada en modelos 
                        optimización determinístico y estocástico
                        la herramienta encuentra la mejor
                        solución de microrred que garantiza
                        mayor confiabilidad del servicio de
                        energía al usuario final.</p>
                        <button onClick={() =>{ setGoToLogin(true)}} className="btn">CALCULA TU MICRORRED</button>
                    </div>
                </div>
        <div>
        <img src={imagen1} className="imagenes img_shadown" width="520" height="340"alt=""></img>
    </div>
    </div>
    </div>


    <div id="como_usar" className="como_usar">
            <div>
             <img src={imagen2} className="imagenes img_shadown" alt="" width="500" height="300"></img>
            </div>
        <div className=""> <h1 >&iquest;C&oacute;mo usar?</h1>
            <p><span >Para conocer los resultados que entrega la herramienta Microrred 360, es necesario:</span></p>
            <p><span > 1. Seleccionar en el mapa interactivo el punto geogr&aacute;fico para el cual se desea ejecutar el an&aacute;lisis.</span></p>
            <p><span > 2. Seleccionar el estrato socioecon&oacute;mico para el cual se desea ejecutar el an&aacute;lisis. </span></p>
            <p><span >3. Seleccionar el proveedor del servicio de suministro de energ&iacute;a.</span></p>
            <p><span > A partir de estos datos la herramienta calcula la alternativa de microrred m&aacute;s adecuada para el usuario.</span><span ></span></p>
            <div className="boton_center">
                 <button className="btn" >CALCULA TU MICRORRED</button>
            </div>
        </div>
    </div>

    <div id="que_obtiene" className="que_obtiene">
        <div className="boton_center"><h1>¿Qué se obtiene?</h1>
            Microrred 360 está en la capacidad de
            suministrar los tamaños (potencia) y los tipos
            de activos que integran las microrredes
            diseñadas con la herramienta. Asimismo, los
            usuarios podrán obtener los costos de los
            activos y el ahorro previsto al implementar la
            alternativa de microrred, entre otros
            resultados técnicos, económicos У
            ambientales.<br></br><br></br><br></br>
            <button className="btn" >CALCULA TU MICRORRED</button>
        </div>
        <div>
         <img src={imagen3} className="imagenes img_shadown" width="600" height="400" alt="vg"></img>
         </div> 
    </div>

    <div id="patrocinadores" className="patrocinadores">
        <h1 className="texto_patrocinadores">Patrocinadores</h1>
        <div className="patrocinadores2">
            <div className="grid_patrocinadores">
            <div>
             <img src={cidet_logo} alt=""  width="280" height="70"></img>
             </div>
            <div> <img src={logo_gers} alt="" width="280" height="80"></img>
            </div>
            <div> <img src={logo_colombia_inteligente} alt="" width="300" height="100"></img>
            </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default ContentApp