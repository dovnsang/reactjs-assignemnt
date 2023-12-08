import React from 'react'

function TableItem({ user }) {
    return (
        <tr>
            <td>{user.id}</td>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.email}</td>
            <td>{user.gender}</td>
            <td>{user.birthday}</td>
            <td>{user.salary}</td>
            <td>{user.phone}</td>
        </tr>
    )
}

export default TableItem