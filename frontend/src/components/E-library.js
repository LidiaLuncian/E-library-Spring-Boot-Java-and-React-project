import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import LogInComponent from "./LogInComponent";
import SignupComponent from "./SignupComponent";
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";
import HomeComponent from "./HomeComponent";
import AuthenticatedRoute from "./AuthenticatedRoute";
import LogoutComponent from "./LogOutComponent";
import MyAccountComponent from "./MyAccountComponent";
import AdminLoginComponent from "./AdminLoginComponent";
import CartComponent from "./CartComponent";
import GenreSearchComponent from "./GenreSearchComponent";
import BookComponent from "./BookComponent";
import ListAllBooksComponent from "./ListAllBooksComponent";
import SearchComponent from "./SearchComponent";
import AboutComponent from "./AboutComponent";

class ELibrary extends Component{
    render() {
        return (
            <div className={"ELibrary"}>
                <Router>
                    <HeaderComponent/>
                    <>
                        <Switch>
                            <AuthenticatedRoute path={"/"} exact component={HomeComponent}/>
                            <AuthenticatedRoute path={"/search"}  component={SearchComponent}/>
                            <Route path={"/login"} component={LogInComponent}/>
                            <AuthenticatedRoute path={"/home"} component={HomeComponent}/>
                            <Route path="/signup" component={SignupComponent}/>
                            <AuthenticatedRoute path={"/books/:id"} component={BookComponent}/>
                            <AuthenticatedRoute path={"/books"} component={ListAllBooksComponent}/>
                            <AuthenticatedRoute path="/myaccount/:name" component={MyAccountComponent}/>
                            <AuthenticatedRoute path="/cart:name" component={CartComponent}/>
                            <Route path="/adminlogin" component={AdminLoginComponent}/>
                            <AuthenticatedRoute path="/genre/:name" exact component={GenreSearchComponent}/>
                            <AuthenticatedRoute  path={"/logout"} component={LogoutComponent}/>
                            <AuthenticatedRoute path={"/about"} component={AboutComponent}/>
                        </Switch>
                    </>
                    <FooterComponent/>
                </Router>

            </div>
        )
    }

}
export default ELibrary