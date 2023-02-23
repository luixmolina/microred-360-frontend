import React from 'react';
import './Form.css';
import { Bar } from 'react-chartjs-2';
import {Chart as ChartJS} from 'chart.js/auto';
import {useState} from 'react';
import './graficos.css';



function Graficos(props) {

const labels = [];

for (let i = 0; i < 24; i++) {
    labels.push(i);
  }


  const options = {
    plugins: {
      title: {
        display: true,
        text: 'Power [kW]',
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
        label: 'imported energy profile',
        data: props.imported_energy_profile,
        backgroundColor: 'rgb(255, 0, 0)',
        stack: 'Stack 0',
      },  {
        id: 2,
        label: 'exported energy profile',
        data: props.exported_energy_profile,
        backgroundColor: 'rgb(204, 0, 153)',
        stack: 'Stack 0',
      },  {
        id: 3,
        label: 'charge battery profile',
        data: props.charge_battery_profile,
        backgroundColor: 'rgb(102, 153, 255)',
        stack: 'Stack 0',
      } ,  {
        id: 4,
        label: 'solar profile',
        data: props.solar_profile,
        backgroundColor: 'rgb(255, 255, 0)',
        stack: 'Stack 0',
      },  {
        id: 5,
        label: 'discharge battery profile',
        data: props.discharge_battery_profile,
        backgroundColor: 'rgb(102, 255, 102)',
        stack: 'Stack 0',
      }
    ]
    });

    const [chartData2, setChartData2] = useState({
        labels: labels,
    datasets: [
      {
        id: 1,
        label: 'imported energy profile',
        data: props.demand_profile,
        backgroundColor: 'rgb(0,0,255,255)',

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
    <div className="container_graficos">
   <Bar options={options} data={chartData}></Bar>
   </div>
   <div className="container_graficos2">
   <Bar options={options} data={chartData2}></Bar>
   </div>
   </div>
    </>


  )
}

export default Graficos