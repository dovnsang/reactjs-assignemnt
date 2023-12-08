import React from 'react'

function FilterInput({ filterValue, setFilterValue }) {
    return (
        <form className="form-inline">
            <input id='filter' type="text" className="form-control mr-2"
                value={filterValue}
                onChange={(e) => setFilterValue(e.target.value)}
            />
        </form>
    )
}

export default FilterInput