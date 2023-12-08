import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div className='mt-5 pt-5 d-flex flex-column justify-content-center align-items-center'>
            <h1 className='display-1 mb-5'>404 Not Found</h1>
            <Link
                to='/'
                className='display-4'
                replace
            >
                Go back to home  page
            </Link>
        </div>
    )
}

export default NotFound