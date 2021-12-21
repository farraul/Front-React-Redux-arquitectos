import React, { useState, useEffect } from 'react';
import Admin_menu_comp from '../../Components/Admin_menu_comp/Admin_menu_comp';







const Admin_home = () => {

    //Hooks



   


    return (

        <div className="">
            <div className="super-admin-h-section-1">
                <div>
                    <Admin_menu_comp />
                </div>
                <div className='admin-h-section-2'>
                    <div>
                        <h1>super admin</h1>
                    </div>


                </div>
            </div>
        </div>
    )
};

export default Admin_home;