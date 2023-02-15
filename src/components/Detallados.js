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
                  <span> Fecha de falla:</span>
                  <div className="caja_resultados">
                  Dia: {props.failure_day} - Mes: {props.failure_month} - Hora:{props.failure_hour}
                  </div><br></br>
                  <span> Duracion de la falla:</span>
                  <div className="caja_resultados">
                      {props.failure_duration}h
                  </div><br></br>
                  <span> Energía durante horas de falla [kWh]:</span>
                    <div className="caja_resultados">
                        {props.failure_energy}
                    </div><br></br>
                    <span> Energía anual importada [kWh/año]:</span>
                    <div className="caja_resultados">
                    {props.imported_energy}
                    </div><br></br>
                    <span> Energia anual inyectada [kWh]:</span>
                    <div className="caja_resultados">
                        {props.exported_energy} 
                    </div><br></br>
                </div>
                <div class="caja_respuesta_detallados">
                  <span> Compras de energía al año [$/año]:</span>
                  <div className="caja_resultados">
                      ${props.energy_purchases}
                  </div><br></br>
                  <span> Ventas de energia al año [$/año]:</span>
                  <div className="caja_resultados">
                      ${props.energy_sales}
                  </div><br></br>
                  <span> Costo de inversion del sistema PV e inversor(es) [$/año]:</span>
                    <div className="caja_resultados">
                        ${props.pv_and_inverter_cost}
                    </div><br></br>
                    <span> Costo el banco de baterias [$/año]:</span>
                    <div className="caja_resultados">
                        ${props.battery_bank_cost}
                    </div><br></br>
                    <span> Costo de inversión [$/año]:</span>
                    <div className="caja_resultados">
                        {props.investment_cost}
                    </div><br></br>
                </div>
            </div>
      </div>
  )
}

export default Detallados