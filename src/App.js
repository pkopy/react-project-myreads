import React from 'react'
import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import MyReads from './MyReads';
import SearchBooks from './SearchBooks'

class BooksApp extends React.Component {
  state = {
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
