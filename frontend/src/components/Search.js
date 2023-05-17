import React from "react";

const Search = () => (
    <form action="/search" >
        <label htmlFor="header-search">
            <span className="visually-hidden">Search blog posts</span>
        </label>
        <input
            type="text"
            id="header-search"
            placeholder="Search books"
            name='s'
        />
        <button type="submit">Search</button>
    </form>
);

export default Search;