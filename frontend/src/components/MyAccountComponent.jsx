import React, {Component} from "react";
import Search from "./Search";
import {Link} from "react-router-dom";
import AuthenticationService from "./AuthenticationService";
import HomeService from "../api/service/HomeService";
import AccountService from "../api/service/AccountService";
import '../api/CSS/HomeCss.css'

class MyAccountComponent extends Component{

    constructor(props) {
        super(props);
        this.state = {
            orders: [],
            client: [],
            favourite: []
        }

        this.refreshAccountPage = this.refreshAccountPage.bind(this)
    }

    componentDidMount() {

        console.log('componentDidMount')
        this.refreshAccountPage()
       console.log(this.state.client)
    }



    refreshAccountPage() {
        let username = AuthenticationService.getLoggedInClientUsername()
        console.log(username)
        // AccountService.retrieveClientData(username)
        //     .then(
        //         response => {
        //             console.log(response)
        //             this.setState({
        //                 client: response.data
        //             })
        //         }
        //     )
        //
        // AccountService.retrieveOrdersHistoryAccount()
        //     .then(
        //         response =>{
        //             console.log(response)
        //             this.setState({
        //                 orders:response.data
        //             })
        //         }
        //     )

        AccountService.retrieveAllFavouriteBooks(username)
            .then(
                (response) => {
                    console.log(response)
                    this.setState({
                        favourite: response.data
                    })
                }
            )
    }

    render() {

        let username = AuthenticationService.getLoggedInClientUsername()

        return(
            <div>

                <div className={"column side"}>
                    <div className={"left"}>
                        <h2>My Info</h2>
                        <div className="container">
                            {
                                this.state.client.map(
                                    cli =>

                                        <div  key={cli.user_id}>
                                            <div>Username: {cli.username}</div>
                                            <div>Email: {cli.email}</div>
                                            <div>Address: {cli.address}</div>
                                            <div>Password:{cli.password}</div>

                                        </div>
                                )
                            }
                        </div>
                    </div>
                </div>
                <div className={"column middle"}>

                    <h2 className={"welcome"}> Welcome to your account page {username}</h2>
                    <h3>These are your favourite books</h3>
                    <div className="container">
                        {
                            this.state.favourite.map(
                                book =>

                                    <div  key={book.id} className={"container-pic"}>
                                        <img  src={book.imagePath} alt={"lord of the rings"}/>
                                        <div>Title: {book.title}</div>
                                        <div>Author: {book.author}</div>
                                        <div>Format: {book.format}</div>
                                        <div>Price:{book.price}</div>
                                    </div>
                                        )
                        }
                    </div>
                </div>

            </div>
        )
    }
}
export default MyAccountComponent;