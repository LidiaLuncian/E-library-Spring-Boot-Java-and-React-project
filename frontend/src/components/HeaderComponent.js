import React, {Component}  from "react";
import { Link} from 'react-router-dom'
import { withRouter } from 'react-router';
import '../api/CSS/HeaderCss.css'
import AuthenticationService from "./AuthenticationService";
import { TiUser, TiShoppingCart } from "react-icons/ti";
class HeaderComponent extends Component{

    render() {
        const isClientLoggedIn = AuthenticationService.isClientLoggedIn();
        const isAdminLoggedIn = AuthenticationService.isAdminLoggedIn();
        let username
        if(isClientLoggedIn)
         username = AuthenticationService.getLoggedInClientUsername()
        else if(isAdminLoggedIn)
            username = AuthenticationService.getLoggedInAdminUsername()
        return(

            <header className={"head"}>

                <nav className={"navbar"}>
                    <div><Link to= "/home" className="one">Book-ish</Link></div>

                    <ul>
                        <li><Link to = "/" > Home</Link></li>
                        {(!isAdminLoggedIn && !isClientLoggedIn) && <li> <a href = "/adminlogin" > Login as Admin</a></li>}
                        {(!isClientLoggedIn && !isAdminLoggedIn) && <li><Link to="/login">Login/SignUp</Link></li>}
                        {(isClientLoggedIn || isAdminLoggedIn) && <li><Link to="/logout" onClick={AuthenticationService.logout}>Logout</Link></li>}
                        <li><Link to={`/cart:${username}`}><TiShoppingCart  className={"cart"}/></Link> </li>
                        <li><Link to="/about">About</Link></li>
                        {isClientLoggedIn && <li><Link to={`/myaccount/${username}`}>My Account<TiUser  className={"account"}/></Link> </li>}
                    </ul>
                </nav>
            </header>
        )
    }
}
export default  withRouter(HeaderComponent)