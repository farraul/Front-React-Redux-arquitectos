import {combineReducers} from 'redux';
import data_user from './data_user';
import data_money from './data_money';
// import data_lead from './data_lead';




const rootReducer = combineReducers({
    data_user, data_money
    // , data_lead

});

export default rootReducer;