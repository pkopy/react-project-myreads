import React, {Component} from 'react'
import DisplayBooks from './DisplayBooks';


class MyReads extends Component {
	state ={
		
	}

	render () {
		const { books, update } = this.props;
		// const {} = this.state;
	
    	return (
        	<div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
          	    <div className="bookshelf">
          			<h2 className="bookshelf-title">Currently Reading</h2>
          			<div className="bookshelf-books">
                        <DisplayBooks 
                        books={books.filter((book) => book.shelf ==='currentlyReading')}
                        update={update}
                        />
          			</div>
          	    </div>
                <div className="bookshelf">
          			<h2 className="bookshelf-title">Want to read</h2>
          			<div className="bookshelf-books">
                        <DisplayBooks 
                        books={books.filter((book) => book.shelf ==='wantToRead')} 
                        update={update}
                        />
          			</div>
          	    </div>
							<div className="bookshelf">
          			<h2 className="bookshelf-title">Read</h2>
          			<div className="bookshelf-books">
                        <DisplayBooks 
                        books={books.filter((book) => book.shelf ==='read')} 
                        update={update}
                        />
          			</div>
          	  </div>
          	  
          	</div>
        )
    }
}

export default MyReads