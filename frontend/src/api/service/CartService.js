import axios from "axios";

class CartService{


    retrieveCartBooks(){
        return axios.get(`http://localhost:8080/placedOrders`);
    }

    emptyCartUser(){
        return axios.put(`http://localhost:8080/orders/drop`);
    }

    sendOrderUser(client, discount){
        return axios.post(`http://localhost:8080/client/${client}/placedOrders/${discount}`, client, discount)
    }
}

export default new CartService();