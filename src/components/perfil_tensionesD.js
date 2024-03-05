import React, {useEffect, useRef}  from 'react';
import './PerfilTensiones.css';
import html2canvas from 'html2canvas';
import jsPDF, { jsPDFAPI } from 'jspdf';
import { Navigate } from "react-router-dom";
import { Line } from 'react-chartjs-2';
import {useState} from 'react';
import imagenNeplan from './imagenNeplan.png';
import useWindowsSize from './windowsSize';
import { Link } from 'react-router-dom';

const PerfilTensionesD = (props) => {

    const [goToDashboard, setGoToDashboard] = useState(false);
    const [voltage_profile, setvoltage_profile] = useState([]);
    const labels = props.hour_index;
    
    const [tamanoMobile, settamanoMobile] = useState(false);
    var tamanoMobile2= false;
    const prueba = useRef({
      labels: labels,
      datasets: [
      {
          id: 1,
          label: 'Voltaje',
          data: [0],
          borderColor: 'rgb(0,0,255,255)',
      }
      ]
    });

    const datosCargados = useRef(false);

    var jsonData = {};
    var demand_profile = [];
    var solar_profile = [];
    var battery_profile = [];


//     for (let i = 0; i <= 47; i++) {
//     demand_profile.push(props.demand_profile[i]);
//     }

//     for (let i = 0; i <= 47; i++) {
//     solar_profile.push(props.solar_profile[i]);
//     }

//     for (let i = 0; i <= 47; i++) {
//     battery_profile.push(props.battery_profile[i]);
//     }

//   jsonData["demand_profile"] = demand_profile;
//   jsonData["solar_profile"] = solar_profile;
//   jsonData["battery_profile"] = battery_profile;
//   jsonData["id_user"] = localStorage.getItem("id_user");
 
  
  const size = useWindowsSize();
//   function getResultsNeplan() {
//     let usuario = {
//         "id_user": localStorage.getItem("id_user"),
//     }
//     fetch(process.env.REACT_APP_URL_RESULTS_NEPLAN, {
//         method: "POST",
//         mode: 'cors',
//         headers: {"Content-type": "application/json;charset=UTF-8"},
//         body: JSON.stringify(usuario)
//     }).then(
//         response => response.json()
//     ).then(
//         data => {
          
//         }
//     )
  
// }
  useEffect(() => {

    if(size.width < 763){
        settamanoMobile(true);
    }

    
  }, [size.width])

  useEffect(() => {
    var resultadosNeplan =
         [
          {
            "voltage_profile": [
              1.0235794519263992,
              1.0226470625599917,
              1.0333543918961174,
              1.026642964300377,
              1.0005844718019534,
              1.015831081388135,
              0.9998076412850432,
              0.9998076412850432,
              0.99952764844315,
              0.9987459237823247,
              0.9990511198940928,
              0.9993525333664606,
              0.9992614371205799,
              0.9991492844648567,
              0.9991598003761911,
              0.9995941680518975,
              0.9998076412850693,
              0.9998076412850693,
              0.9998076412850693,
              0.9998076412850693,
              0.9998076412850693,
              1.0009064498855647,
              1.0065514528172748,
              1.0181676760244172,
              0.9967394078958348,
              0.9998041428250247,
              1.0211918848776982,
              1.024593940812311,
              1.024696505150391,
              1.0221941348423067,
              0.9964073424113681,
              0.9925394800410844,
              0.9993980721363912,
              0.9991387682129326,
              0.9960032229126364,
              0.9994366000864419,
              0.9890193607124496,
              0.9770030008383025,
              0.9882311358597189,
              0.9988590771195269,
              0.9988590771195269,
              0.9988590771195269,
              0.9988590771195269,
              0.9961078033837366,
              0.9988590771195269,
              1.0011825699277233,
              1.008637795250359,
              1.0182857687026956
            ]
          }
        ];

              setvoltage_profile(resultadosNeplan[0].voltage_profile);

              datosCargados.current =true;

              prueba.current = {
                labels: labels,
                datasets: [
                {
                    id: 1,
                    label: 'Voltaje',
                    data: resultadosNeplan[0].voltage_profile,
                    borderColor: 'rgb(0,0,0)',
                }
                ]
              }
        
    

    
  }, [])

  const [chartData, setChartData] = useState(prueba.current);
  const input = document.getElementById("root");



    if (goToDashboard) {
        return <Navigate to="/d/Dashboard"></Navigate>;
    }

    function downloadPage  ()  {

      if(window.screen.width>=763){
        // do sth for desktop browsers

        const input = document.getElementById("root");
        html2canvas(input).then((canvas) => {
            const imgData = canvas.toDataURL("image/png");
            const pdf = new jsPDF("p", "pt", "a4");
            // pdf.addPage();
            const pdf3 = new jsPDF("")
            pdf.addImage(imgData, "JPEG", 10, 10, 585, 830, 'someAlias', 'FAST')
            pdf.save("mr360")

        })
      }
    }

    const options = {
        plugins: {
          title: {
            display: true,
            text: ' Voltaje [p.u]',
            position: 'left',
          },
          subtitle: {
            display: true,
            text: 'Hora del día',
            position: 'bottom',
            color: "black",
          },
        },
        responsive: true,
        interaction: {
          mode: 'index',
          intersect: false,
        },
        scales: {
          x: {
            stacked: true,
            ticks: {
              maxRotation: 0,
              minRotation: 0,
    
            },
          },
          y: {
            stacked: true,
          },
        },
    };

    return (
    <>
        <div className="tarjeta_neplan">
             <div className="encabezado_neplan">
                <h1>
                Perfil de tensiones de la microrred en el PCC con el SDL
                </h1>
            </div>
            <div className="container_graficos3">
            <div className='graficos_neplan'>
            { datosCargados.current ?  <Line options={options} data={prueba.current}></Line> :
             <>
             <div className="calculandoNeplan">Calculando...</div>
             <div className="calculandoTiempo">(Tiempo estimado: 4 minutos)</div>
             <div className="progress-bar-container2">
              <div className="progress-bar2 stripes2">
              <span className="progress-bar-inner2"></span>
            </div>
            </div>

            </> }
            </div>
            <Link to="https://www.neplan.ch/" target="_blank" rel="noreferrer">
            <img  className="imagen_neplan" src={imagenNeplan}  alt=''></img>
            </Link>
            </div>
                <div className="aviso">
                        <p><i>Para GERS es importante contribuir al empoderamiento del usuario final de la energía. Por
esta razón te invitamos a que te pongas en contacto con nosotros, para asesorarte en la
implementación de la microrred para tu hogar.
Contacto GERS: gers@gers.com.</i></p></div>
            <div className="botones">{tamanoMobile ? "" :<button className="btn btn_guardar" onClick={downloadPage}>Guardar como</button>}<button className="btn btn_calcular_nuevo"  onClick={() =>{ setGoToDashboard(true)}}>Calcular nuevo diseño</button>
            </div>
        </div>
    </>
  );
}

export default PerfilTensionesD;