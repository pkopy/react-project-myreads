import React, { Component } from 'react'
import BookShelfChanger from './BookShelfChanger'

class DisplayBooks extends Component {
    matchBook = (book) => {
      this.props.myBooks.filter((b) => (b.id === book.id))
    }
    
    render () {
    const { books, update, myBooks } = this.props;
        if(this.props.books.length === 0){
          
        }
        return (
            <ol className="books-grid">
            {books.map((book) => (
              
              <li key={book.id}>
                <div className="book">
                  <div className="book-top">
                    <div className="book-cover" style={(book.imageLinks)?{ backgroundImage: `url(${book.imageLinks.thumbnail})`, width: '128px', height: '188px', backgroundRepeat: 'no-repeat', backgroundSize: '100% 100%' }:{backgroundColor:'gray', width: '128px', height: '188px'}} > </div>
                    <div className="book-shelf-changer">
                      <BookShelfChanger book={book}
                      update={update}
                      myBooks={myBooks}
                      />
                    </div>
                  </div>
                  <div className="book-title" >{book.title}</div>
                  <div className="book-authors">
                    {(book.authors)?book.authors.map((author, index) => (
                      <p key={index}>{author}</p>
                    )) : <p>No authors</p>
                    }
                  </div>
                </div>
              </li>
            ))}
          </ol>
        )
    }
}

export default DisplayBooks