import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';



// var users_c_a= [0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

// const Data = async () => {


//   // const [users_c_a, users_c_a] = useState(
//   //   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
//   // );
  
//   let res;
//   let token = JSON.parse(localStorage.getItem('redux_localstorage_simple_data_user'));
//   console.log("token: ", token)
//   let token_format = {
//     headers: { Authorization: `Bearer ${token.token}` }
//   };

//   try {
//     console.log("entre try")
//     res = await axios.get("https://api-laravel-arquitectos.herokuapp.com/api/Users", token_format);
//     res.data?.map((run, index) => {


//       switch (run.c_a) {
//         case 'andalucia':
//           users_c_a[0]++
//           break;
//         case 'Aragón':
//           users_c_a[1]++
//           break;
//         case 'Principado de Asturias':
//           users_c_a[2]++
//           break;
//         case 'Illes Balears':
//           users_c_a[3]++
//           break;
//         case 'Canarias':
//           users_c_a[4]++
//           break;
//         case 'Cantabria':
//           users_c_a[5]++
//           break;
//         case 'Castilla La Mancha':
//           users_c_a[6]++
//           break;
//         case 'Cataluña':
//           users_c_a[7]++
//           break;
//         case 'Comunidad Valenciana':
//           users_c_a[8]++
//           break;
//         case 'Extremadura':
//           users_c_a[9]++
//           break;
//         case 'Galicia':
//           users_c_a[10]++
//           break;
//         case 'La Rioja':
//           users_c_a[11]++
//           break;
//         case 'Comunidad de Madrid':
//           users_c_a[12]++
//           break;
//         case 'Región de Murcia':
//           users_c_a[13]++
//           break;
//         case 'Comunidad Foral de Navarra':
//           users_c_a[14]++
//           break;
//         case 'País Vasco o Euskadi':
//           users_c_a[15]++
//           break;


//         default:
//           console.log('no se encontró coincidencia');

//       }
//     })


//     console.log("users_c_a", users_c_a)
//     console.log("users_c_a[4]", users_c_a[4])
//     console.log("biennnnnnnnnnn",)

//   }
//   catch (error) {
//     console.log("error de front", error);
//   }
// }










const eChart = {




  
  series: [
    {
      name: "Nº usuarios",
     // data: [ /*users_c_a[1],3 ,/* users_c_a[2], users_c_a[3], users_c_a[4], users_c_a[5], users_c_a[6], users_c_a[7], users_c_a[8], users_c_a[9], users_c_a[10],  users_c_a[11], users_c_a[12],  users_c_a[13],  users_c_a[14],4*/],
     data: [10,34,5,21,15,3,16,34,4,20,34,2,17,25,2],

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




export default eChart;


//  export default connect((state) => ({
//   data_user: state.data_user,

// }))(eChart);
