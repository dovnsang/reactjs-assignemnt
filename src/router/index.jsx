import React from 'react'
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route
} from 'react-router-dom'
import RootLayout from '../layouts/RootLayout'
import Home from '../pages/Home'
import TodoApp from '../pages/TodoApp'
import NotFound from '../pages/NotFound'
import List from '../pages/List'
import CrudApp from '../pages/CrudApp'
import Table from '../pages/Table'
import FALibrary from '../pages/FALibrary'
import BookList from '../pages/BookList'

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path='todo-app' element={<TodoApp />} />
            <Route path='list' element={<List />} />
            <Route path='table' element={<Table />} />
            <Route path='crud-app' element={<CrudApp />} />
            {/* <Route path='cms' element={< />} /> */}
            <Route path='fa-library' element={<FALibrary />} />
            <Route path='book-list' element={<BookList />} />
            <Route path='*' element={<NotFound />} />
        </Route>
    )
)

export default router