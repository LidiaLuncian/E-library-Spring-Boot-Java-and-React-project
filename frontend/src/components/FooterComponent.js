import React, {Component} from "react";
import '../api/CSS/HeaderCss.css'
class FooterComponent extends Component{
    render() {
        return(
            <footer className="footer">
                <span className="text-muted">All Rights Reserved 2022 @Book-ish.com</span>
            </footer>
        )
    }
}

export default FooterComponent;