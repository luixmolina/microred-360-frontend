import React, {useEffect, useState} from 'react';
import Resumen  from "./Resumen";
import Detallados  from "./Detallados";
import { useLocation } from 'react-router-dom';
import NavbarInside from './NavbarInside';
import Footer from './Footer';
import Cargando from './Cargando';
import PerfilTensiones from './perfil_tensiones';
import Graficos from './Graficos';

function MR360() {

    const [backendData, setBackendData] = useState(undefined)

    let { state } = useLocation();
    console.log(state.datos);
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
        fetch("http://localhost:5000/obtenerCalculoMr360", {
            method: "POST",
            headers: {"Content-type": "application/json;charset=UTF-8"},
            body: JSON.stringify(state.datos)
        }).then(
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
                    <Cargando />
                </div>
                ): (
                    <>
                    <NavbarInside />
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
                    
                    <Graficos imported_energy_profile={backendData[4].imported_energy_profile}
                      exported_energy_profile={backendData[4].exported_energy_profile}
                      solar_profile={backendData[4].solar_profile}
                      charge_battery_profile={backendData[4].charge_battery_profile}
                      discharge_battery_profile={backendData[4].discharge_battery_profile}
                      demand_profile={backendData[4].demand_profile}></Graficos>
                    <PerfilTensiones />
                    <Footer />
                    </>
                 )}

        </div>

    )
}

export default MR360