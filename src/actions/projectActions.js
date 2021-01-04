import WalletService from "../services/WalletService";
import {GET_ERRORS} from './types';


export const createWallet = (wallet, history) => async dispatch => {
    WalletService.createWallet(wallet).then(res => {
        history.push('/dashboard')
    }).catch((err) => {
        dispatch({type:GET_ERRORS, payload:err.response.data})
    });
}