import React from 'react';
import './Form.css';
import { Bar } from 'react-chartjs-2';
import {Chart as ChartJS} from 'chart.js/auto';
import {useState} from 'react';
import './graficos.css';



function Graficos(props) {

const labels = [];

for (let i = 0; i < 24; i++) {
    labels.push(i+"h");
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




  const options2 = {
    plugins: {
      title: {
        display: true,
        text: 'Demanda [kW]',
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

    const [chartData, setChartData] = useState({
        labels: labels,
    datasets: [
      {
        id: 1,
        label: 'Energia importada',
        data: props.imported_energy_profile,
        backgroundColor: 'rgb(255, 0, 0)',
        stack: 'Stack 1',
        barThickness: 10,
      },  {
        id: 2,
        label: 'Energia exportada',
        data: props.exported_energy_profile,
        backgroundColor: 'rgb(204, 0, 153)',
        stack: 'Stack 2',
        barThickness: 10,
      },   {
        id: 3,
        label: 'Generacion PV',
        data: props.solar_profile,
        backgroundColor: 'rgb(255, 255, 0)',
        stack: 'Stack 4',
        barThickness: 10,
      },  {
        id: 4,
        label: 'Generacion BAT',
        data: props.discharge_battery_profile,
        backgroundColor: 'rgb(102, 255, 102)',
        stack: 'Stack 5',
        barThickness: 10,
      }
    ]
    });

    const [chartData2, setChartData2] = useState({
        labels: labels,
    datasets: [
      {
        id: 1,
        label: 'Demanda de energia',
        data: props.demand_profile,
        backgroundColor: 'rgb(0,0,255,255)',
        barThickness: 10,
      }
    ]
    });

    console.log(props.battery_energy);
  return (

    <>
    <div className="tarjeta_graficos">
    <div className="encabezado_graficos" >
            <h1>
               Operación prevista de la microrred
            </h1>
        </div>
    <div className="container_graficos" >
   <Bar options={options} data={chartData}></Bar>
   <div className="nota2">
   Nota: A modo ilustrativo en el anterior grafico se presenta la operación prevista de la microred diseñada para el primer dia del horizonte de planificación.
   </div>
   </div>
   <div className="container_graficos2">
   <Bar options={options2} data={chartData2}></Bar>
   </div>
   </div>
    </>


  )
}

export default Graficos