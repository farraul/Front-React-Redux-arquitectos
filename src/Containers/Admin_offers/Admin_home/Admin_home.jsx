import React, { useState, useEffect } from 'react';
import Admin_menu_comp from '../../Components/Admin_menu_comp/Admin_menu_comp';







const Admin_home = () => {

    //Hooks



   


    return (

        <div className="">
            <div className="admin-h-section-1">
                <div>
                    <Admin_menu_comp />
                </div>
                <div className='admin-h-section-2'>
                    <div>
                        <h2>Bienbenido al Panel de admin</h2>
                        <h4>En el menu superior tienes las ofertas</h4>
                    </div>


                </div>
            </div>
        </div>
    )
};

export default Admin_home;