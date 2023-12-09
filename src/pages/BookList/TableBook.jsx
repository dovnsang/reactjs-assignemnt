import React from 'react'
import { FormType } from '../../constants/common'

const TableBook = ({ className, books, currentCartItem, setCartItem, currentForm, setForm }) => {

    const handleBookClick = (book) => {
        setCartItem({
            ...book,
            quantity: 0,
            total: 0
        })
        setForm(FormType.ADD)
    }

    return (
        <div className={`card ${className}`}>
            <h2 className="card-header">Book-list</h2>
            <div className="card-body" style={{ maxHeight: '840px', overflowY: 'auto' }}>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>Book</th>
                            <th>Type</th>
                            <th>Author</th>
                            <th>Price</th>
                            <th>Public date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {books.map(book => (
                            <tr key={book.id}
                                className={`book align-middle ${book.id === currentCartItem.id && currentForm === FormType.ADD ? 'active' : ''}`}
                                onClick={() => handleBookClick(book)}>
                                <td className='d-flex align-items-center'>
                                    <div style={{ width: '60px', height: '40px' }}
                                        className='mr-2 border'>
                                        <img src="https://s26162.pcdn.co/wp-content/uploads/sites/2/2022/05/Book.jpg" alt="book"
                                            className='w-100 h-100' />
                                    </div>
                                    <div>
                                        <h4>{book.title}</h4>
                                        <span>{book.subtitle}</span>
                                    </div>
                                </td>
                                <td>{book.type}</td>
                                <td>{book.author}</td>
                                <td>${book.price.toFixed(2)}</td>
                                <td>{book.publicDate}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default TableBook