import React, {Component} from "react";
import BookDataService from "../api/service/BookDataService";
import {Form, Formik, Field, ErrorMessage} from "formik";

class BookComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            id: this.props.match.params.id,
            title: '',
            author: '',
            genre: '',
            format: '',
            quantity: 0,
            price: 0,
            imagePath: ''
        }
        this.onSubmit = this.onSubmit.bind(this)
        this.validate = this.validate.bind(this)
    }

    onSubmit(values) {
        let book = {
            id: this.state.id,
            title: values.title,
            author: values.author,
            genre: values.genre,
            format: values.format,
            quantity: values.quantity,
            price: values.price,
            imagePath: values.imagePath
        }

        if (this.state === -1) {
            BookDataService.createBook(book)
                .then(() => {
                    this.props.history.push('/home')
                })
        } else {
            BookDataService.updateBook(this.state.id, book)
                .then(() => {
                    this.props.history.push('/home')
                })
        }
    }

    componentDidMount() {
        if (this.state.id === -1) {
            return
        }
        BookDataService.retrieveBook(this.state.id)
            .then(response => this.setState({
                    title: response.data.title,
                    author: response.data.author,
                    genre: response.data.genre,
                    format: response.data.format,
                    quantity: response.data.quantity,
                    price: response.data.price,
                    imagePath: response.data.imagePath
                }
            ))
    }

    validate(values) {
        let errors = {}
        if (!values.title) {
            errors.title = 'Enter a title'
        }
        if (!values.author) {
            errors.author = 'Enter a title'
        }
        if (values.price <= 0) {
            errors.price = 'Enter a valid price'
        }
        return errors
    }

    render() {
        let {title, author, genre, format, quantity, price, imagePath} = this.state
        return (
            <div>
                <h1>Book</h1>
                <div className={"container"}>
                    <Formik
                        initialValues={{title, author, genre, format, quantity, price, imagePath}}
                        onSubmit={this.onSubmit}
                        validateOnChange={false}
                        validateOnBlur={false}
                        validate={this.validate}
                        enableReinitialize={true}>
                        {
                            (props) =>
                                <Form>
                                    <ErrorMessage name={"description"} component={"div"}
                                                  className="alert alert-warning"/>
                                    <ErrorMessage name={"targetDate"} component={"div"}
                                                  className="alert alert-warning"/>
                                    <fieldset className={"form-group"}>
                                        <label>Title</label>
                                        <Field className={"form-control"} type={"text"} name="title"/>
                                    </fieldset>
                                    <fieldset className={"form-group"}>
                                        <label>Author</label>
                                        <Field className={"form-control"} type={"text"} name="author"/>
                                    </fieldset>
                                    <fieldset className={"form-group"}>
                                        <label>Genre</label>
                                        <Field className={"form-control"} type={"text"} name="genre"/>
                                    </fieldset>
                                    <fieldset className={"form-group"}>
                                        <label>Format</label>
                                        <Field className={"form-control"} type={"text"} name="format"/>
                                    </fieldset>
                                    <fieldset className={"form-group"}>
                                        <label>Quantity</label>
                                        <Field className={"form-control"} type={"text"} name="quantity"/>
                                    </fieldset>
                                    <fieldset className={"form-group"}>
                                        <label>Price</label>
                                        <Field className={"form-control"} type={"text"} name="price"/>
                                    </fieldset>
                                    <fieldset className={"form-group"}>
                                        <label>Image</label>
                                        <Field className={"form-control"} type={"text"} name="image"/>
                                    </fieldset>
                                    <button className={"btn btn-success"} type={"submit"}>Save</button>
                                </Form>
                        }
                    </Formik>
                </div>
            </div>
        )
    }
}
export default BookComponent