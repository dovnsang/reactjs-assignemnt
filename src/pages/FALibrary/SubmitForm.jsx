import React, { useState } from 'react'
import { isObjectFalsy } from '../../utils/common'
import { isValidYear } from '../../utils/validator'
import Modal from './Modal'

const InitialState = {
    title: '',
    category: '',
    author: '',
    releaseYear: ''
}

const SubmitForm = ({ bookData, books, setBooks }) => {
    const [input, setInput] = useState(InitialState)
    const [error, setError] = useState(InitialState)
    const [showModal, setShowModal] = useState(false)

    const validateInput = ({ title, category, author, releaseYear }) => {
        let err = {}

        if (!(/^[a-zA-Z0-9\s]{10,}$/).test(title))
            err.title = 'Title is only allow alphabet, whitespace, number and must be at least 10 characters.'
        if (!category)
            err.category = 'Please select a category.'
        if (!(/^[a-zA-Z0-9\s]{6,}$/).test(author))
            err.author = 'Author is only allow alphabet, whitespace, number and must be at least 6 characters.'
        if (!isValidYear(releaseYear))
            err.releaseYear = 'Release Year must between 1900 and now.'

        setError(err)
        return isObjectFalsy(err)
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
            input.id = bookData.length + 1
            console.log('input', input)
            books.push(input)
            setBooks([...books])
            setInput(InitialState)
        }
    }

    const handleCancel = () => {
        // do nothing
    }

    const handleOk = () => {
        setInput(InitialState)
        setError(InitialState)
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-row">
                <div className="form-group col">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" id='title'
                        className={`form-control ${error.title ? 'is-invalid' : ''}`}
                        name='title'
                        value={input.title}
                        onChange={handleInputChange}
                    />
                    <div className="invalid-feedback">{error.title}</div>
                </div>
                <div className="form-group col">
                    <label htmlFor="category" className="form-label">Category</label>
                    <select id="category"
                        className={`custom-select ${error.category ? 'is-invalid' : ''}`}
                        name="category"
                        value={input.category}
                        onChange={handleInputChange}
                    >
                        <option value="" disabled>Please select</option>
                        <option value="Truyện kí">Truyện kí</option>
                        <option value="Trinh thám">Trinh thám</option>
                        <option value="Tiểu thuyết">Tiểu thuyết</option>
                    </select>
                    <div className="invalid-feedback">{error.category}</div>
                </div>
                <div className="form-group col">
                    <label htmlFor="author" className="form-label">Author</label>
                    <input type="text" id='author'
                        className={`form-control ${error.author ? 'is-invalid' : ''}`}
                        name='author'
                        value={input.author}
                        onChange={handleInputChange}
                    />
                    <div className="invalid-feedback">{error.author}</div>
                </div>
                <div className="form-group col">
                    <label htmlFor="release-year" className="form-label">Release Year</label>
                    <input type="text" id='releaseYear'
                        className={`form-control ${error.releaseYear ? 'is-invalid' : ''}`}
                        name='releaseYear'
                        value={input.releaseYear}
                        onChange={handleInputChange}
                    />
                    <div className="invalid-feedback">{error.releaseYear}</div>
                </div>
            </div>
            <button type='submit' className="btn btn-primary ml-1 mr-2">Submit</button>
            <button type='button' className="btn btn-outline-primary"
                onClick={() => setShowModal(true)}
            >Cancel</button>
            {showModal && <Modal
                setShowModal={setShowModal}
                modalType={'cancel'}
                title={'Cancel'}
                body={'Cancel editing? Your data maybe lost'}
                okText={'Yes'}
                cancelText={'No'}
                onCancel={handleCancel}
                onOk={handleOk}
            />}
        </form>
    )
}

export default SubmitForm