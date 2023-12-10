import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../../components/Sidebar'
import './styles.css'

const RootLayout = () => {
    const [isSidebarOpen, setSidebar] = useState(false);

    const toggleSidebar = () => {
        setSidebar(!isSidebarOpen)
    }

    return (
        <>
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            <main className={`main ${isSidebarOpen ? '' : 'sidebar-hide'}`}>
                <Outlet />
            </main>

        </>
    )
}

export default RootLayout