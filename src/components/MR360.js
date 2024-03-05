import React, {useEffect, useState} from 'react';
import Resumen  from "./Resumen";
import Detallados  from "./Detallados";
import { useLocation } from 'react-router-dom';
import NavbarInside from './NavbarInside';
import Footer from './Footer';
import Cargando from './Cargando';
import Error500 from './Error500';
import PerfilTensiones from './perfil_tensiones';
import Graficos from './Graficos';

function MR360() {

    const [backendData, setBackendData] = useState(undefined)

    let { state } = useLocation();
    function getResults() {
        let usuario = {
            "id_user": localStorage.getItem("id_user"),
        }
        fetch(process.env.REACT_APP_URL_RESULTS, {
            method: "POST",
            mode: 'cors',
            headers: {"Content-type": "application/json;charset=UTF-8"},
            body: JSON.stringify(usuario)
        }).then(
            response => response.json()
        ).then(
            data => {
                setBackendData(data)
                console.log(data);
            }
        )
      
    }

    useEffect(() => {

        fetch(process.env.REACT_APP_URL_CALCULATOR, {
            method: "POST",
            mode: 'cors',
            headers: {"Content-type": "application/json;charset=UTF-8"},
            body: JSON.stringify(state.datos)
        }).then(
            response => response.json()
        ).then(
            data => {
                setBackendData(data)
               
            }
        )
        setTimeout(getResults, 420000);
    }, [])

    return(
        <div>
            {
                ( backendData === undefined) ? (
                    <div className="container_resultados">
                        <Cargando />
                    </div>
                ): ( backendData.status === "error") ?  <Error500 /> : (
                    <>
                    <NavbarInside />
                    <div id="container_resultados" className="container_resultados">
                    <Resumen energy_saving={backendData[0].energy_saving} economic_saving={backendData[0].economic_saving} environmental_saving={backendData[0].environmental_saving} 
                    battery_bank_power={backendData[1].battery_bank_power} inverter_type={backendData[1].inverter_type} pv_power={backendData[1].pv_power}
                    charger_inverter_power={backendData[1].charger_inverter_power}>
                    </Resumen>
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
                     exported_energy={backendData[3].exported_energy}>
                     </Detallados>
                    </div>
                    <Graficos imported_energy_profile={backendData[4].imported_energy_profile}
                      exported_energy_profile={backendData[4].exported_energy_profile}
                      solar_profile={backendData[4].solar_profile}
                      charge_battery_profile={backendData[4].charge_battery_profile}
                      discharge_battery_profile={backendData[4].discharge_battery_profile}
                      demand_profile={backendData[4].demand_profile}
                      hour_index={backendData[4].hour_index}
                      battery_energy={backendData[4].battery_energy}>
                    </Graficos>
                     <PerfilTensiones demand_profile={backendData[4].demand_profile } solar_profile={backendData[4].solar_profile } battery_profile={backendData[4].battery_profile }  hour_index={backendData[4].hour_index}  />
                    <Footer />
                    </>
                 )}
        </div>
    )
}

export default MR360