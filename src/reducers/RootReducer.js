import {combineReducers} from 'redux'
import errorReducer from './errorReducer';
import walletReducer from './walletReducer';
import transactionReducer from './transactionReducer';

export default combineReducers({
    errors: errorReducer,
    wallet: walletReducer,
    transaction: transactionReducer
});