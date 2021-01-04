import axios from 'axios';

const WALLET_API_BASE_URL = "http://localhost:8080/api/v1/wallet"

class WalletService{
    async getWallet(){
        return await axios.get(WALLET_API_BASE_URL)
    }

    async createWallet(wallet){
        return await axios.post(WALLET_API_BASE_URL, wallet)
    }
}

export default new WalletService();