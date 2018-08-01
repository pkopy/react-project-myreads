import React, { Component } from 'react'
import BookShelfChanger from './BookShelfChanger'

class DisplayBooks extends Component {
    render () {
    const { books, update } = this.props;
        return (
            <ol className="books-grid">
            {books.map((book) => (
              <li key={book.id}>
                <div className="book">
                  <div className="book-top">
                    <div className="book-cover" style={{ backgroundImage: `url(${book.imageLinks.thumbnail})`, width: '128px', height: '188px' }}> </div>
                    <div className="book-shelf-changer">
                      <BookShelfChanger book={book}
                      update={update}
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