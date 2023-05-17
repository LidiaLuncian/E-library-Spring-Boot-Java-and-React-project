import React, {Component} from "react";
import AuthenticationService from "./AuthenticationService";
import '../api/CSS/LoginCss.css'
import {Formik, Form, Field} from "formik";

class LogInComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            hasLoginFailed: false,
            showSuccessMsg: false,
        }
        this.handleChange = this.handleChange.bind(this);
        this.clientLoginClicked = this.clientLoginClicked.bind(this);
        this.signupClicked = this.signupClicked.bind(this)
    }

    handleChange(event) {
        console.log(this.state);
        this.setState(
            {
                [event.target.name]: event.target.value
            }
        )
    }

    signupClicked() {
        this.props.history.push('/signup')
    }

    clientLoginClicked() {
        // if(this.state.username === 'lidia' && this.state.password === '1234'){
        //     //console.log('Successful')
        //     AuthenticationService.registerSuccessfulClientLoginForJwt(this.state.username, this.state.password)
        //     this.props.history.push('/home')// this.setState({showSuccessMsg: true})
        //     // this.setState({hasLoginFailed: false})
        // }
        // else {
        //     console.log('Failed')
        //     this.setState({showSuccessMsg: false})
        //     this.setState({hasLoginFailed: true})
        // }

        AuthenticationService.executeJwtAuthenticationService(this.state.username, this.state.password)
            .then(
                (response) => {
                    AuthenticationService.registerSuccessfulClientLoginForJwt(this.state.username, response.data.token)
                    this.props.history.push(`/home`)
                }
            ).catch(
            () => {
                this.setState({showSuccessMsg: false})
                this.setState({hasLoginFailed: true})
            }
        )
    }


    render() {
        let {username, password} = this.state

        return (
            <div className={"container"}>
                <div className={"screen"}>
                    <div className={"screen__content"}>
                        <Formik
                            initialValues={{username,password}}
                            onSubmit={this.clientLoginClicked}
                            validateOnChange={false}
                            validateOnBlur={false}
                            validate={this.validate}
                            enableReinitialize={true}
                        >
                            {() => (
                                <Form className={"login"}>
                                    <fieldset className={"login__field"}>
                                        <i className="login__icon fas fa-user"/>
                                        <Field type="text" className="login__input" name={"username"}
                                               placeholder="User name / Email"
                                               value={this.state.username} onChange={this.handleChange}/>
                                    </fieldset>
                                    <fieldset className="login__field">
                                        <i className="login__icon fas fa-lock"/>
                                        <Field type="password" className="login__input" name={"password"}
                                               placeholder="Password"
                                               value={this.state.password} onChange={this.handleChange}/>
                                    </fieldset>
                                    <button className="button login__submit" type={"submit"}
                                            onSubmit={this.clientLoginClicked}>
                                        <span className="button__text">Log In Now</span>
                                        <i className="button__icon fas fa-chevron-right"/>
                                    </button>
                                    <div className={"signup"}>
                                        <label>Don't have an account? SignUp now!</label>
                                        <button className="button signup__submit" type={"submit"}
                                                onClick={this.signupClicked}>SignUp
                                        </button>
                                    </div>
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

export default LogInComponent