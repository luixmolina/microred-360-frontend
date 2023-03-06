import React , {useEffect, useState} from 'react';
import Map, {Marker} from 'react-map-gl';

import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl';
import './mapa.css';
import pointer from './marker_image.png';
import Form from './Form';
import './Form.css';
import { Link} from 'react-router-dom';

import {IoMdCloseCircleOutline} from "react-icons/io";



function Mapa() {

  const [viewState, setViewState] = React.useState({
    longitude: 287,
    latitude: 4,
    zoom: 4.5
  });

 
  const [hideLightbox, setHideLightbox] = useState(true);
  const [ocultarCajaUsar, setocultarCajaUsar] = useState(false);

  const [settings, setsettings] = useState({
    dragPan: false,
    dragRotate: false,
    scrollZoom: false,
    touchZoom: false,
    touchRotate: false,
    keyboard: false,

    doubleClickZoom: false
    });

  const [lngLat, setlngLat] = useState([-76.549480,3.398332]);

//   Map.on('move', function (e) {, 
//     console.log(`Current Map Center: ${Map.getCenter()}`);
//     Marker.setLngLat(Map.getCenter());
// });


function handleTouch(evt)  {


  var longitud = parseFloat(evt.lngLat.lng); 
  var latitud = parseFloat(evt.lngLat.lat); 
  
  setlngLat([longitud,latitud]);
  setHideLightbox(false)
  
  var newViewState ={
   longitude: longitud-0.00040,
   latitude: latitud,

 }
 setViewState(newViewState)

 setsettings({dragPan: false,
   dragRotate: false,
   scrollZoom: false,
   touchZoom: false,
   touchRotate: false,
   keyboard: true,
   doubleClickZoom: false,})
 }




  function handleClick(evt) {

   if(ocultarCajaUsar === true) {
   var longitud = parseFloat(evt.lngLat.lng); 
   var latitud = parseFloat(evt.lngLat.lat); 

   setlngLat([longitud,latitud]);
   setHideLightbox(false)
   
   var newViewState ={
    longitude: longitud-0.00040,
    latitude: latitud,
 
  }
  setViewState(newViewState)

  setsettings({dragPan: false,
    dragRotate: false,
    scrollZoom: false,
    touchZoom: false,
    touchRotate: false,
    keyboard: true,
    doubleClickZoom: false,})

    var datosBackend = {
      "lng": longitud,
      "ltd": latitud,
    };

    console.log(JSON.stringify(datosBackend));
   
      fetch("http://10.0.2.216:5005/calculator_map", {
          method: "POST",
          headers: {"Content-type": "application/json;charset=UTF-8"},
          body: JSON.stringify(datosBackend)
          
      }).then(
          response => response.json()
        
      ).then(
          data => {
            setRadiacion(data[0].radiation_level);
              console.log(data[0].radiation_level);
          }
      )
 

    }
  }

  function moverMapa(evt) {

    setViewState(evt.viewState)
   }
 

   const [radiacion, setRadiacion] = useState('');
   const [estrato, setEstrato] = useState('');
   const [proveedor, setProveedor] = useState('');
    var datos = {"radiation_level": radiacion, "economic_level": estrato, "energy_company": proveedor};
   if (radiacion !== "") {
    console.log(radiacion);
 }
 

function ocultarFormulario(){
  setHideLightbox(true)
  setsettings({dragPan: true,
    dragRotate: true,
    scrollZoom: true,
    touchZoom: true,
    touchRotate: true,
    keyboard: true,})
}

function ocultarAceptar(){
  setocultarCajaUsar(true)
  setsettings({dragPan: true,
    dragRotate: true,
    scrollZoom: true,
    touchZoom: true,
    touchRotate: true,
    keyboard: true,})
}

  return (
    
      <div id="mapa_container">
     
     <Map
    {...viewState}
    onMove={moverMapa}
    style={{width: '100vw', height: '100vh'}}
    mapStyle="mapbox://styles/mapbox/outdoors-v12"
    mapboxAccessToken="pk.eyJ1IjoibHVpc21vbGluYTIiLCJhIjoiY2xkdGM1ZWwyMDR6NjNwbzlucnRyaG80dSJ9.-7bIdii__JEKxuIY0hROYA" 
    onDblClick={handleClick} onTouchEnd={handleTouch} {...settings} >

    {/* <Marker longitude={-100} latitude={40} anchor="bottom" >
      <img src={pointer} alt="" />
    </Marker> */}
    <Marker latitude={lngLat[1]} longitude={lngLat[0]}  pitchAlignment='viewport'   >
    <img src={pointer} alt=""></img>
        
        </Marker>
     </Map>
     <div className={` ${hideLightbox ? "form_mapa" : ""}`}>
     <div className="  container_formulario">
    <div className="imagen_form"></div>

    <div className="caja_form">
        <div className="encabezado_form">
           <div className="titulo"> Microrred 360 </div> <div className="cerrar_boton"><IoMdCloseCircleOutline  onClick={ocultarFormulario} size='30px'></IoMdCloseCircleOutline></div>
         </div>
         <div className="contenido_form">
             <div className="texto_formulario">
             Para calcular tu microrred selecciona:
            </div>
             <br></br>
             <div className="caja_formulario">
             <form>
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
                    <option value="1">CEO</option>
                    <option value="2">CELSIA</option>
                    <option value="3">ENEL</option>
                    <option value="4">AIR-E</option>
                    <option value="5">EMCALI</option>
                    <option value="6">EPM</option>
                    <option value="7">Otro</option>
                  </select>
             </form>
            </div>
             <div className="calcula_microrred">
             <Link to="mr360" state={{datos: datos}} relative="path"><button className="btn_calcular">CALCULAR</button></Link>
        </div>

    </div>
    </div>
        </div>
     </div>

     <div className={` ${ocultarCajaUsar ? "aceptar_hide" : ""}`}>
     <div className="  container_usu">
    <div className="imagen_usu"></div>

    <div className="caja_usu">
        <div className="encabezado_form">
           <div className="titulo"> Microrred 360 </div> 
         </div>
         <div className="contenido_usu">
             <div className="texto_usu">
             1. Seleccione en el mapa interactivo dando doble click el punto geográfico para el cual se desea ejecutar el análisis.<br></br><br></br>

            2. Seleccionar el estrato socioeconómico para el cual se desea ejecutar el análisis.<br></br><br></br>

            3. Seleccionar el proveedor del servicio de suministro de energía.
            </div>
             <br></br>
             
             <div className="aceptar_usu">
             <button className="btn_aceptar" onClick={ocultarAceptar}>ACEPTAR</button>
        </div>

    </div>
    </div>
        </div>
     </div>
   
    </div>
  )
}

export default Mapa