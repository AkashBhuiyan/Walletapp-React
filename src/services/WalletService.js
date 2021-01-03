import axios from 'axios';

const WALLET_API_BASE_URL = "http://localhost:8080/api/v1/wallet"

class WalletService{
    getWallet(){
        return axios.get(WALLET_API_BASE_URL)
    }

    createWallet(wallet){
        return axios.post(WALLET_API_BASE_URL, wallet)
    }
}

export default new WalletService();