import React from 'react';
import Book from './book';
import PropTypes from 'prop-types';
import {getShelfTitle} from '../general-helper';

import '../App.css'

export default class Shelf extends React.Component {
  static propTypes = {
    books: PropTypes.array,
    title: PropTypes.string,
    onBookUpdate: PropTypes.func.isRequired
  };

  render() {
    const {books, title, onBookUpdate} = this.props;

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{getShelfTitle(title)}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {
              books.map((book, index) => (
                <li key={index}>
                  <Book
                    onBookUpdate={(newShelf) => onBookUpdate(book, newShelf)}
                    author={book.authors.join(', ')}
                    image={book.imageLinks.smallThumbnail}
                    title={book.title}
                  />
                </li>
              ))
            }
          </ol>
        </div>
      </div>
    );
  }
}