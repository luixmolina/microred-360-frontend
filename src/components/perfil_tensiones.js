import React, { Component }  from 'react';
import './PerfilTensiones.css';
import imagen_neplan from './imagen_neplan.png';
import html2canvas from 'html2canvas';
import jsPDF, { jsPDFAPI } from 'jspdf';



const PerfilTensiones = () => {


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
    return (
    <>
        <div className="tarjeta_neplan">
       
             <div className="encabezado_neplan">
                <h1>
                Perfil de tensiones de la microrred en el PCC con el SDL
                </h1>
            </div>
            <div className="imagen_neplan">
               
            </div>
            <div className="botones"><button className="btn btn_guardar" onClick={downloadPage}>Guardar como</button><button className="btn btn_calcular">Calcular nuevo diseño</button>
            </div>
        </div>
    </>
     );
}

export default PerfilTensiones;