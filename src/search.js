import React from 'react';
import Book from './components/book';
import {Link} from 'react-router-dom';
import {update, search, get} from './BooksAPI';
import PropTypes from 'prop-types';
import './App.css'

export default class SearchPage extends React.Component {
  state = {
    validBooks: []
  };

  handleSearchChange = (e) => {
    return search(e.target.value).then((results) => {
      if (results.length) {
        return Promise.all(results.map((book) => {
          return get(book.id);
        })).then((booksWithShelf) => {
          console.log(booksWithShelf)
          this.setState({
            validBooks: booksWithShelf
          })
        });
      }
    })
  };

  handleBookUpdate = (book, newShelf) => {
    return update(book, newShelf).then(() => {
      return this.getBooks();
    });
  }

  render() {
    const {validBooks} = this.state;

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            <input onChange={this.handleSearchChange} type="text" placeholder="Search by title or author"/>
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {
              validBooks
              ?
              validBooks.map((book) => (
                <Book
                  shelf={book.shelf}
                  title={book.title}
                  author={book.authors && book.authors.join(', ')}
                  image={book.imageLinks && book.imageLinks.smallThumbnail}
                  onBookUpdate={(newShelf) => this.handleBookUpdate(book, newShelf)}
                />
              ))
              :
              null
            }
          </ol>
        </div>
      </div>
    );
  }
}