import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import Books from './App'
import { Link } from 'react-router-dom'

class BookShelfChanger extends Component {

    changeShelf = (e, book) => {
        BooksAPI.update(book, e.target.value)
        this.props.update(book, e.target.value)  
    }
	render () {
    
    const { book, myBooks } = this.props;
    // console.log(myBooks)
        // if(books.includes(book)) {console.log('tadam')}
        // books.filter((b) => ())
        // let matchBook;
        // matchBook = myBooks.filter((b) => (b.id === book.id) ? book.shelf = b.shelf : book.shelf = 'none')
        if(myBooks && myBooks.filter((b) => (b.id === book.id)).length > 0){
            book.shelf = myBooks.filter((b) => (b.id === book.id))[0].shelf
        }
        if(!book.shelf ) {
            book.shelf = 'none'
        }
    	return (
            <div>
        	<select value={book.shelf} onChange={(e) => {this.changeShelf(e, book)}}>
                <option value="move" disabled >Move to...</option>
                <option value="currentlyReading" >Currently Reading</option>
                <option value="wantToRead" >Want to Read</option>
                <option value="read" >Read</option>
                <option value="none" >None</option>
            </select>
                
            </div>
        )
    }
}

export default BookShelfChanger