import React, {useEffect, useState} from 'react';
import Resumen  from "./Resumen";
import Detallados  from "./Detallados";
function MR360() {

    const [backendData, setBackendData] = useState(undefined)



    // useEffect(() => {
    //     fetch("http://localhost:5000/obtenerCalculoMr360").then(response => {
    //         if (!response.ok) {
    //           throw new Error(response.statusText)
    //         }
    //         return response.json()}).catch(err=>{
    //             console.log(err)
    //         }
    //     ).then(
    //         data => {
    //             setBackendData(data)
    //             console.log(data);
    //         }
    //     )
    // }, [])


    useEffect(() => {
        fetch("http://localhost:5000/obtenerCalculoMr360").then(
            response => response.json()
        ).then(
            data => {
                setBackendData(data)
                console.log(data);
            }
        )
    }, [])
    return(
        <div>
            {
                ( backendData === undefined) ? (
                    <div className="  container_resultados">
                <p>Cargando...</p>
                </div>
                ): (
                    
                    <div className="  container_resultados">
                    <Resumen energy_saving={backendData[0].energy_saving} economic_saving={backendData[0].economic_saving} environmental_saving={backendData[0].environmental_saving} 
                    battery_bank_power={backendData[1].battery_bank_power} inverter_type={backendData[1].inverter_type} pv_power={backendData[1].pv_power}
                    charger_inverter_power={backendData[1].charger_inverter_power}></Resumen>
                    <Detallados failure_day={backendData[2].failure_day}
                     failure_month={backendData[2].failure_month}
                     failure_hour={backendData[2].failure_hour}
                     failure_duration={backendData[2].failure_duration}
                     failure_energy={backendData[2].failure_energy}
                     imported_energy={backendData[3].imported_energy}
                     energy_purchases={backendData[3].energy_purchases}
                     energy_sales={backendData[3].energy_sales}
                     pv_and_inverter_cost={backendData[3].pv_and_inverter_cost}
                     battery_bank_cost={backendData[3].battery_bank_cost}
                     investment_cost={backendData[3].investment_cost}
                     exported_energy={backendData[3].exported_energy}></Detallados>
                    </div>
                 )}

        </div>

    )
}

export default MR360