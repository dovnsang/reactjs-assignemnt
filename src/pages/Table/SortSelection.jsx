import React from 'react'

function SortSelection({ sortField, setSortField }) {
    return (
        <div>
            {/* <h2 className='d-inline'>Order By </h2> */}
            <label htmlFor="sort-select"></label>
            <select name="sortSelect" id="sort-select" value={sortField} onChange={(e) => setSortField(e.target.value)}>
                <option value="" disabled>Select field to sort</option>
                <option value="id">Id</option>
                <option value="firstName">First Name</option>
                <option value="lastName">Last Name</option>
                <option value="email">Email</option>
                <option value="birthday">Birthday</option>
                <option value="salary">Salary</option>
            </select>
        </div>
    )
}

export default SortSelection