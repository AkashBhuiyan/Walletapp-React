import WalletService from "../services/WalletService";
import {GET_ERRORS, GET_WALLETS, DELETE_WALLET, GET_WALLET} from './types';


export const createWallet = (wallet, history) => async dispatch => {
    // asynchronous promise based request
    WalletService.createWallet(wallet).then(res => {
        history.push('/dashboard')
    }).catch((err) => {
        dispatch({type:GET_ERRORS, payload:err.response.data})
    });
}

export const getWallets = () => async dispatch => {
    // asynchronous promise based request
    WalletService.getWallet().then(res => {
        dispatch({type:GET_WALLETS, payload:res.data})
    });
}

export const deleteWallet = (id) => async dispatch => {
    // asynchronous promise based request
    WalletService.deleteWallet(id).then(res => {
        dispatch({type:DELETE_WALLET, payload:id})
    });
}

export const updateWallet = (wallet, history, id) => async dispatch => {
    // asynchronous promise based request
    WalletService.updateWallet(wallet, id).then(res => {
        history.push('/dashboard')
    }).catch((err) => {
        dispatch({type:GET_ERRORS, payload:err.response.data})
    });
}

export const getWalletById = (id) => async dispatch => {
    // asynchronous promise based request
    WalletService.getWalletById(id).then(res => {
        console.log(id);
        
        dispatch({type:GET_WALLET, payload:res.data})
    });
}
