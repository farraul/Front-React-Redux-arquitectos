import {LOGIN_MONEY, LOGOUT_MONEY, UPDATE_MONEY, DECREMENT_MONEY} from '../types';

const initialState = {
    money: '',
};

const data_money = (state = initialState, action) => {
    
    switch(action.type){
        //Ejemplo de añadido de datos
        case LOGIN_MONEY :
            return action.payload;

         case DECREMENT_MONEY:
            return action.payload;

        //Ejemplo de reestablecimiento o borrado de datos
         case LOGOUT_MONEY : 
            return initialState;
            
        case UPDATE_MONEY:

             //return{ ...state, 
                //user: state.user.filter(proyecto => proyecto == "money" ? action.payload : proyecto)
                return{ ...state, money: action.payload};
                

            
        default :
            return state
    }
};
export default data_money;