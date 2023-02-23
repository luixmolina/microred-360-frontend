import React from 'react';
import './Cargando.css';

function Cargando() {

  return (

   <>
       <div className="  container_cargando">
    <div className="imagen_background_cargando"></div>

    <div className="caja_cargando">
        
      
            <div className="imagen_cargando">

            </div>
            <div className="texto_cargando">
             <span>MICRORRED 360 <br></br>
                CALCULANDO...
            </span>
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

export default Cargando