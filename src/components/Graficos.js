import React from 'react';
import './Form.css';
import { Bar } from 'react-chartjs-2';
import {Chart as ChartJS} from 'chart.js/auto';
import {useState} from 'react';
import './graficos.css';


function Graficos(props) {

    const labels = props.hour_index;
    // configuracion del primer grafico
    const options = {
    plugins: {
      title: {
        display: true,
        text: ' Potencia [kW]',
        position: 'left',
      },
      subtitle: {
        display: true,
        text: 'SOC [%]',
        color: '#000000',
        position: 'right',
       
      },
    },
    responsive: true,
    interaction: {
      mode: 'index',
      intersect: false,
    },
    scales: {
      x:
      {
        stacked: true,
        ticks: {
          maxRotation: 0,
        minRotation: 0,
      
        },
        },
      A: {
        type: 'linear',
        position: 'right',
        ticks: { beginAtZero: true},
        // Hide grid lines, otherwise you have separate grid lines for the 2 y axes
        grid: { display: false }
      },
      B: {

        position: 'left',
        ticks: { beginAtZero: true },
        grid: { display: true }
      },
      
    },
    };

    // configuracion del segundo grafico
    const options2 = {
      
    plugins: {
      title: {
        display: true,
        text: 'Demanda [kW]',
        position: 'left',
      },
      subtitle: {
        display: true,
        text: 'Demanda [kW]',
        position: 'right',
        color: "white",
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
        position: 'left',
        ticks: { beginAtZero: true },
        grid: { display: true }
      },
      A: {
        position: 'right',
        ticks: { beginAtZero: true,
          min: 0,
          max: 0,
          color: "white",
        },
        grid: { display: true },
    

      },
    },
    
    };

    // data set del primer grafico
    const [chartData, setChartData] = useState({
        labels: labels,
    datasets: [
      {
        type: 'line' ,
        label: 'SOC',
        yAxisID: 'A',
        borderColor: 'rgb(30,144,255,255)',
        borderWidth: 2,
        fill: false,
        data: props.battery_energy,
        
      },
      {
        id: 1,
        label: 'Carga BAT',
        yAxisID: 'B',
        data: props.charge_battery_profile,
        backgroundColor: 'rgb(65,105,225,255)',
        barThickness: 12,

        borderWidth: 1,
     
      },{
        id: 4,
        label: 'Generación BAT',
        yAxisID: 'B',
        data: props.discharge_battery_profile,
        backgroundColor: 'rgb(54,204,54)',
        barThickness: 12,
       

        borderWidth: 1,
      },

      {
        id: 6,
        label: 'Energía importada',
        yAxisID: 'B',
        data: props.imported_energy_profile,
        backgroundColor: 'rgb(255, 0, 0)',
        barThickness: 12,
        borderWidth: 1,
      }, 
      
      {
        id: 2,
        label: 'Energía exportada',
        yAxisID: 'B',
        data: props.exported_energy_profile,
        backgroundColor: 'rgb(251,4,251)',
        barThickness: 12,
        borderWidth: 1,
      },  
      {
        id: 3,
        label: 'Generación PV',
        yAxisID: 'B',
        data: props.solar_profile,
        backgroundColor: 'rgb(255, 165, 0)',
        barThickness: 12,
       
        borderWidth: 1,
      }
      
    ]
    });

    // data set del segundo grafico
    const [chartData2, setChartData2] = useState({
        labels: labels,
    datasets: [
      {
        id: 1,
        label: 'Demanda de energía',
        data: props.demand_profile,
        backgroundColor: 'rgb(0,0,255,255)',
        barThickness: 12,
      }
    ]
    });

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
            <div className="horaFalla">Hora de falla 1</div>
            <div className="horaFalla2">Hora de falla 2</div>
            <div className="notaHora">Hora del día</div>
        </div>
        <div className="nota4">Nota: Para la interpretación del anterior grafico, tenga en cuenta que las barras se sobreponen.</div>
      <div className="container_graficos2">
          <Bar options={options2} data={chartData2}  ></Bar>
          <div className="notaHora2">Hora del día</div>
        </div>
      </div>
    </>
  )
}

export default Graficos