import { useState } from 'react'
import { FormType } from '../../constants/common'
import bookData from '../../data/books1.json'
import Navbar from './Navbar'
import SearchForm from './SearchForm'
import SubmitForm from './SubmitForm'
import Table from './Table'
import './styles.css'

const FALibrary = () => {
    const [books, setBooks] = useState(bookData)
    const [currentForm, setForm] = useState(FormType.SUBMIT)

    const changeForm = (type) => {
        setForm(type)
        setBooks(bookData)
    }

    return (
        <>
            <Navbar className={'mb-3'} />
            <div className="container">
                <div className='p-3 mb-3 border'>
                    <ul className="nav nav-tabs">
                        <li className="nav-item" onClick={() => changeForm(FormType.SEARCH)}>
                            <a className={`nav-link ${currentForm === FormType.SEARCH ? 'active' : ''}`} href="# ">Search</a>
                        </li>
                        <li className="nav-item" onClick={() => changeForm(FormType.SUBMIT)}>
                            <a className={`nav-link ${currentForm === FormType.SUBMIT ? 'active' : ''}`} href="# ">Form</a>
                        </li>
                    </ul>
                    <div className='nav-content p-4'>
                        {currentForm === FormType.SEARCH && (
                            <SearchForm
                                bookData={bookData}
                                books={books}
                                setBooks={setBooks}
                            />
                        )}
                        {currentForm === FormType.SUBMIT && (
                            <SubmitForm
                                bookData={bookData}
                                books={books}
                                setBooks={setBooks}
                            />
                        )}
                    </div>
                </div >
                <Table
                    books={books}
                    setBooks={setBooks}
                />
            </div>
        </>
    )
}

export default FALibrary