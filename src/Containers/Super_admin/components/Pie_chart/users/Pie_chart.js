import React, { useState, useEffect } from 'react';



function Pie_chart() {


  useEffect(() => {
     
 
 console.log("function in pie_chart.js")
  var drawPieChart = function(data, colors) {
    let canvas = document.getElementById('pie');
    let ctx = canvas.getContext('2d');
    let x = canvas.width / 3.55;//acercar circulo
    let y = canvas.height / 2;
    let color,
      startAngle,
      endAngle,
      total = getTotal(data);

    for (var i = 0; i < data.length; i++) {
      color = colors[i];
      startAngle = calculateStart(data, i, total);
      endAngle = calculateEnd(data, i, total);

      ctx.beginPath();
      ctx.fillStyle = color;
      ctx.moveTo(x, y);
      ctx.arc(x, y, y - 100, startAngle, endAngle);//tamaño circulo
      ctx.fill();
      ctx.rect(canvas.width -165, y - i * 30, 12, 12);//botones de la persona
      ctx.fill();
      ctx.font = "13px sans-serif";
      ctx.fillText(data[i].label + " - " + data[i].value + " (" + calculatePercent(data[i].value, total) + "%)", canvas.width - 156 + 10, y - i * 30 + 10);
    }
  };

  var calculatePercent = function (value, total) {

    return (value / total * 100).toFixed(2);
  };

  var getTotal = function (data) {
    var sum = 0;
    for (var i = 0; i < data.length; i++) {
      sum += data[i].value;
    }

    return sum;
  };

  var calculateStart = function (data, index, total) {
    if (index === 0) {
      return 0;
    }

    return calculateEnd(data, index - 1, total);
  };

  var calculateEndAngle = function (data, index, total) {
    var angle = data[index].value / total * 360;
    var inc = (index === 0) ? 0 : calculateEndAngle(data, index - 1, total);

    return (angle + inc);
  };

  var calculateEnd = function (data, index, total) {

    return degreeToRadians(calculateEndAngle(data, index, total));
  };

  var degreeToRadians = function (angle) {
    return angle * Math.PI / 180
  }

  var data = [
    { label: 'Hombres:', value: 200 },
    { label: 'Mujeres', value: 150 },
   
  ];
  var colors = ['#005cfd',  '#538ef4'];

  drawPieChart(data, colors);

})
  return (

    <div className=''>
      <canvas id="pie" width="385"  height="400">eee</canvas>
    </div>
  );
}

export default Pie_chart;