import React, { Component }  from 'react';
import './Resumen.css';
import inversor_cargador from './inversor_cargador.png';
import hibrido from './hibrido.png';
import InterpretacionGraficos from './InterpretacionGraficos.pdf';



const Resumen = (props) => {
      var imagen;
      if(props.inverter_type === "Ongrid e inversor cargador"){
          imagen = inversor_cargador;
      } else{
          imagen = hibrido;
      }

      return (
          <>
            <div className="tarjeta_principal">
            <div className="tarjeta_imagen">
            <div className="encabezado_imagen">
            <h1>Tu diseño de microrred</h1>
            </div>
            <img src={imagen} className="imagenes img_shadown" width="520" height="620" alt="" /> 
            <div className="nota2">
            <a href={InterpretacionGraficos} rel="noreferrer" target="_blank" className="interpretacion_graficos">Click aquí para la intepretación de los resultados.</a>
               </div>
            </div>
            <div className="tarjeta_resultados">
            <div className="tarjeta_resumen">
            <div className="encabezado">
              <h1> Resumen general</h1>
            </div>
            <div>
              <div className="caja_datos">
                <div className="caja_respuesta"> 
                    <span>Energía generada por la microrred [kWh/año]:</span>
                    <br></br>
                    <div className="caja_resultados">
                        <span> {props.energy_saving} </span>
                    </div><br></br>
                    <span>Ahorro económico [$/año]:</span>
                    <br></br>
                    <div className="caja_resultados">
                        <span> {props.economic_saving} </span>
                    </div> <br></br>
                 <span>Ahorro ambiental [kgCO2/año]:</span>
                    <br></br>
                    <div className="caja_resultados">
                        <span> {props.environmental_saving} </span>
                    </div>
                 </div>
              </div>
            </div>
          </div>
          <div className="tarjeta_datos">
            <div className="encabezado">
              <h1>Datos técnicos</h1>
            </div>
            <div className="caja_datos">
              <div  className="caja_respuesta">
                <span>Capacidad del arreglo PV [kW]:</span>
                <br></br>
                <div className="caja_resultados">
                    <span>{props.pv_power} </span>
                </div> <br></br>
                <span>Tecnología del inversor:</span>
                <br></br>
                <div className="caja_resultados">
                    <span>{props.inverter_type}</span>
                </div> <br></br>
                <span>Capacidad del inversor cargador [kW]:</span>
                <br></br>
                <div className="caja_resultados">
                    <span>{props.charger_inverter_power}</span>
                </div> <br></br>
                <span>Capacidad del banco de baterías [kWh]:</span>
                <br></br>
                <div className="caja_resultados">
                    <span>{props.battery_bank_power}</span>
                </div> <br></br>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
    );
}

export default Resumen;