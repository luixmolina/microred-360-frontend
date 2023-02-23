import React from 'react';
import './Dashboard.css';
import NavbarInside from './NavbarInside';
import Footer2 from './Footer2';

import { Navigate } from "react-router-dom";


function Dashboard() {

    const [goToForm, setGoToForm] = React.useState(false);


if (goToForm) {
    return <Navigate to="/Mapa"></Navigate>;
}

  return (
    <>
    <NavbarInside/>
    <div className="  container_dashboard">
        <div className="imagen_dashboard"></div>

        <div className="caja_bienvenida">
            <div className="encabezado_bienvenida">
            ¡Bienvenido!
            </div>
            <div className="contenido_bienvenida">
                <div className="caja_texto">

                <span>Microrred 360 está en la capacidad de suministrar
                    los tamaños y los tipos de activos que integran las microrredes diseñadas con la aplicación. Asimismo,
                    el usuario podrá conocer los beneficios técnicos,
                    economicos y ambientales que podría obtener tras implementar la solución de Microrred 360.
                </span><br></br><br></br>
                <span>Para continuar, por favor seleccione un punto sobre el mapa.</span>
                <div className="calcula_microrred">
                    <button className="btn_dashboard"  onClick={() =>{ setGoToForm(true)}}>CALCULA TU MICRORRED</button>
                </div>
                </div>
            </div>
            </div>
        </div>
        <Footer2 />
        </>
  );
}

export default Dashboard