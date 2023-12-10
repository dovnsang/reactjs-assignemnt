import React, { useState } from 'react'
import { isObjectFalsy } from '../../utils/common'

const InitialState = {
    keyword: '',
    category: ''
}

const SearchForm = ({ bookData, books, setBooks }) => {
    const [input, setInput] = useState(InitialState)
    const [error, setError] = useState(InitialState)

    const validateInput = ({ keyword, category }) => {
        let errors = {}

        if (!(/^[a-zA-Z0-9\s]{3,}$/).test(keyword))
            errors.keyword = 'Keyword must be alphabet, whitespace or number (at least 3 characters).'

        if (category === '')
            errors.category = 'Please select a category.'

        setError(errors)
        return isObjectFalsy(errors)
    }

    const searchBook = ({ keyword, category }) => {
        console.log('{keyword, category}', { keyword, category })
        let newBooks = []
        if (category === 'All')
            newBooks = bookData.filter(book => book.title.toLowerCase().includes(keyword))
        else
            newBooks = bookData.filter(book => book.category === category && book.title.toLowerCase().includes(keyword))
        setBooks(newBooks)
    }



    const handleInputChange = (e) => {
        const { name, value } = e.target
        setInput(prev => ({ ...prev, [name]: value }))
        if (error[name])
            setError(prev => ({ ...prev, [name]: '' }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (validateInput(input)) {
            searchBook(input)
        }
    }

    const handleClear = () => {
        setBooks(bookData)
        setInput(InitialState)
        setError(InitialState)
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-row">
                <div className="form-group col">
                    <label htmlFor="keyword" className="form-label">Keyword</label>
                    <input type="text" id="keyword" placeholder='Enter 3 characters for search'
                        className={`form-control ${error.keyword ? 'is-invalid' : ''}`}
                        name='keyword'
                        value={input.keyword}
                        onChange={handleInputChange}
                    />
                    <div className="invalid-feedback">{error.keyword}</div>
                </div>
                <div className="form-group col">
                    <label htmlFor="category" className="form-label">Category</label>
                    <select
                        className={`custom-select ${error.category ? 'is-invalid' : ''}`}
                        name="category"
                        value={input.category}
                        onChange={handleInputChange}
                    >
                        <option value="" disabled>Select for Search</option>
                        <option value="All">All</option>
                        <option value="Truyện kí">Truyện kí</option>
                        <option value="Trinh thám">Trinh thám</option>
                        <option value="Tiểu thuyết">Tiểu thuyết</option>
                    </select>
                    <div className="invalid-feedback">{error.category}</div>
                </div>
                <div className="form-group col pt-4">
                    <label htmlFor="nothing" className="form-label d-block"></label>
                    <button type='submit' className="btn btn-primary mr-2">Search</button>
                    <button type='button' className="btn btn-outline-primary"
                        disabled={isObjectFalsy(input) && isObjectFalsy(error)}
                        onClick={handleClear}
                    >Clear</button>
                </div>
            </div>
        </form>
    )
}

export default SearchForm