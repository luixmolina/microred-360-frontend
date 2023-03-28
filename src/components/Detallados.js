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
                  <span>Fecha simulada de la interrupción del servicio de energía:</span>
                  <div className="caja_resultados">
                  Día: {props.failure_day} - Mes: {props.failure_month} - Hora: {props.failure_hour}
                  </div><br></br>
                  <span> Duración de la operación en isla:</span>
                  <div className="caja_resultados">
                      {props.failure_duration}h
                  </div><br></br>
                  <span>Consumo del usuario durante la operación en isla [kWh]:</span>
                    <div className="caja_resultados">
                        {props.failure_energy}
                    </div><br></br>
                    <span><div className="kw_texto">Energía importada desde la red eléctrica principal [kWh/año]:</div></span>
                    <div className="caja_resultados">
                    {props.imported_energy}
                    </div><br></br>
                    <span>Energía exportada a la red eléctrica principal [kWh/año]:</span>
                    <div className="caja_resultados">
                        {props.exported_energy}
                    </div><br></br>
                </div>
                <div className="caja_respuesta_detallados">
                  <span>Compra de energía a la red eléctrica principal [$/año]:</span>
                  <div className="caja_resultados">
                      ${props.energy_purchases}
                  </div><br></br>
                  <span> Venta de energía a la red eléctrica principal [$/año]:</span>
                  <div className="caja_resultados">
                      ${props.energy_sales}
                  </div><br></br>
                  <span> Costo de inversión del arreglo PV e inversor(es) [$/año]:</span>
                    <div className="caja_resultados">
                        ${props.pv_and_inverter_cost}
                    </div><br></br>
                    <span> Costo del banco de baterías [$/año]:</span>
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
                Nota: La aplicación web MR360 resuelve un problema de optimización para un año completo, a partir del cual determina los flujos de caja de 20 años asumiendo una tasa de descuento del 12% E.A.
                </span>
            </div>
      </div>
  )
}

export default Detallados