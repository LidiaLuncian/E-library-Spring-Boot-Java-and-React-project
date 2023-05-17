import axios from "axios";
import {CLIENT_NAME_SESSION_ATTRIBUTE_NAME} from "../../components/AuthenticationService";
class HomeService{

    executeGenrePathService(name){

        return axios.get(`http://localhost:8080/genre/${name}`);
    }

    retrieveAllBooks(){
        return axios.get(`http://localhost:8080/books`);
    }

    retrieveAllBooksAfterSearch(){
        return axios.get(`http://localhost:8080/books`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+ 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJpbjI4bWludXRlcyIsImV4cCI6MTY0MTQxNDU0MCwiaWF0IjoxNjQwODA5NzQwfQ.eNzMtaIQ48WcyjnDaey8pEA-a1n9EJWYk45MVYMfnSNaWh1RpdLcTfJrZ-p3Z65pnZPgfx4S1ZtWjDwgY1EVZg'

            },
        });
    }

    addToCart(bookId){
        return axios.put(`http://localhost:8080/orders/addBook/${bookId}`)
    }

    registerDiscount(){
        localStorage.setItem('discount', 'true');

    }

    deleteDiscount(){
        if(localStorage.getItem('discount') !== null) {
            localStorage.removeItem('discount');
        }
    }

    getDiscount(){
        if(localStorage.getItem('discount') !== null){
            return true
        }
        return false
    }

    searchedItem(){
        localStorage.setItem('cheie', 'true');

    }

    deleteSearchedItem(){
        if(localStorage.getItem('cheie') !== null) {
            localStorage.removeItem('cheie');
        }
    }

    getSearchedItem(){
        if(localStorage.getItem('cheie') !== null){
            return true
        }
        return false
    }

    addToFavourite(username, bookId){
        return axios.put(`http://localhost:8080/client/${username}/favourites/add/${bookId}`)
    }
}

export default new HomeService();