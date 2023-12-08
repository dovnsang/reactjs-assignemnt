
const Pagination = ({ totalItems, itemsPerPage, currentPage, setCurrentPage, setItemsPerPage }) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);


    const renderPageNumbers = () => {
        const pageNumbers = [];
        for (let i = 1; i <= totalPages; i++) {
            pageNumbers.push(
                <li key={i} className={`page-item ${currentPage === i ? 'active' : ''}`}>
                    <a className="page-link" href="#/" onClick={() => setCurrentPage(i)}>{i}</a>
                </li>
            );
        }
        return pageNumbers;
    };

    return (
        <nav className='d-flex justify-content-between align-items-center'>
            <ul className="pagination">
                <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                    <a className="page-link" href="#/" onClick={() => setCurrentPage(currentPage - 1)}>Previous</a>
                </li>
                {renderPageNumbers()}
                <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                    <a className="page-link" href="#/" onClick={() => setCurrentPage(currentPage + 1)}>Next</a>
                </li>
            </ul>
            <div>
                <label htmlFor="items-per-page-select">Number of records</label>
                <select
                    name='itemsPerPageSelect'
                    id='items-per-page-select'
                    value={itemsPerPage}
                    onChange={(e) => setItemsPerPage(e.target.value)}
                >
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                </select>
            </div>
        </nav>
    )
}

export default Pagination