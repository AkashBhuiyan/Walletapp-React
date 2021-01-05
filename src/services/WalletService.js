import axios from 'axios';

const WALLET_API_BASE_URL = "http://localhost:8080/api/v1/wallet"

class WalletService{
    async getWallet(){
        return await axios.get(WALLET_API_BASE_URL)
    }

    async getWalletById(id){
        return await axios.get(WALLET_API_BASE_URL+'/'+id)
    }

    async createWallet(wallet){
        return await axios.post(WALLET_API_BASE_URL, wallet)
    }

    async updateWallet(wallet, id){
        return await axios.put(WALLET_API_BASE_URL+'/'+id, wallet)
    }

    async deleteWallet(id){
        return await axios.delete(WALLET_API_BASE_URL +'/'+id)
    }
}

export default new WalletService();