import {GET_TRANSACTION, DELETE_TRANSACTION, GET_TRANSACTIONS} from '../actions/types';


const initialState = {
    transactions:[],
    transaction:''
}

export default function (state=initialState, action) {
    switch (action.type) {
        case GET_TRANSACTION:
            return {...state, transaction:action.payload};
        case DELETE_TRANSACTION:
            return {...state, transactions:state.transactions.filter(x=>x.id!==action.payload) }
        case GET_TRANSACTIONS:
            return {...state, transactions:action.payload};
        default:
            return state;
    }
}