import React, {useEffect, useRef}  from 'react';
import './PerfilTensiones.css';
import html2canvas from 'html2canvas';
import jsPDF, { jsPDFAPI } from 'jspdf';
import { Navigate } from "react-router-dom";
import { Line } from 'react-chartjs-2';
import {useState} from 'react';
import * as htmlToImage from 'html-to-image';
import html2pdf from "html2pdf.js";
import { useReactToPrint } from 'react-to-print';
import imagenNeplan from './imagenNeplan.png';




const PerfilTensiones = (props) => {

    const [goToDashboard, setGoToDashboard] = useState(false);
    const [voltage_profile, setvoltage_profile] = useState([]);
    const labels = props.hour_index;
    const tamanoMobile= useRef(false);
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


   for (let i = 0; i <= 47; i++) {
    demand_profile.push(props.demand_profile[i]);
  }

  for (let i = 0; i <= 47; i++) {
    solar_profile.push(props.solar_profile[i]);
  }

  for (let i = 0; i <= 47; i++) {
    battery_profile.push(props.battery_profile[i]);
  }

  jsonData["demand_profile"] = demand_profile;
  jsonData["solar_profile"] = solar_profile;
  jsonData["battery_profile"] = battery_profile;
  console.log(jsonData);
 

    useEffect(() => {
      console.log(window.screen.width)
      if(window.screen.width<=700){

          tamanoMobile.current = true;
          console.log("affffff")
      }


      fetch(process.env.REACT_APP_URL_CALCULATOR_NEPLAN, {
          method: "POST",
          headers: {"Content-type": "application/json;charset=UTF-8"},
          body: JSON.stringify(jsonData)
      }).then(
          response => response.json()
      ).then(
          data => {
              
              console.log(data);
              setvoltage_profile(data[0].voltage_profile);
              console.log("sfdffs")
              datosCargados.current =true;

              prueba.current = {
                labels: labels,
                datasets: [
                {
                    id: 1,
                    label: 'Voltaje',
                    data: data[0].voltage_profile,
                    borderColor: 'rgb(0,0,0)',
                }
                ]
              }
          }
      )
  }, [])

  const [chartData, setChartData] = useState(prueba.current);
  const input = document.getElementById("root");
  const handlePrint = useReactToPrint({
    content: () => input,
  });


    
    
    
    
    if (goToDashboard) {
        return <Navigate to="/Dashboard"></Navigate>;
    }
   
      function downloadPage  ()  {
       
      
      if(window.screen.width>=500){
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
    else{
           const data = document.getElementById('root');
    
     const input = document.getElementById("root");

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
            <img  className="imagen_neplan" src={imagenNeplan}  alt=''></img>
            </div>{console.log(tamanoMobile.current)}
            <div className="botones">{tamanoMobile.current ? "" :<button className="btn btn_guardar" onClick={downloadPage}>Guardar como</button>}<button className="btn btn_calcular_nuevo"  onClick={() =>{ setGoToDashboard(true)}}>Calcular nuevo diseño</button>
            </div>
        </div>
    </>
     );
}

export default PerfilTensiones;