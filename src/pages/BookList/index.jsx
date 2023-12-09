import React, { useState } from 'react'
import { FormType } from '../../constants/common'
import bookList from '../../data/books.json'
import CartList from './CartList'
import Form from './Form'
import TableBook from './TableBook'
import './styles.css'
import DeleteModal from './DeleteModal'

const BookList = () => {
    const [currentCartItem, setCartItem] = useState({})
    const [cart, setCart] = useState([])
    const [currentForm, setForm] = useState(FormType.ADD)
    const [showDeleteModal, setDeleteModal] = useState(false)

    return (
        <div className='row bg-primary p-3 vh-100'>
            {showDeleteModal && (
                <DeleteModal
                    cart={cart}
                    setCart={setCart}
                    setDeleteModal={setDeleteModal}
                    currentCartItem={currentCartItem} />
            )}
            {/* Book List */}
            <TableBook className={'col-7'}
                books={bookList}
                currentForm={currentForm}
                setForm={setForm}
                currentCartItem={currentCartItem}
                setCartItem={setCartItem}
            />

            <div className={'col-5 border d-flex flex-column pr-0'} style={{ gap: '18px' }}>
                {/* Form */}
                <Form className={'flex-shrink-0'}
                    currentForm={currentForm}
                    setForm={setForm}
                    currentCartItem={currentCartItem}
                    setCartItem={setCartItem}
                    cart={cart}
                    setCart={setCart}
                />
                {/* Cart List */}
                <CartList className={'flex-grow-1'}
                    currentForm={currentForm}
                    setForm={setForm}
                    cart={cart}
                    setCart={setCart}
                    currentCartItem={currentCartItem}
                    setCartItem={setCartItem}
                    setDeleteModal={setDeleteModal}
                />
            </div>
        </div>
    )
}

export default BookList