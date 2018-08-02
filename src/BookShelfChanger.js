import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'


class BookShelfChanger extends Component {

    changeShelf = (e, book) => {
        BooksAPI.update(book, e.target.value)
        this.props.update(book, e.target.value)  
    }
	render () {
    
    const { book, myBooks } = this.props;
    
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