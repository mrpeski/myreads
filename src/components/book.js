import React from 'react';
import PropTypes from 'prop-types';
import '../App.css'

export default class Book extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    onBookUpdate: PropTypes.func.isRequired
  };

  handleBookUpdate = (event) => {
    this.props.onBookUpdate(event.target.value);
  };

  render() {
    const {title, author, image, onBookUpdate} = this.props;

    return (
      <div>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${image}")` }}></div>
            <div className="book-shelf-changer">
              <select onChange={this.handleBookUpdate}>
                <option value="none" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{title}</div>
          <div className="book-authors">{author}</div>
        </div>
      </div>
    );
  }
}