/*import { ACRESCENTA, SUBTRAI, ALTERA_NOME } from "./type";
import { createStore, combineReducers } from 'redux';

const reducers = combineReducers({
    nome: function(state, action) {
        console.log(state, action);
        return {
            nomeUsuario: 'Igor'
        }
    },

    valor: function(state, action) {
        return {
            numero: 0
        }
    }
});

export default (state = reducers, action) => {
    switch (action.type) {
        case ALTERA_NOME:
            return { ...state, ...action.payload }
        case ACRESCENTA:
            return { ...state, ...action.payload }
        case SUBTRAI:
            return { ...state, ...action.payload }
        default:
            return state
    }
}*/