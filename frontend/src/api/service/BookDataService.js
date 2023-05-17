import axios from "axios";
import {API_URL} from "../../Constants";

class BookDataService{


    static  retrieveAllBooks(){
        return axios.get(`${API_URL}/books`);
    }

    static retrieveBook(id){
        return axios.get(`${API_URL}/books/${id}`)
    }

    static retrieveFoundBooks(name){
        return axios.get(`${API_URL}/search/${name}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+ 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJpbjI4bWludXRlcyIsImV4cCI6MTY0MTQxNDU0MCwiaWF0IjoxNjQwODA5NzQwfQ.eNzMtaIQ48WcyjnDaey8pEA-a1n9EJWYk45MVYMfnSNaWh1RpdLcTfJrZ-p3Z65pnZPgfx4S1ZtWjDwgY1EVZg'

            },
        })
    }

    static retrieveBookByGenre(genre){
        return axios.get(`${API_URL}/genre/${genre}`)
    }


    static deleteBook(id){
        return axios.delete(`${API_URL}/books/${id}`)
    }



    // @PutMapping("/books/{id}")
    static updateBook(id, book){
        return axios.put(`${API_URL}/books/${id}`, book)
    }

    //  @PostMapping("/books")
    static createBook(book){
        return axios.post(`${API_URL}/books`, book)
    }


}
export default BookDataService