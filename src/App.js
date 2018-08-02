import React from 'react'
import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import MyReads from './MyReads';
import SearchBooks from './SearchBooks'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    // showSearchPage: false,
    books:[]
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  searchBooks = (text) => {
    BooksAPI.search(text).then((books) => {
          console.log(books)
          this.setState({ books })
        }).catch(() => {
          this.setState({books:[]})
        })
  }

  // onChangeSearchPage = () => {
  //   if (this.state.showSearchPage) {
  //     this.setState({ showSearchPage: false })
  //   } else {
  //     this.setState({ showSearchPage: true })
  //   }

  // }

  changeShelf = (book, shelf) => {
    book.shelf = shelf
    this.setState((state) => ({
      
      books: state.books.filter((b) => b.id !== book.id)
      
    }))
    this.setState((state) => ({
      books: state.books.concat([book])
    }))
    
  }
  render() {
    const {books} = this.state
    return (
      <div className="app">
        <Route path='/search' render={() => (
          <SearchBooks
            myBooks={books}
            update={this.changeShelf}
          />
          // <div className="search-books">
          //   <div className="search-books-bar">
          //     <Link to='/'className="close-search" >Close</Link>
          //     <div className="search-books-input-wrapper">
          //       {/*
          //         NOTES: The search from BooksAPI is limited to a particular set of search terms.
          //         You can find these search terms here:
          //         https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

          //         However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
          //         you don't find a specific author or title. Every search is limited by search terms.
          //       */}
          //       <input 
          //         type="text" 
          //         placeholder="Search by title or author"
          //         onInput={(e) => this.searchBooks(e.target.value)}
          //         />
                  


          //     </div>
          //   </div>
          //   <div className="search-books-results">
          //     <ol className="books-grid"></ol>
          //   </div>
          // </div>
        )}/>
        
        <Route exact path='/' render={() => (

          <div>
            <MyReads 
              books={books}
              update={this.changeShelf}
            />
            <div className="open-search">
              <Link to='/search'>Add a book</Link>
            </div>
          </div>
        )}/>
      
      </div>
    )
  }
}

export default BooksApp
