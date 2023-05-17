import React, {Component} from "react";
import '../api/CSS/HomeCss.css'
import Search from "./Search";
import {Link} from "react-router-dom"
import HomeService from "../api/service/HomeService";
import AuthenticationService from "./AuthenticationService";

class HomeComponent extends Component {


    constructor(props) {
        super(props);
        this.state = {
            books: [],
            cartBooks: []
        }

        this.refreshHomePage = this.refreshHomePage.bind(this)
        this.addToCart = this.addToCart.bind(this)
        this.adminOperation = this.adminOperation.bind(this)
        this.applyDiscount = this.applyDiscount.bind(this)
        this.disableDiscount = this.disableDiscount.bind(this)
        this.addToFav = this.addToFav.bind(this)
    }



    componentDidMount() {

        console.log('componentDidMount')
        this.refreshHomePage()
    }



    refreshHomePage() {
        if(HomeService.getSearchedItem()){
            HomeService.retrieveAllBooksAfterSearch()
                .then(
                    response => {
                        console.log(response)
                        this.setState({
                            books: response.data
                        })
                    }
                )
            HomeService.deleteDiscount()
        }
        HomeService.retrieveAllBooks()
            .then(
                response => {
                    console.log(response)
                    this.setState({
                        books: response.data
                    })
                }
            )
    }

    addToCart(id){
        let username = AuthenticationService.getLoggedInAdminUsername()
        HomeService.addToCart(id).then(
            () =>{
                this.props.history.push(`/cart:${username}`)
            }
        )

    }

    addToFav(username, bookId){

        HomeService.addToFavourite(username, bookId).then(
            () =>{
                this.props.history.push(`/myaccount/${username}`)
            }
        )

    }
    adminOperation(){
        this.props.history.push('/books')
    }

    applyDiscount(){
        if(!HomeService.getDiscount()){
            HomeService.registerDiscount();
        }
    }

    disableDiscount(){
        if(HomeService.getDiscount()){
            HomeService.deleteDiscount();
        }
    }

    render() {
        const isAdminLoggedIn = AuthenticationService.isAdminLoggedIn();
        let username = AuthenticationService.getLoggedInClientUsername()
        return (
            <div>

                <div className={"column side"}>
                    <div className={"left"}>
                        <h2>Menu</h2>
                        <Search/>

                        <ul id="myMenu">
                            <li><Link to='/genre/action' name={"action"}>Action</Link></li>
                            <li><Link to="/genre/adventure">Adventure</Link></li>
                            <li><Link to="/genre/bestseller">Bestseller</Link></li>
                            <li><Link to="/genre/biography">Biography</Link></li>
                            <li><Link to="/genre/classics">Classics</Link></li>
                            <div>
                                <li><Link to="/genre/fiction">Fiction</Link></li></div>
                            <li><Link to="/genre/fantasy">Fantasy</Link></li>
                            <li><Link to="/genre/historical fiction">Historical Fiction</Link></li>
                            <li><Link to="/genre/romance">Romance</Link></li>
                        </ul>
                    </div>
                </div>
                <div className={"column middle"}>

                    <h2 className={"welcome"}> Welcome to Book-ish</h2>
                    {isAdminLoggedIn && <div>
                        <button className="btn btn-outline-dark padding" onClick={this.adminOperation}>Manage books
                        </button>
                        <button className="btn btn-outline-dark " onClick={this.applyDiscount}>Apply discount</button>
                        <button className="btn btn-outline-dark " onClick={this.disableDiscount}>Disable discount
                        </button>
                    </div>}

                    <div className="container">
                        {
                            this.state.books.map(
                                book =>

                                    <div  key={book.id} className={"container-pic"}>
                                        <img  height={"30px"} width={"30px"} src={book.imagePath} alt={"lord of the rings"}/>
                                        <div>Title: {book.title}</div>
                                        <div>Author: {book.author}</div>
                                        <div>Format: {book.format}</div>
                                        <div>Price:{book.price}{!isAdminLoggedIn && <button className={"addbutton"}
                                                                                            onClick={() => this.addToCart(book.id)}>Add</button>}</div>
                                        <div><button className={"addbutton"}
                                                     onClick={() => this.addToFav(username,book.id)}>Add Favourite</button></div>
                                        {isAdminLoggedIn && <div>Quantity: {book.quantity}</div>}

                                    </div>
                            )
                        }
                    </div>
                </div>

            </div>

        )
    }
}

export default HomeComponent;