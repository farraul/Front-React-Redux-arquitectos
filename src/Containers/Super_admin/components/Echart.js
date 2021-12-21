import eChart from "./configs/eChart";
import ReactApexChart from "react-apexcharts";
import React, { useState, useEffect } from 'react';


function EChart() {



  useEffect(() => {
     
    })
 /*parceh comunidad autonoma
      ajustar();   ( esto en el usseeffect)
    const adjust_width_users_autonomous_community = () => {
        let panelIzquierda = document.getElementById("get-width").clientWidth;
        console.log(panelIzquierda);
      }*/


  return (
    <>
      <div id="get-width" className='super-admin-panel-comunity-in-spain'>
        <div id="chart">
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