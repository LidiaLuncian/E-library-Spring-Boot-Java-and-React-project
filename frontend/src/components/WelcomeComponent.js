import {Link} from "react-router-dom";
import React, {Component} from "react";

class WelcomeComponent extends Component {

    constructor(props) {
        super(props);
        this.handleSuccessfulResponse = this.handleSuccessfulResponse.bind(this )
        this.handleError = this.handleError.bind(this )
        this.state ={
            welcomeMessage: ''
        }
    }

    render() {
        return <>
            <h1>Welcome!</h1>
            <div className={"container"} >
                Welcome {this.props.match.params.name}.
                You can manages your todos <Link to="/todos"> here</Link>
            </div>
            <div className={"container"} >
                Click here to get a customized welcome message.
            </div>
            <div  className={"container"}>
                {this.state.welcomeMessage}
            </div>

        </>
    }


    handleSuccessfulResponse(response){
        console.log(response)
        this.setState({welcomeMessage: response.data.message})
    }

    handleError(error){
        console.log(error.response)
        let errorMessage ='';
        if(error.message){
            errorMessage += error.message
        }
        if(error.response && error.response.data){
            errorMessage +=  error.response.data.message
        }
        this.setState({welcomeMessage: errorMessage})
    }

}

export default WelcomeComponent