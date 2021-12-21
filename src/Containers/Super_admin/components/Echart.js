import eChart from "./configs/eChart";
import ReactApexChart from "react-apexcharts";

function EChart() {


  return (
    <>
      <div>
        <div id="chart">
          <ReactApexChart
            className="bar-chart"
            options={eChart.options}
            series={eChart.series}
            type="bar"
            height={220}
          />
        </div>
      </div>

      </>
  );
}

export default EChart;