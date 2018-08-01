import React, { Component } from 'react'
//import PropTypes from 'prop-types'
import {Route} from 'react-router-dom'
import { Link } from 'react-router-dom'
// import escapeRegExp from 'escape-string-regexp'
// import sortBy from 'sort-by'
import BookShelfChanger from './BookShelfChanger'
import DisplayBooks from './DisplayBooks'
import * as BooksAPI from './BooksAPI'


class SearchBooks extends Component {
  state = {
    // query: '',
    books:[]
  }
  updateQuery = (query) => {
    this.setState({ query: query})
  }
  searchBooks = (text) => {
    BooksAPI.search(text).then((books) => {
          console.log(books)
          this.setState({ books })
        }).catch(() => {
          this.setState({books:[]})
        })
  }

  // componentDidMount() {
  //   BooksAPI.search(this.state.query).then((books) => {
  //     this.setState({ books })
  //   }).catch(() => {
  //     this.setState({books:[]})
  //   })
  // }

  render() {
    // const { books,  onChangeSearchPage } = this.props;
    const { books } = this.state;
    const {update} = this.props;
    // let showingBooks
    // if (query) {
    //   const match = new RegExp(escapeRegExp(this.state.query), 'i')
    //   showingBooks = books.filter((book) => match.test(book.title) || match.test(book.authors))
    // } else {
    //   showingBooks = books;
    // }

    // showingBooks.sort(sortBy('title'))


    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to='/' className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            {

                  /*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
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
            books={books}
            update={update}
            />        
        </div>
      </div>
    )
  }
}
export default SearchBooks
