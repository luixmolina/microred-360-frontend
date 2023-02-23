import React from 'react';
import './Form.css';
import NavbarInside from './NavbarInside';
import Footer from './Footer';
import { Link} from 'react-router-dom';
import {useState} from 'react';
import {IoMdCloseCircleOutline} from "react-icons/io";



function Form() {

  const [radiacion, setRadiacion] = useState('');
  const [estrato, setEstrato] = useState('');
  const [proveedor, setProveedor] = useState('');
   var datos = {"radiation_level": radiacion, "economic_level": estrato, "energy_company": proveedor};
  if (radiacion !== "") {
   console.log(radiacion);
}
const [hideLightbox, setHideLightbox] = useState(true);
  return (

    <>
    {/* <NavbarInside /> */}
        <div className="  container_formulario">
    <div className="imagen_form"></div>

    <div className="caja_form">
        <div className="encabezado_form">
           <div className="titulo"> Microrred 360 </div> <div className="cerrar_boton"><IoMdCloseCircleOutline  onClick={() => setHideLightbox(false)} size='30px'></IoMdCloseCircleOutline></div>
         </div>
         <div className="contenido_form">
             <div className="texto_formulario">
             Para calcular tu microrred selecciona:
            </div>
             <br></br>
             <div className="caja_formulario">
             <form><span >Nivel de radiación solar:</span><br></br>
                <select name="nivel_radiacion" id="nivel_radiacion" onChange={ev => setRadiacion(parseInt(ev.target.value))}>
                <option value=""></option>
                    <option value="1">Nivel de radiación solar [1.5 kWh - 2.0 kWh]</option>
                    <option value="2">Nivel de radiación solar [2.0 kWh - 2.5 kWh]</option>
                    <option value="3">Nivel de radiación solar [2.5 kWh - 3.0 kWh]</option>
                    <option value="4">Nivel de radiación solar [3.0 kWh - 3.5 kWh]</option>
                    <option value="5">Nivel de radiación solar [3.5 kWh - 4.0 kWh]</option>
                    <option value="6">Nivel de radiación solar [4.0 kWh - 4.5 kWh]</option>
                    <option value="7">Nivel de radiación solar [4.5 kWh - 5.0 kWh]</option>
                    <option value="8">Nivel de radiación solar [5.0 kWh - 5.5 kWh]</option>
                    <option value="9">Nivel de radiación solar [5.5 kWh - 6.0 kWh]</option>
            </select><br></br><br></br>
                 <span>Estrato socioeconómico:</span><br></br>
                 <select name="estrato" id="estrato" onChange={ev => setEstrato(parseInt(ev.target.value))}>
                 <option value=""></option>
                    <option value="1">Estrato 1</option>
                    <option value="2">Estrato 2</option>
                    <option value="3">Estrato 3</option>
                    <option value="4">Estrato 4</option>
                    <option value="5">Estrato 5</option>
                    <option value="6">Estrato 6</option>
                  </select> <br></br><br></br>
                  <span>Proveedor del servicio de energia:</span><br></br>
                 <select name="proveedor" id="proveedor" onChange={ev => setProveedor(parseInt(ev.target.value))}>
                    <option value="1"></option><option value="1">CELSIA</option>
                    <option value="2">ENEL</option>
                    <option value="3">AIR-E</option>
                    <option value="4">EMCALI</option>
                    <option value="5">EPM</option>
                    <option value="6">Otro</option>
                  </select>
             </form>
            </div>
             <div className="calcula_microrred">
             <Link to="mr360" state={{datos: datos}} relative="path"><button className="btn_calcular">CALCULAR</button></Link>
        </div>

    </div>
    </div>
        </div>
    {/* <Footer /> */}
    </>


  )
}

export default Form