import eChart from "./configs/eChart";
import ReactApexChart from "react-apexcharts";

function EChart() {


  return (
    <>
      <div className='super-admin-panel-comunity-in-spain'>
        <div id="chart">
          <h2>Usuarios por comunidades autonomas</h2>
          <ReactApexChart
            className="bar-chart"
            options={eChart.options}
            series={eChart.series}
            type="bar"
            height={300}
            //width={1200}
          />
        </div>
      </div>

      </>
  );
}

export default EChart;