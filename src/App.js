import React from 'react'
import {getAll, update} from './BooksAPI';
import {groupBy} from './general-helper';
import {Link} from 'react-router-dom';
import {shelfConstants} from './constants';
import Shelf from './components/shelf';
// import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    this.getBooks();
  }

  getBooks() {
    return getAll().then((books) => {
      this.setState({
        books
      })
    });
  }

  handleBookUpdate = (book, newShelf) => {
    return update(book, newShelf).then(() => {
      return this.getBooks();
    });
  }

  render() {
    const {books} = this.state;
    const shelves = groupBy(books, 'shelf');

    return (
      <div className="app">
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              {
                Object.keys(shelfConstants).map((key, index) => (
                  <Shelf
                    key={index}
                    onBookUpdate={this.handleBookUpdate}
                    title={shelfConstants[key]}
                    books={shelves[shelfConstants[key]] || []}
                  />
                ))
              }
            </div>
          </div>
          <div className="open-search">
            <Link to='/search'>Add a book</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default BooksApp
