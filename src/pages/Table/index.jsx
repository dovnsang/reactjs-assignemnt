import userData from '../../data/user.json';
import { useEffect, useState } from 'react';
import FilterInput from './FilterInput';
import Pagination from './Pagination';
import SortSelection from './SortSelection';
import TableItem from './TableItem';
import './style.css';

function Table() {
    let [users, setUsers] = useState([...userData]);
    let [paginatedUsers, setPaginatedUsers] = useState([])
    let [sortField, setSortField] = useState('');
    let [filterValue, setFilterValue] = useState('');
    let [itemsPerPage, setItemsPerPage] = useState(5)
    let [currentPage, setCurrentPage] = useState(1)

    // Sort by field
    useEffect(() => {
        setUsers(prev => [...prev].sort((a, b) => {
            if (sortField.toLowerCase() === 'birthday') {
                const dateA = new Date(formatDate(a[sortField]));
                const dateB = new Date(formatDate(b[sortField]));
                console.log(a[sortField], a[sortField])
                return dateA - dateB;
            }
            return a[sortField] > b[sortField] ? 1 :
                a[sortField] < b[sortField] ? -1 :
                    0;
        }))
    }, [sortField])

    // Filter All
    useEffect(() => {
        setCurrentPage(1);
        const filteredUsers = userData.filter(user => {
            for (const key in user) {
                let value = user[key];
                if (typeof value === 'number') {
                    value = value.toString();
                }
                if (value.toLocaleLowerCase().includes(filterValue.toLocaleLowerCase())) {
                    return true;
                }
            }
            return false;
        });
        setUsers([...filteredUsers]);
    }, [filterValue])

    // Pagination
    useEffect(() => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const slicedUsers = users.slice(startIndex, endIndex);
        setPaginatedUsers([...slicedUsers]);
    }, [currentPage, itemsPerPage, users])

    // Format date String from MM/dd/yyyy to dd/MM/yyyy
    const formatDate = (date) => {
        const dateParts = date.split("/");
        return `${dateParts[1]}/${dateParts[0]}/${dateParts[2]}`
    }

    return (
        <div>
            <h1>A simple web app</h1>
            <div className='d-flex justify-content-between mb-2'>
                <SortSelection
                    sortField={sortField}
                    setSortField={setSortField}
                />
                <FilterInput
                    filterValue={filterValue}
                    setFilterValue={setFilterValue}
                />
            </div>
            <table className='table'>
                <thead>
                    <tr>
                        <th scope='col'>Id</th>
                        <th scope='col'>First Name</th>
                        <th scope='col'>Last Name</th>
                        <th scope='col'>Email</th>
                        <th scope='col'>Gender</th>
                        <th scope='col'>Birthday</th>
                        <th scope='col'>Salary</th>
                        <th scope='col'>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {paginatedUsers.map((user, index) => (
                        <TableItem key={index} user={user} />
                    ))}
                </tbody>
            </table>
            <Pagination
                totalItems={users.length}
                itemsPerPage={itemsPerPage}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                setItemsPerPage={setItemsPerPage}
            />
        </div>
    )
}

export default Table