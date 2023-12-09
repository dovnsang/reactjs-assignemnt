import React, { useState } from 'react'
import { FormType } from '../../constants/common'
import bookList from '../../data/books.json'
import CartList from './CartList'
import Form from './Form'
import TableBook from './TableBook'
import './styles.css'

const BookList = () => {
    const [currentCartItem, setCartItem] = useState({})
    const [cart, setCart] = useState([])
    const [currentForm, setForm] = useState(FormType.ADD)

    return (
        <div className='row bg-primary p-3 vh-100'>
            {/* Book List */}
            <TableBook className={'col-7'}
                books={bookList}
                currentForm={currentForm}
                setForm={setForm}
                currentCartItem={currentCartItem}
                setCartItem={setCartItem}
            />

            <div className={'col-5 d-flex flex-column gap-3'}>
                {/* Form */}
                <Form className={'flex-shrink-0'}
                    currentForm={currentForm}
                    currentCartItem={currentCartItem}
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
                />
            </div>
        </div>
    )
}

export default BookList