import React from 'react'
import { NavLink } from 'react-router-dom'

const links = [
    {
        path: '/',
        text: 'Home'
    },
    {
        path: '/todo-app',
        text: 'Todo App'
    },
    {
        path: '/list',
        text: 'List'
    },
    {
        path: '/table',
        text: 'Table'
    },
    {
        path: '/crud-app',
        text: 'CRUD App'
    },
    {
        path: '/cms',
        text: 'CMS'
    }
]

const Sidebar = ({ isOpen, toggleSidebar }) => {
    return (
        <nav className={`sidebar vh-100 border ${isOpen ? '' : 'sidebar-hide'}`}>
            <div className="py-4 px-2 display-4">ReactJS Assignments</div>
            <ul className='list-group rounded-0'>
                {links.map((link, index) => (
                    <li key={index}>
                        <NavLink to={link.path}
                            className='list-group-item list-group-item-action'>
                            {link.text}
                        </NavLink>
                    </li>
                ))}
            </ul>
            <div className='toggle-sidebar__wrapper d-flex align-items-center'>
                <button
                    className='toggle-sidebar btn btn-outline-primary bg-transparent'
                    onClick={toggleSidebar}
                >
                    {isOpen ? '<' : '>'}
                </button>
            </div>
        </nav>
    )
}

export default Sidebar