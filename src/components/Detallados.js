import React from 'react';
import './Footer.css';

function Detallados(props) {

  return (

    <div className="tarjeta_datos_detallados">
        <div className="encabezado_detallados" >
            <h1>
                Datos técnicos detallados
            </h1>
        </div>
            <div className="contenedor_detallados" >
                <div className="caja_respuesta_detallados_1">
                  <span>Fecha simulada de la interrupción del servicio de energia:</span>
                  <div className="caja_resultados">
                  Dia: {props.failure_day} - Mes: {props.failure_month} - Hora: {props.failure_hour}
                  </div><br></br>
                  <span> Duracion de la falla:</span>
                  <div className="caja_resultados">
                      {props.failure_duration}h
                  </div><br></br>
                  <span>Consumo del usuario durante las horas de falla [kWh]:</span>
                    <div className="caja_resultados">
                        {props.failure_energy}
                    </div><br></br>
                    <span><div className="kw_texto">Energía importada desde la red electrica principal [kWh/año]:</div></span>
                    <div className="caja_resultados">
                    {props.imported_energy}
                    </div><br></br>
                    <span>Energía exportada a la red eléctrica principal [kWh]:</span>
                    <div className="caja_resultados">
                        {props.exported_energy}
                    </div><br></br>
                </div>
                <div className="caja_respuesta_detallados">
                  <span>Compra de energía a la red eléctrica principal [$/año]:</span>
                  <div className="caja_resultados">
                      ${props.energy_purchases}
                  </div><br></br>
                  <span> Ventas de energía a la red eléctrica principal [$/año]:</span>
                  <div className="caja_resultados">
                      ${props.energy_sales}
                  </div><br></br>
                  <span> Costo de inversion del arreglo PV e inversor(es) [$/año]:</span>
                    <div className="caja_resultados">
                        ${props.pv_and_inverter_cost}
                    </div><br></br>
                    <span> Costo del banco de baterias [$/año]:</span>
                    <div className="caja_resultados">
                        ${props.battery_bank_cost}
                    </div><br></br>
                    <span> Costo de inversión [$/año]:</span>
                    <div className="caja_resultados">
                        ${props.investment_cost}
                    </div><br></br>
                </div>
            </div>
            <div>
                <span className='nota'>
                Nota: La aplicacion web micored360 resuelve un problema de optimizacion para un año completo, a partir del cual determina los flujos de caja de 20 años asumiendo una tasa de descuento del 12% E.A.
                </span>
            </div>
      </div>
  )
}

export default Detallados