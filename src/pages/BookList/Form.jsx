import React, { useEffect, useState } from 'react'
import { FormType } from '../../constants/common'

const Form = ({ className, currentCartItem, cart, setCart, currentForm }) => {
    const [formData, setFormData] = useState({})
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    // If user change book on click, change value of the input fields to current book
    useEffect(() => {
        setFormData(({ ...currentCartItem }))
    }, [currentCartItem])


    // When quantity change, update the total prices in form, also clear all messages
    useEffect(() => {
        if (currentCartItem && currentCartItem.price) { // if currentCartItem truthy, update total prices in form
            const total = formData.quantity * currentCartItem.price
            setFormData(prev => ({ ...prev, total }))
        }
        setError('')
        setSuccess('')
    }, [formData.quantity, currentCartItem])

    // Validate form data, the id is the book id
    const validate = ({ id, quantity }) => {
        let isValid = true
        if (!id) {
            setError('Please select a book.')
            isValid &&= false
        } else if (quantity === '') {
            setError('Quantity is required.')
            isValid &&= false
        } else if (!(/^-?\d+$/).test(quantity)) {
            setError('Quantity must be an integer.')
            isValid &&= false
        } else if (quantity < 0 || quantity > 50) {
            setError('Quantity must between 0-50.')
            isValid &&= false
        } else {
            setError('')
        }
        return isValid
    }

    const addToCart = (cartItem) => {
        if (cartItem.quantity <= 0) {
            setSuccess('')
            return
        }

        let newItem = cart.find(item => item.id === cartItem.id)
        if (!newItem) { // if cart does not contains newItem, push newItem to cart
            cart.push(cartItem)
            setCart([...cart])
        } else { // else, update item quantity and total
            cart = cart.map(item => {
                if (item.id === currentCartItem.id) {
                    item.quantity += cartItem.quantity
                }
                item.total = item.quantity * item.price
                return item
            })
            setCart([...cart])
        }
        setSuccess('Succesfully. Book has been add to your cart')
    }

    const updateCart = (cartItem) => {
        let newCart = []
        if (cartItem.quantity === 0) {
            newCart = cart.filter(item => item.id !== cartItem.id)
        } else {
            newCart = cart.map(item => {
                if (item.id === cartItem.id) {
                    return cartItem
                }
                return item
            })
        }
        setCart([...newCart])
        setSuccess('Sucessfully! Your cart has been updated')
    }

    const onSubmit = (e) => {
        e.preventDefault()

        if (validate(formData)) {
            if (currentForm === FormType.ADD) {
                addToCart(formData)
            } else {
                updateCart(formData)
            }
        }
    }

    const handleQuantityChange = (e) => {
        const value = e.target.value
        if ((/^\d*$/).test(value)) // keep the quantity input number only
            setFormData(prev => ({ ...prev, quantity: Number(value) }))
    }

    return (
        <div className={`card ${className}`}>
            <h2 className="card-header">Form</h2>
            <form className="card-body">
                <div className="row mb-3">
                    <div>
                        <label htmlFor="book" className="form-label">Book</label>
                        <input type="text" id='book' className="form-control" placeholder="What's book you wanna buy?" disabled
                            defaultValue={formData && formData.title && formData.subtitle ?
                                `${formData?.title} - ${formData?.subtitle}` :
                                ''} />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className='col-4'>
                        <label htmlFor="type" className="form-label">Type</label>
                        <input id='type' type="text" className="form-control" disabled
                            defaultValue={formData.type} />
                    </div>
                    <div className='col-4'>
                        <label htmlFor="author" className="form-label">Author</label>
                        <input id='author' type="text" className="form-control" disabled
                            defaultValue={formData.author} />
                    </div>
                    <div className='col-4'>
                        <label htmlFor="public-date" className="form-label">Public Date</label>
                        <input type="text" id='public-date' className="form-control" disabled
                            defaultValue={formData.publicDate} />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className='col-3'>
                        <label htmlFor="price" className="form-label">Price</label>
                        <input id='price' type="text" className="form-control" disabled
                            defaultValue={formData.price} />
                    </div>
                    <div className="col-1 d-flex justify-content-center align-items-end mb-2">X</div>
                    <div className='col-3'>
                        <label htmlFor="quantity" className="form-label">Quantity</label>
                        <input id='quantity' type="text" className="form-control"
                            value={formData.quantity || 0}
                            onChange={handleQuantityChange}
                        />
                    </div>
                    <div className="col-1 d-flex justify-content-center align-items-end mb-2">=</div>
                    <div className='col-4'>
                        <label htmlFor="public-date" className="form-label">Total</label>
                        <input type="text" id='total' className="form-control" disabled
                            value={formData.total || 0}
                        />
                    </div>
                </div>
                <hr />
                <p className="text-danger">{error}</p>
                <p className="text-success">{success}</p>
                <div>
                    <button className="btn btn-primary me-3"
                        onClick={onSubmit}>{currentForm === FormType.ADD ? 'Add to Cart' : 'Update Cart'}</button>
                    <button className="btn btn-light border">Cancel</button>
                </div>
            </form>
        </div>
    )
}

export default Form