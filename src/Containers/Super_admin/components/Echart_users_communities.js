import Data from "./configs/users_communities";
import eChart from "./configs/users_communities";
import ReactApexChart from "react-apexcharts";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import all_data_backend from './configs/all_data_backend';

function EChart_users_communities()/*= async () => */{

console.log("importacion", all_data_backend)
  // const EChart_users_communities= async () => {


  const [users_c_a, setUsers_c_a] = useState([0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);



  let res;
  let token = JSON.parse(localStorage.getItem('redux_localstorage_simple_data_user'));
  console.log("token: ", token)
  let token_format = {
    headers: { Authorization: `Bearer ${token.token}` }
  };

  try {
    console.log("antes settime")

    
      //  res =await axios.get("https://api-laravel-arquitectos.herokuapp.com/api/Users", token_format);
   
//       setTimeout(() => {  

// }, 3000);
      
  // console.log("despues ")

  //   console.log("res armando", res)
    // res.data?.map((run, index) => {
   
    //   switch (run.c_a) {
    //     case 'andalucia':
    //       setUsers_c_a(users_c_a[0]=users_c_a[0]+1)
      
    //       break;
    //     case 'Aragón':
    //       setUsers_c_a(users_c_a[1]=users_c_a[1]+1)
    //       break;
    //     case 'Principado de Asturias':
    //       setUsers_c_a(users_c_a[2]=users_c_a[2]+1)
    //       console.log("users4::::", users_c_a[4])
    //       break;
    //     case 'Illes Balears':
    //       setUsers_c_a(users_c_a[3]=users_c_a[3]+1)
    //       break;
    //     case 'Canarias':
    //       setUsers_c_a(users_c_a[4]=users_c_a[4]+1)
    //       break;
    //     case 'Cantabria':
    //       setUsers_c_a(users_c_a[5]=users_c_a[5]+1)
    //       break;
    //     /*case 'Castilla La Mancha':
    //       setUsers_c_a(users_c_a[5]++)
    //       break;
    //     case 'Cataluña':
    //       setUsers_c_a(users_c_a[0]++)
    //       break;
    //     case 'Comunidad Valenciana':
    //       setUsers_c_a(users_c_a[0]++)
    //       break;
    //     case 'Extremadura':
    //       setUsers_c_a(users_c_a[0]++)
    //       break;
    //     case 'Galicia':
    //       setUsers_c_a(users_c_a[0]++)
    //       break;
    //     case 'La Rioja':
    //       setUsers_c_a(users_c_a[0]++)
    //     case 'Comunidad de Madrid':
    //       setUsers_c_a(users_c_a[0]++)
    //       break;
    //     case 'Región de Murcia':
    //       setUsers_c_a(users_c_a[0]++)
    //       break;
    //     case 'Comunidad Foral de Navarra':
    //       setUsers_c_a(users_c_a[0]++)
    //       break;
    //     case 'País Vasco o Euskadi':
    //       setUsers_c_a(users_c_a[0]++)
    //       break;*/


    //     default:
    //       console.log('no se encontró coincidencia');

    //   }
    // })


    // console.log("users_c_a", users_c_a)
    // console.log("users_c_a[4]", users_c_a[0])
    // console.log("biennnnnnnnnnn",)

  }
  catch (error) {
    console.log("error de front", error);
  }














//   useEffect(() => {
// //Data();
//     })
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



            series={[{
              name: "Nº usuarios",
              data: [2 , /*users_c_a[2],*//* users_c_a[3], users_c_a[4], users_c_a[5], users_c_a[6], users_c_a[7], users_c_a[8], users_c_a[9], users_c_a[10],  users_c_a[11], users_c_a[12],  users_c_a[13],  users_c_a[14]*/,4],
              color: "#fff",
            }]}
 




            type="bar"
            height={300}
          />


   
        </div>
      </div>

      </>
  );
}

export default EChart_users_communities;