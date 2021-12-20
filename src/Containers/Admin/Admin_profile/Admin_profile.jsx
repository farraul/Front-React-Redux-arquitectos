import React, { useState, useEffect } from 'react';
import Admin_menu_comp from '../../../Components/Admin_menu_comp/Admin_menu_comp';







const Admin_profile = () => {

    //Hooks






    return (

        <div className="">
            <div className="admin-p-section-1">
                <div>
                    <Admin_menu_comp />
                </div>
                <div className='admin-p-section-2'>
                    <div className='admin-p-width'>

                        <div className='admin-p-profile'>

                            <div className='admin-p-profile-padding'>
                                <h3>Tus datos </h3>
                                <div className='admin-p-profile-info'>
                                    <div className='admin-p-profile-t'>
                                        Nombre:
                                    </div>
                                    <div className='admin-p-profile-d'>
                                        Raúl
                                    </div>
                                </div>
                                <div className='admin-p-profile-info'>
                                    <div className='admin-p-profile-t'>
                                        Apellidos:
                                    </div>
                                    <div className='admin-p-profile-d'>
                                        far llobell
                                    </div>
                                </div>
                                <div className='admin-p-profile-info'>
                                    <div className='admin-p-profile-t'>
                                        Teléfono:
                                    </div>
                                    <div className='admin-p-profile-d'>
                                        628086995
                                    </div>
                                </div>
                                <div className='admin-p-profile-info'>
                                    <div className='admin-p-profile-t'>
                                        Email:
                                    </div>
                                    <div className='admin-p-profile-d'>
                                        raulfarllobell@gmail.com
                                    </div>
                                </div>
                            </div>
                            

                            <div>
                                <div className='admin-p-profile-buttons-down'>

                                    <div className='admin-p-profile-buttons-down-update'>
                                        Actualizar

                                    </div>
                                    <div className='admin-p-profile-buttons-down-delete'>
                                        Eliminar Usuario
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Admin_profile;