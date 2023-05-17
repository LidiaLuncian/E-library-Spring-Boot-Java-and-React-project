import React, {Component} from "react";
import '../api/CSS/HomeCss.css'
import '../api/CSS/About.css'

class AboutComponent extends Component {

    render() {
        return (


            <div>
                <div className={"column middle"}>
                    <h2 className={"welcome"}> Welcome to Book-ish</h2>
                    <div>
                        <div>
                            <p className="lead">
                                We are an online shop that sells books.
                                You can chose from our variety of book generes:
                                and you can also chose your favourite
                                book format: Hard cover, Paperback or e-book.  If you are interested, you can go ahead and place an order.
                            </p>
                        </div>
                        <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css"
                              rel="stylesheet"/>
                        <div className="container-fluid">
                            <div className="jumbotron">
                                <div className="row vertical-align">
                                    <div className="col-xs-4">
                                        <a href="https://simple.wikipedia.org/wiki/The_Lord_of_the_Rings" title=""><img
                                            src="https://images-na.ssl-images-amazon.com/images/I/A1H-C8THP8L.jpg"
                                            className="img-responsive"/></a>
                                    </div>
                                    <div className="col-xs-4">
                                        <a href="https://en.wikipedia.org/wiki/The_Witcher" title=""><img
                                            src="https://images-na.ssl-images-amazon.com/images/I/91a8agptVEL.jpg"
                                            className="img-responsive"/></a>
                                    </div>
                                    <div className="col-xs-4">
                                        <a href="https://en.wikipedia.org/wiki/Dune_(franchise)" title=""><img
                                            src="https://galaxia42.ro/wp-content/uploads/2020/06/DUne.jpg"
                                            className="img-responsive"/></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>

        )
    }

}

export default AboutComponent