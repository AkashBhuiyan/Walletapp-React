import WalletService from "../services/WalletService";
import {GET_ERRORS, GET_WALLETS, DELETE_WALLET, GET_WALLET, DELETE_TRANSACTION, GET_TRANSACTIONS, GET_TRANSACTION} from './types';
import TransactionService from "../services/TransactionService";


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

// For Transactions

export const createTransaction = (transaction, history, wallet_id) => async dispatch => {
    // asynchronous promise based request
    TransactionService.createTransaction(transaction, wallet_id).then(res => {
        history.push(`/transactions/${wallet_id}`)
    }).catch((err) => {
        dispatch({type:GET_ERRORS, payload:err.response.data})
    });
}

export const updateTransaction = (transaction, history, id, wallet_id) => async dispatch => {
    // asynchronous promise based request
    TransactionService.updateTransaction(wallet_id, transaction, id).then(res => {
        history.push(`/transactions/${wallet_id}`)
    }).catch((err) => {
        dispatch({type:GET_ERRORS, payload:err.response.data})
    });
}

export const deleteTransaction = (wallet_id, id) => async dispatch => {
    // asynchronous promise based request
    TransactionService.deleteTransaction(wallet_id, id).then(res => {
        dispatch({type:DELETE_TRANSACTION, payload:id})
    });
}

export const getTransactions = (wallet_id) => async dispatch => {
    // asynchronous promise based request
    TransactionService.getTransaction(wallet_id).then(res => {
        dispatch({type:GET_TRANSACTIONS, payload:res.data})
    });
}

export const getTransactionsById = (wallet_id, id) => async dispatch => {
    // asynchronous promise based request
    TransactionService.getTransactionById(wallet_id, id).then(res => {
        console.log(id);
        
        dispatch({type:GET_TRANSACTION, payload:res.data})
    });
}
