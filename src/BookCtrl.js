import React from 'react'


function BookCtrl(props) {
    return (
        <div className="book-shelf-changer">
            <select
                value={props.book.shelf}
                onChange={event => props.handler(props.book, event.target.value)}
            >
                <option value="none" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
            </select>
        </div>
    )
}

export default BookCtrl

