import React, {Component} from "react";
import AuthenticationService from "./AuthenticationService";
import {Formik, Form} from "formik";

class AdminLoginComponent extends Component{

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            hasLoginFailed: false,
            showSuccessMsg: false,
        }
        this.handleChange = this.handleChange.bind(this);
        this.loginClicked = this.loginClicked.bind(this);
    }

    handleChange(event) {
        console.log(this.state);
        this.setState(
            {
                [event.target.name]: event.target.value
            }
        )
    }


    loginClicked(){
        // if((this.state.username === 'raluq' || this.state.username === 'lidia')  && this.state.password === '1234'){
        //     //console.log('Successful')
        //     AuthenticationService.registerSuccessfulAdminLoginForJwt(this.state.username, this.state.password)
        //     this.props.history.push('/home')// this.setState({showSuccessMsg: true})
        //     // this.setState({hasLoginFailed: false})
        // }
        // else {
        //     console.log('Failed')
        //     this.setState({showSuccessMsg: false})
        //     this.setState({hasLoginFailed: true})
        // }

        if((this.state.username === 'raluq' || this.state.username === 'lidia')  && this.state.password === '1234')
            {
                AuthenticationService.executeJwtAuthenticationService(this.state.username, this.state.password)
                    .then(
                        (response) => {
                            AuthenticationService.registerSuccessfulAdminLoginForJwt(this.state.username, response.data.token)
                            this.props.history.push(`/home`)
                            console.log(this.props.history.toString())
                        }
                    ).catch(
                    () => {
                        console.log('Failed')
                        this.setState({showSuccessMsg: false})
                        this.setState({hasLoginFailed: true})
                    })
            }

    }


    render() {

        let {username, password} = this.state
        return (
            <div className={"container"}>
                <div className={"screen"}>
                    <div className={"screen__content"}>
                        <Formik
                            initialValues={{username,password}}
                            onSubmit={this.loginClicked}
                            validateOnChange={false}
                            validateOnBlur={false}
                            validate={this.validate}
                            enableReinitialize={true}

                        >
                            {(props) =>
                                (
                                    <Form className={"login"}>
                                        <div className={"login__field"}>
                                            <i className="login__icon fas fa-user"/>
                                            <input type="text" className="login__input" name={"username"}
                                                   placeholder="User name / Email"
                                                   value={this.state.username} onChange={this.handleChange}/>
                                        </div>
                                        <div className="login__field">
                                            <i className="login__icon fas fa-lock"/>
                                            <input type="password" className="login__input" name={"password"}
                                                   placeholder="Password"
                                                   value={this.state.password} onChange={this.handleChange}/>
                                        </div>
                                        <button className="button login__submit" type={"submit"}
                                                onSubmit={this.loginClicked}>
                                            <span className="button__text">Log In Now</span>
                                            <i className="button__icon fas fa-chevron-right"/>
                                        </button>
                                    </Form>)
                            }
                        </Formik>
                    </div>
                    <div className="screen__background">
                        <span className="screen__background__shape screen__background__shape4"/>
                        <span className="screen__background__shape screen__background__shape3"/>
                        <span className="screen__background__shape screen__background__shape2"/>
                        <span className="screen__background__shape screen__background__shape1"/>
                    </div>
                </div>
            </div>

        )
    }
}

export default AdminLoginComponent;