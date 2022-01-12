import {combineReducers} from 'redux';
import data_user from './data_user';
import data_money from './data_money';




const rootReducer = combineReducers({
    data_user, data_money

});

export default rootReducer;