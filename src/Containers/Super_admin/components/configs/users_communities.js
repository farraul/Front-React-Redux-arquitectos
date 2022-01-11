import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';





const Data = async () => {


  const [msgError, setmsgError] = useState("");
  const [users_c_a, set_Users_c_a] = useState(
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  );
  
  let res;
  let token = JSON.parse(localStorage.getItem('redux_localstorage_simple_data_user'));
  console.log("token: ", token)
  let token_format = {
    headers: { Authorization: `Bearer ${token.token}` }
  };

  try {
    res = await axios.get("https://api-laravel-arquitectos.herokuapp.com/api/Users", token_format);
    res.data?.map((run, index) => {


      switch (run.c_a) {
        case 'andalucia':
          set_Users_c_a[0]++
          break;
        case 'Aragón':
          set_Users_c_a[1]++
          break;
        case 'Principado de Asturias':
          set_Users_c_a[2]++
          break;
        case 'Illes Balears':
          set_Users_c_a[3]++
          break;
        case 'Canarias':
          set_Users_c_a[4]++
          break;
        case 'Cantabria':
          set_Users_c_a[5]++
          break;
        case 'Castilla La Mancha':
          set_Users_c_a[6]++
          break;
        case 'Cataluña':
          set_Users_c_a[7]++
          break;
        case 'Comunidad Valenciana':
          set_Users_c_a[8]++
          break;
        case 'Extremadura':
          set_Users_c_a[9]++
          break;
        case 'Galicia':
          set_Users_c_a[10]++
          break;
        case 'La Rioja':
          set_Users_c_a[11]++
          break;
        case 'Comunidad de Madrid':
          set_Users_c_a[12]++
          break;
        case 'Región de Murcia':
          set_Users_c_a[13]++
          break;
        case 'Comunidad Foral de Navarra':
          set_Users_c_a[14]++
          break;
        case 'País Vasco o Euskadi':
          set_Users_c_a[15]++
          break;


        default:
          console.log('no se encontró coincidencia');

      }
    })


    console.log("users_c_a", users_c_a)

    console.log("biennnnnnnnnnn",)

  }
  catch (error) {
    console.log("error de front", error);
  }
}









const eChart = {
  series: [
    {
      name: "Nº usuarios",
      data: [3 /*, users_c_a[1], users_c_a[2], users_c_a[3], users_c_a[4], users_c_a[5], users_c_a[6], users_c_a[7], users_c_a[8], users_c_a[9], users_c_a[10],  users_c_a[11], users_c_a[12],  users_c_a[13],  users_c_a[14]*/, 4],
      color: "#fff",
    },
  ],

  options: {
    chart: {
      type: "bar",
      width: "100%",
      height: "auto",

      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
        borderRadius: 5,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 1,
      colors: ["transparent"],
    },
    grid: {
      show: true,
      borderColor: "#ccc",
      strokeDashArray: 2,
    },
    xaxis: {
      categories: [
        "And.",
        "Ar.",
        "Ast.",
        "Bal.",
        "Can.",
        "Cantb.",
        "C-L. M.",
        "C. y L.",
        "Cat.",
        "Com. Val.",
        "Ext.",
        "Gal.",
        "L. R.",
        "Mad.",
        "Nav.",
        "P. Vasco",
        "Mur.",
      ],
      labels: {
        show: true,
        align: "right",
        minWidth: 0,
        maxWidth: 160,
        style: {
          colors: [
            "#fff",
            "#fff",
            "#fff",
            "#fff",
            "#fff",
            "#fff",
            "#fff",
            "#fff",
            "#fff",
            "#fff",
            "#fff",
            "#fff",
            "#fff",
            "#fff",
            "#fff",
            "#fff",
            "#fff",

          ],
        },
      },
    },
    yaxis: {
      labels: {
        show: true,
        align: "right",
        minWidth: 0,
        maxWidth: 160,
        style: {
          colors: [
            "#fff",
            "#fff",
            "#fff",
            "#fff",
            "#fff",
            "#fff",
            "#fff",
            "#fff",
            "#fff",
            "#fff",
            "#fff",
            "#fff",
            "#fff",
            "#fff",
            "#fff",
            "#fff",
            "#fff",
          ],
        },
      },
    },

    tooltip: {
      y: {
        formatter: function (val) {
          return "" + val + "";
        },
      },
    },
  },
};


Data();

export default eChart;


//  export default connect((state) => ({
//   data_user: state.data_user,

// }))(eChart);
