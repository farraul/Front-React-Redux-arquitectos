import eChart from "./configs/eChart";
import ReactApexChart from "react-apexcharts";
import React, { useState, useEffect } from 'react';


function EChart() {



  useEffect(() => {
        ajustar(); 
     
    })

    const ajustar = () => {
        let panelIzquierda = document.getElementById("get-width").clientWidth;
        console.log(panelIzquierda);
        

      
      }


  return (
    <>
      <div id="get-width" className='super-admin-panel-comunity-in-spain'>
        <div id="chart">
          <h2>Usuarios por comunidades autonomas</h2>
          <ReactApexChart
            className="bar-chart"
            options={eChart.options}
            series={eChart.series}
            type="bar"
            height={300}
          
          />
        </div>
      </div>

      </>
  );
}

export default EChart;