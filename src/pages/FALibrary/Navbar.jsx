import React from 'react'

const Navbar = ({ className }) => {
    return (
        <div className={`${className} navbar navbar-dark bg-primary`}>
            <a className="navbar-brand" href="# ">FA Library</a>
            <div className="d-flex align-items-center font-weight-bold">
                <div style={{ width: '40px', height: '40px' }}
                    className='rounded-circle bg-light d-flex justify-content-center align-items-center mr-2'
                >
                    U
                </div>
                <div className="d-inline-block text-white">
                    User
                </div>
            </div>
        </div>
    )
}

export default Navbar