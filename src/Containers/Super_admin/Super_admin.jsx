import React, { useState, useEffect } from 'react';
import Admin_menu_comp from '../../Components/Admin_menu_comp/Admin_menu_comp';
import Echart from "./components/Echart";




const Super_Admin = () => {




    return (

        <div className="super-admin">
            <div className="super-admin-h-section-1">
                <div>
                    <Admin_menu_comp />
                </div>
                <div className='super-admin-h-section-2'>

                    <div className='super-admin-container-info'>
                        <div className='super-admin-container-info-s1'>
                            <div className='super-admin-container-info-s1-p'>
                            <h2>Usuarios por comunidades autonomas</h2>
                            <Echart />
                            </div>
                            <div className='super-admin-container-info-s1-p'>
                            <h2>Arquitectos por comunidades autonomas</h2>

                            <Echart />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
};

export default Super_Admin;