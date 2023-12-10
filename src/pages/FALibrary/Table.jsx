import React, { useState } from 'react'
import Modal from './Modal'

const Table = ({ books, setBooks }) => {
    const [currentBook, setCurrentBook] = useState({})
    const [showModal, setShowModal] = useState(false)

    const handleDelete = (book) => {
        setCurrentBook(book)
        setShowModal(true)
    }

    const deleteBook = () => {
        setBooks([...books.filter(book => book.id !== currentBook.id)])
    }

    return (
        <div className="p-2 border rounded">
            <h4 className="">Books</h4>
            <div className="cardbody">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Cover</th>
                            <th>Title</th>
                            <th>Category</th>
                            <th>Author</th>
                            <th>Release Year</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {books.map(book => (
                            <tr key={book.id}>
                                <td className="align-middle">{book.id}</td>
                                <td>
                                    <div style={{ width: '80px', height: '100px' }}
                                        className='d-flex justify-content-center align-items-center bg-secondary text-light rounded'
                                    >
                                        100x80
                                    </div>
                                </td>
                                <td className="align-middle">{book.title}</td>
                                <td className="align-middle">{book.category}</td>
                                <td className="align-middle">{book.author}</td>
                                <td className="align-middle">{book.releaseYear}</td>
                                <td className='align-middle'>
                                    <button className="btn btn-primary mr-2">Edit</button>
                                    <button className="btn btn-danger"
                                        onClick={() => handleDelete(book)}
                                    >Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {showModal &&
                <Modal
                    setShowModal={setShowModal}
                    body={`Delete ${currentBook.title}?`}
                    title={' '}
                    ok={'Yes'}
                    cancel={'No'}
                    onOk={deleteBook}
                />}
        </div>
    )
}

export default Table