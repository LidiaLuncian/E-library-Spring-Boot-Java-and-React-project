import React, {Component} from "react";
import BookDataService from "../api/service/BookDataService";
import AuthenticationService from "./AuthenticationService";
import HomeService from "../api/service/HomeService";

class SearchComponent extends Component{

    constructor(props) {
        super(props);
        this.state = {
            books: [],
        }
        this.searchBook = this.searchBook.bind(this)
    }

    componentDidMount() {

        console.log('componentDidMount')
        this.searchBook()
    }

    searchBook(){
        const name = window.location.search.toString()
        const keyWord = name.replace('?s=', '')
        console.log(name)
        console.log(keyWord)
        BookDataService.retrieveFoundBooks(keyWord)
            .then(
                response => {
                    console.log(response)
                    this.setState({
                        books: response.data
                    })
                }
            )
        HomeService.searchedItem();
    }

    render() {
        const isAdminLoggedIn = AuthenticationService.isAdminLoggedIn();
        return(
            <div className="container">
                {
                    this.state.books.map(
                        book =>

                            <div  key={book.id}>
                                <img  src={book.imagePath} alt={"lord of the rings"}/>
                                <div>Title: {book.title}</div>
                                <div>Author: {book.author}</div>
                                <div>Format: {book.format}</div>
                                <div>Price:{book.price}{!isAdminLoggedIn && <button className={"addbutton"}
                                                                                    onClick={() => this.addToCart(book.id)}>Add</button>}</div>
                                {isAdminLoggedIn && <div>Quantity: {book.quantity}</div>}

                            </div>
                    )
                }
            </div>
        )
    }

}
export default SearchComponent