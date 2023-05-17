import axios from "axios";

class AccountService{

    retrieveClientData(username){
        return axios.get(`http://localhost:8080/users/client/${username}`)
    }

    retrieveOrdersHistoryAccount(client){
        return axios.get(`http://localhost:8080/client/${client}`)

    }

    retrieveAllFavouriteBooks(username){
        return axios.get(`http://localhost:8080/client/${username}/favourites`)

    }

}

export default new AccountService();