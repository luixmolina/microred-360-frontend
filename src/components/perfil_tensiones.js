import React, { Component }  from 'react';
import './PerfilTensiones.css';
import html2canvas from 'html2canvas';
import jsPDF, { jsPDFAPI } from 'jspdf';
import { Navigate } from "react-router-dom";
import { Line } from 'react-chartjs-2';
import {useState} from 'react';

const PerfilTensiones = (props) => {

    const [goToDashboard, setGoToDashboard] = useState(false);
    const labels = [];

    for (let i = 0; i < 24; i++) {
        labels.push(i+"h");
      }
    
    const [chartData, setChartData] = useState({
        labels: labels,
        datasets: [
        {
            id: 1,
            label: 'Voltaje',
            data: props.voltage_profile,
            borderColor: 'rgb(0,0,255,255)',
        }
        ]
    });
    
    if (goToDashboard) {
        return <Navigate to="/Dashboard"></Navigate>;
    }
   
    const downloadPage =() => {
        const input = document.getElementById("root");
        html2canvas(input).then((canvas) => {
            const imgData = canvas.toDataURL("image/png");
            const pdf = new jsPDF("p", "pt", "a4")
            const pdf3 = new jsPDF("")
            pdf.addImage(imgData, "JPEG", 5, 5, 585, 850)
            pdf.save("mr360")
        })
    }

    const options = {
        plugins: {
          title: {
            display: true,
            text: ' Potencia [kW]',
            position: 'left',
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
            <Line options={options} data={chartData}></Line> 
            </div>
            <div className="botones"><button className="btn btn_guardar" onClick={downloadPage}>Guardar como</button><button className="btn btn_calcular_nuevo"  onClick={() =>{ setGoToDashboard(true)}}>Calcular nuevo diseño</button>
            </div>
        </div>
    </>
     );
}

export default PerfilTensiones;