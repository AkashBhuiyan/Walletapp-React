import axios from 'axios';

const TRANSACTION_API_BASE_URL = "http://localhost:8080/api/v1/transaction/"

class TransactionService{
    async getTransaction(wallet_id){
        return await axios.get(TRANSACTION_API_BASE_URL+wallet_id)
    }

    async getTransactionById(wallet_id, id){
        return await axios.get(TRANSACTION_API_BASE_URL+'/'+wallet_id+'/'+id)
    }

    async createTransaction(transaction, wallet_id){
        return await axios.post(TRANSACTION_API_BASE_URL+wallet_id, transaction)
    }

    async updateTransaction(wallet_id, transaction, id){
        return await axios.put(TRANSACTION_API_BASE_URL+'/'+wallet_id+'/'+id, transaction)
    }

    async deleteTransaction(wallet_id, id){
        return await axios.delete(TRANSACTION_API_BASE_URL +'/'+wallet_id+'/'+id)
    }
}

export default new TransactionService();