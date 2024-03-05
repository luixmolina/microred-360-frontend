import React from 'react';
import './CargandoD.css';


function CargandoD() {

  return (
   <>
       <div className="  container_cargando">
    <div className="imagen_background_cargando"></div>
    <div className="caja_cargando">
            <div className="imagen_cargando">
            </div>
            <div className="texto_cargando">
             <span className='titulo_cargando'>MICRORRED 360 CALCULANDO</span>
                <br></br>
              
            </div>
            <div className="progress-bar-container">
    <div className="progress-bar stripes">
      <span className="progress-bar-inner"></span>
    </div>
  </div>
    </div>
</div>
   </>
  )
}

export default CargandoD