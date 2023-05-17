import axios from "axios";
import {API_URL} from "../Constants";

export const CLIENT_NAME_SESSION_ATTRIBUTE_NAME ='authenticatedClient'
export const ADMIN_NAME_SESSION_ATTRIBUTE_NAME ='authenticatedAdmin'

class AuthenticationService{

    executeJwtAuthenticationService(username, password){
        return axios.post(`${API_URL}/authenticate`, {
            username,
            password
        })
    }

    createJWTToken(token){
        return 'Bearer ' + token
    }

    registerSuccessfulClientLoginForJwt(username, token) {
        localStorage.setItem(CLIENT_NAME_SESSION_ATTRIBUTE_NAME, username);
        this.setupAxiosInterceptors(this.createJWTToken(token))
    }

    registerSuccessfulAdminLoginForJwt(username, token) {
        localStorage.setItem(ADMIN_NAME_SESSION_ATTRIBUTE_NAME, username);
        this.setupAxiosInterceptors(this.createJWTToken(token))
    }

    isClientLoggedIn(){
        let user = localStorage.getItem(CLIENT_NAME_SESSION_ATTRIBUTE_NAME)
        if (user === null) return false
        return true
    }

    isAdminLoggedIn(){
        let user = localStorage.getItem(ADMIN_NAME_SESSION_ATTRIBUTE_NAME)
        if (user === null) return false
        return true
    }

    getLoggedInClientUsername(){
        let user = localStorage.getItem(CLIENT_NAME_SESSION_ATTRIBUTE_NAME);
        if(user===null) return ''
        return user
    }

    getLoggedInAdminUsername(){
        let user = localStorage.getItem(ADMIN_NAME_SESSION_ATTRIBUTE_NAME);
        if(user===null) return ''
        return user
    }

    setupAxiosInterceptors(basicAuthHeader){

        axios.interceptors.request.use(
            (config) =>{
                if(this.isClientLoggedIn()){
                    config.headers.authorization = basicAuthHeader
                }
                else{
                    if(this.isAdminLoggedIn()){
                        config.headers.authorization = basicAuthHeader
                    }
                }

                return config
            }
        )
    }

    logout(){
        if(localStorage.getItem(CLIENT_NAME_SESSION_ATTRIBUTE_NAME) !== null){
            localStorage.removeItem(CLIENT_NAME_SESSION_ATTRIBUTE_NAME);
        }
        if(localStorage.getItem(ADMIN_NAME_SESSION_ATTRIBUTE_NAME) !== null){
            localStorage.removeItem(ADMIN_NAME_SESSION_ATTRIBUTE_NAME);
        }

    }

    createClient(client){
        return axios.post(`${API_URL}/users/client`, client, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+ 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJpbjI4bWludXRlcyIsImV4cCI6MTY0MTQxNDU0MCwiaWF0IjoxNjQwODA5NzQwfQ.eNzMtaIQ48WcyjnDaey8pEA-a1n9EJWYk45MVYMfnSNaWh1RpdLcTfJrZ-p3Z65pnZPgfx4S1ZtWjDwgY1EVZg'

            },
        })
    }

    updateClient(client, id){
        return axios.put(`${API_URL}/users/client/${id}`, client)
    }

}

export default new AuthenticationService();