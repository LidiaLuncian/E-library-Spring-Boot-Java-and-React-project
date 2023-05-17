import React, {Component} from "react";
import BookDataService from "../api/service/BookDataService";
import AuthenticationService from "./AuthenticationService";

class GenreSearchComponent extends Component{

    constructor(props) {
        super(props);
        this.state ={
            books: []
        }
        this.refreshPage = this.refreshPage.bind(this);

    }


    componentDidMount() {
        console.log('componentDidMount')
        this.refreshPage()
    }

    refreshPage() {
        const genre = this.props.match.params.name
        BookDataService.retrieveBookByGenre(genre)
            .then(
                response => {
                    console.log(response)
                    this.setState({
                        books: response.data
                    })
                }
            )
    }


    // const posts = [
    //     { id: '1', name: 'action hauhdeuhd' },
    //     { id: '2', name: 'This next post is about Preact' },
    //     { id: '3', name: 'We have yet another React post!' },
    //     { id: '4', name: 'This is the fourth and final post' },
    // ];
    //
    // const filterPosts = (posts, query) => {
    //     if (!query) {
    //         return posts;
    //     }
    //
    //     return posts.filter((post) => {
    //         const postName = post.name.toLowerCase();
    //         return postName.includes(query);
    //     });
    // };
    //
    // const { search } = window.location;
    // const query = new URLSearchParams(search).get('s');
    // console.log(query.toString())
    // const [searchQuery, setSearchQuery] = useState(query || '');
    // const filteredPosts = filterPosts(posts, searchQuery);
    //
    // return (
    //     <div>
    //         <Search />
    //         <ul>
    //             {filteredPosts.map(post => (
    //                 <li key={post.key}>{post.name}</li>
    //             ))}
    //         </ul>
    //     </div>
    // );

    render() {
        const isAdminLoggedIn = AuthenticationService.isAdminLoggedIn()
        return(
            <div>
                Search by {this.props.match.params.name}
                <div className="container">
                    {
                        this.state.books.map(
                            book =>

                                <div  key={book.id}>
                                    <img  src={book.imagePath} alt={"lord of the rings"}/>
                                    <div>Title: {book.title}</div>
                                    <div>Author: {book.author}</div>
                                    <div>Format: {book.format}</div>
                                    <div>Price:{book.price}{!isAdminLoggedIn && <button className={"addbutton"}
                                                                                        onClick={() => this.addToCart(book.id)}>Add</button>}</div>
                                    {isAdminLoggedIn && <div>Quantity: {book.quantity}</div>}
                                </div>
                        )
                    }
                </div>
            </div>
        )
    }

}

export default GenreSearchComponent;