import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import DisplayBooks from './DisplayBooks'
import * as BooksAPI from './BooksAPI'


class SearchBooks extends Component {
  state = {
    books:[]
  }
  updateQuery = (query) => {
    this.setState({ query: query})
  }
  searchBooks = (text) => {
    BooksAPI.search(text).then((books) => {
          if(text === ''|| books.error)
          {
            this.setState({ books:[] })
          }else{
            this.setState({ books })
          }
          
        }).catch(()=>  this.setState({ books:[] }))
  }



  render() {
    const { books } = this.state;
    const {update, myBooks} = this.props;
    


    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to='/' className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            
            <input
              type="text"
              placeholder="Search by title or author"

              value={this.state.query}
              onInput={(e) => this.searchBooks(e.target.value)}
              
            />

          </div>
        </div>
        <div className="search-books-results">
          <DisplayBooks 
            myBooks={myBooks}
            books={books}
            update={update}
            />        
        </div>
      </div>
    )
  }
}
export default SearchBooks
