import React, {Component} from "react";
import CartService from "../api/service/CartService";
import AuthenticationService from "./AuthenticationService";
import HomeService from "../api/service/HomeService";


class CartComponent extends Component{

    constructor(props) {
        super(props);
        this.state = {
            cartBooks: []
        }

        this.refreshCartPage = this.refreshCartPage.bind(this)
        this.emptyCart = this.emptyCart.bind(this)
        this.makeOrder = this.makeOrder.bind(this)
    }

    componentDidMount() {

        console.log('componentDidMount')
        this.refreshCartPage()
        console.log(this.state.cartBooks)
    }

    emptyCart(){
        let username = AuthenticationService.getLoggedInClientUsername()
        CartService.emptyCartUser()
            .then(
                response =>{
                    this.setState({
                        cartBooks: response.data
                        }
                    )

                }

            ).then(
            this.props.history.push(`/home`)
        )

    }



    refreshCartPage() {
        CartService.retrieveCartBooks()
            .then(
                (response) => {
                    console.log(response)
                    this.setState({
                        cartBooks: response.data
                    })
                }
            )

    }

    makeOrder(client, discount){
        CartService.sendOrderUser(client, discount)
            .then(
                this.props.history.push(`/myaccount/${client}`)
            )

    }

    render() {
        let username = AuthenticationService.getLoggedInClientUsername()
        let discount = HomeService.getDiscount()
        let len = this.state.cartBooks
        return (
            <div>

                <div className={"column side"}>
                    <div className={"left"}>
                        <h2>Place Order?</h2>
                        <ul className={"container"}>
                         <li>Total price </li>
                         <li> <button onClick={()=>this.makeOrder(username, discount)}>Buy</button></li>
                         <li><button onClick={this.emptyCart}>Remove cart</button></li>
                        </ul>
                    </div>
                </div>
                <div className={"column middle"}>

                    <h2 className={"welcome"}> Welcome to your cart {username}</h2>
                    {/*{(len !== []) &&*/}
                    <div className="container">
                        {
                            this.state.cartBooks.map(
                                book =>

                                    <div  key={book.id}>
                                        <img  src={book.imagePath} alt={"lord of the rings"}/>
                                        <div>Title: {book.title}</div>
                                        <div>Author: {book.author}</div>
                                        <div>Format: {book.format}</div>
                                        <div>Price: {book.price}</div>
                                    </div>
                            )
                        }

                    </div>
                    {/*}*/}
                    {/*{(len === []) &&  <div> Your cart is empty</div>}*/}
                </div>

            </div>

        )

    }
}
export default CartComponent;