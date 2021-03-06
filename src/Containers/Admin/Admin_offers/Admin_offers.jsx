import React, { useState, useEffect } from 'react';
import Admin_menu_comp from '../../../Components/Admin_menu_comp/Admin_menu_comp';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { DECREMENT_MONEY } from '../../../redux/types';

const Admin_offers = (props) => {
    let history = useNavigate();

    const go_to_the_link = (url) => {
        history("/" + url);
    }

    let res;
    const [all_leads, setall_leads] = useState([]);

    useEffect(() => {
        takeleads();
    }, []);


    useEffect(() => {
    });

    ///////////////take the last leads to show///////////////
    const takeleads = async () => {
        let config = {
            headers: { Authorization: `Bearer ${props.data_user.token}` }
        };
        let body = {
            id_architect: props.data_user.user[0].id,
        };

        try {
            res = await axios.post("https://api-laravel-arquitectos.herokuapp.com/api/Leads_filter", body, config);
            setall_leads(res.data);
        }
        catch (error) {
        }
    }

    ////////select the lead to buy//////
    const select_lead = async (name) => {
        let body_money = {
            money: props.data_money - 1,
        }
        let body = {
            id_architect: props.data_user.user[0].id,
            id_lead: name.id,
        }
        let config = {
            headers: { Authorization: `Bearer ${props.data_user.token}` }
        };
        try {
            res = await axios.post("https://api-laravel-arquitectos.herokuapp.com/api/newReserve", body, config);
        } catch (error) {
        }
        try {
            await axios.put(`https://api-laravel-arquitectos.herokuapp.com/api/UserMoney/${props.data_user?.user[0]?.id_user}`, body_money, config);

            if (props.data_money === 1) {
                props.dispatch({ type: DECREMENT_MONEY, payload: "0" });
            } else {
                props.dispatch({ type: DECREMENT_MONEY, payload: props.data_money - 1 });
            }
            history("/admin-profile");
        } catch (error) {
        }
    }

    return (
        <div className="">
            <div className="admin-offers-section-1">
                <div>
                    <Admin_menu_comp />
                </div>
                <div className='admin-offers-section-2'>
                    <div>
                        <h1 className='admin-offers-section-2-title'>??ltimos leads disponibles</h1>
                        <div className='iframe-arquitects'>
                            <div className='iframe-arquitects-h'>
                                {all_leads.map(name => <div className='iframe-arquitects-lead' key={name.id}>
                                        <div className='iframe-arquitects-client'>
                                            <div className='iframe-arquitects-client-data-top'>
                                                <div className='iframe-arquitects-client-title'>
                                                    <h4>{name.u_title_order_client}</h4>
                                                </div>
                                                <div className='iframe-arquitects-client-descrip'>
                                                    <p>{name.u_description_order_client}</p>
                                                </div>
                                                <div className='iframe-arquitects-client-descrip-extra'>
                                                    <div className='iframe-arquitects-client-location'>
                                                        <strong>Ciudad:</strong> {name.u_city}
                                                    </div>
                                                    <div className='iframe-arquitects-client-date'>
                                                        <strong>Fechas:</strong> {name.u_date_to_work}
                                                    </div>
                                                </div>
                                            </div>

                                            <div className='iframe-arquitects-client-info-contact'>
                                                <div className='iframe-arquitects-client-info-contact-data'>
                                                    <div className='iframe-arquitects-client-contact'>
                                                        Tel??fono:<span className='iframe-arquitects-client-blur'>6666666</span>
                                                    </div>
                                                    <div className='iframe-arquitects-client-contact-email'>
                                                        Email: <span className='iframe-arquitects-client-blur'>pruea@gmasil.com</span>
                                                    </div>
                                                </div>
                                                <div className='iframe-arquitects-client-buy-div'>
                                                    {(props.data_money <= 0) ? <button id="button-to-buy" className='iframe-arquitects-client-buy' onClick={() => go_to_the_link("admin-profile")}>Recargar saldo</button> : <button id="button-to-buy" className='iframe-arquitects-client-buy' onClick={() => select_lead(name)}>Comprar</button>}
                                                </div>
                                            </div>
                                        </div>
                                </div>)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
};



export default connect((state) => ({
    data_user: state.data_user,
    data_money: state.data_money
}))(Admin_offers);
