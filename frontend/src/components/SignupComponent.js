import React, {Component} from "react";
import '../api/CSS/LoginCss.css'
import {Formik, Form, ErrorMessage, Field} from "formik";
import AuthenticationService from "./AuthenticationService";
class SignupComponent extends Component{

    constructor(props) {
        super(props);
        this.state = {
            user_id: this.props.match.params.user_id,
            username: '',
            password: '',
            email: '',
            address: '',
            hasLoginFailed: false,
            showSuccess: false
        }
        this.signupClicked = this.signupClicked.bind(this)
        this.validate = this.validate.bind(this)
    }

    // componentDidMount() {
    //     if(this.state.userId === -1){
    //         return
    //     }
    // }

    validate(values){
        let errors = {}
        // console.log(values)
        if(!values.username){
            errors.username = 'Enter a username'
        }
        if(!values.email){
            errors.email = 'Enter a valid email'
        }
        if(!values.address){
            errors.address = 'Enter an address'
        }
        if(!values.password){
            errors.password = 'Enter a password'
        }
        return errors
    }

    signupClicked(values){
        let client  = {
            user_id: this.state.user_id,
            username: values.username,
            password: values.password,
            email: values.email,
            address: values.address
        }
        console.log(client)
        if(this.state.user_id === -1 || this.state.user_id === undefined){
            AuthenticationService.createClient(client)
                .then(
                    ()=>{

                        this.props.history.push(`/login`)
                    }
                )

        }else{
            AuthenticationService.updateClient(client, this.state.user_id)
                .then(
                    ()=>{

                        this.props.history.push(`/login`)
                    }
                )
        }



    }


    render(){

        let {username, email, address, password} = this.state
        return(
            <div className={"container"}>
                <div className={"screen"}>
                    <div className={"screen__content"}>
                        <Formik
                            initialValues={{username,email, address, password}}
                            onSubmit={this.signupClicked}
                            validateOnChange={false}
                            validateOnBlur={false}
                            validate={this.validate}
                            enableReinitialize={true}

                        >
                            {(props) =>
                                (<Form className={"login"}>
                                    <ErrorMessage name={"username"} component={"div"}
                                                  className={"alert alert-warning"}/>
                                    <ErrorMessage name={"email"} component={"div"}
                                                  className={"alert alert-warning"}/>
                                    <ErrorMessage name={"address"} component={"div"}
                                                  className={"alert alert-warning"}/>
                                    <ErrorMessage name={"password"} component={"div"}
                                                  className={"alert alert-warning"}/>

                                    <fieldset className={"login__field"}>
                                        <i className="login__icon fas fa-user"/>
                                        <Field type="text" className="login__input"  name={"username"} placeholder="Username"/>
                                    </fieldset>
                                    <fieldset className={"login__field"}>
                                        <i className="login__icon fas fa-user"/>
                                        <Field type="text" className="login__input" name={"email"} placeholder="Email"/>
                                    </fieldset>
                                    <fieldset className={"login__field"}>
                                        <i className="login__icon fas fa-user"/>
                                        <Field type="text" className="login__input" name={"address"} placeholder="Address"/>
                                    </fieldset>
                                    <fieldset className="login__field">
                                        <i className="login__icon fas fa-lock"/>
                                        <Field type="password" className="login__input" name={"password"} placeholder="Password"/>
                                    </fieldset>
                                    <button className="button signup__submit" type={"submit"}
                                            onClick={this.signupClicked}>
                                        <span className="button__text">Sign Up</span>
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

export default SignupComponent;