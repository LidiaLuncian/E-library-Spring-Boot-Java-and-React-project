import {Component} from "react";
import BookDataService from "../api/service/BookDataService";

class ListAllBooksComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            books: [],
            message: null
        }
        this.deleteBookClicked = this.deleteBookClicked.bind(this);
        this.refreshBooks = this.refreshBooks.bind(this);
        this.updateBookClicked = this.updateBookClicked.bind(this);
        this.addBooks = this.addBooks.bind(this);
    }

    componentDidMount() {
        this.refreshBooks()
    }

    refreshBooks() {
        BookDataService.retrieveAllBooks()
            .then(
                response => {
                    this.setState({books: response.data})
                }
            )
    }

    deleteBookClicked(id) {
        BookDataService.deleteBook(id)
            .then(
                response => {
                    this.setState({message: `You have deleted book ${id}`})
                    this.refreshBooks()
                }
            )
    }

    updateBookClicked(id) {
        this.props.history.push(`/books/${id}`)

    }

    addBooks(id) {
        this.props.history.push(`/books/-1`)
    }

    render() {
        return (<div>
                <h1>List</h1>
                {this.state.message && <div className={"alert alert-success"}>{this.state.message}</div>}
                <div className={"container"}>
                    <table className={"table"}>
                        <thead>
                        <tr>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Genre</th>
                            <th>Format</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Image</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.books.map(
                                book =>
                                    <tr key={book.id}>
                                        <td>{book.title}</td>
                                        <td>{book.author}</td>
                                        <td>{book.genre}</td>
                                        <td>{book.format}</td>
                                        <td>{book.quantity}</td>
                                        <td>{book.price}</td>
                                        <td>{book.image}</td>
                                        <td>
                                            <button className={"btn btn-warning"}
                                                    onClick={() => this.deleteBookClicked(book.id)}>Delete
                                            </button>
                                        </td>
                                        <td>
                                            <button className={"btn btn-success"}
                                                    onClick={() => this.updateBookClicked(book.id)}>Update
                                            </button>
                                        </td>
                                    </tr>
                            )
                        }
                        </tbody>
                    </table>
                    <div className={"row"}>
                        <button className={"btn btn-success"} onClick={this.addBooks}>Add</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default ListAllBooksComponent;