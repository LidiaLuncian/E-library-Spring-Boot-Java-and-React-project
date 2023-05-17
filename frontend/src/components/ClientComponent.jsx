import React, {Component} from "react"
import AuthenticationService from "./AuthenticationService";

class ClientComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user_id: this.props.match.params.user_id,
            username: '',
            password: '',
            email: '',
            address: ''
        }
        this.onSubmit = this.onSubmit.bind(this)
        this.validate = this.validate.bind(this)
    }

    onSubmit(values) {
        let client = {
            user_id: this.state.user_id,
            username: values.username,
            password: values.password,
            email: values.email,
            address: values.address
        }

        if (this.state.user_id === -1) {
            AuthenticationService.createClient(client)
                .then(() => {
                    this.props.history.push('/login')
                })
        } else {
            AuthenticationService.updateClient(this.state.user_id, client)
                .then(() => {
                    this.props.history.push('/login')
                })
        }
    }

    componentDidMount() {
        if (this.state.user_id === -1) {
            return
        }
    }


    validate(values) {
        let errors = {}
        // console.log(values)
        if (!values.username) {
            errors.username = 'Enter a username'
        }
        if (!values.email) {
            errors.email = 'Enter a valid email'
        }
        if (!values.address) {
            errors.address = 'Enter an address'
        }
        if (!values.password) {
            errors.password = 'Enter a password'
        }
        return errors
    }
}

export default ClientComponent;