import {
    NUMBER_ONLY_PATTERN,
    PHONE_PATTERN,
    TEXT_ONLY_PATTERN
} from '../../constants/regex'
import userData from '../../data/users1.json'
import { useRef, useState } from 'react'
import UserItem from './UserItem'
import './styles.css'

const CreateUserError = {
    REQUIRED: 'This field is required.'
}

const CrudApp = () => {
    const formRef = useRef(null)
    const [users, setUsers] = useState([...userData])
    const [userToUpdate, setUserToUpdate] = useState({})
    const [isUpdating, setIsUpdating] = useState(false);
    const [showForm, setShowForm] = useState(false)
    const [input, setInput] = useState({
        id: null,
        name: '',
        age: '',
        address: '',
        phone: ''
    })
    const [errors, setErrors] = useState({
        name: '',
        age: '',
        address: '',
        phone: ''
    })


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setInput(prev => ({ ...prev, [name]: value }))
    }

    const validate = ({
        name, age, address, phone
    }) => {
        let errors = {};

        if (!name) errors.name = CreateUserError.REQUIRED;
        else if (!TEXT_ONLY_PATTERN.test(name)) errors.name = 'Invalid name.';
        else errors.name = '';

        if (!age) errors.age = CreateUserError.REQUIRED;
        else if (!NUMBER_ONLY_PATTERN.test(age)) errors.age = 'Invalid age.';
        else errors.age = '';

        if (!address) errors.address = CreateUserError.REQUIRED;
        else if (!TEXT_ONLY_PATTERN.test(address)) errors.address = 'Invalid address.';
        else errors.address = '';

        if (!phone) errors.phone = CreateUserError.REQUIRED;
        else if (!PHONE_PATTERN.test(phone)) errors.phone = 'Invalid phone.';
        else errors.phone = '';

        setErrors({ ...errors });
        return !errors.name &&
            !errors.age &&
            !errors.address &&
            !errors.phone;
    }

    const addUser = (user) => {
        user.id = users.length + 1;
        setUsers(prev => [...prev, user])
    }

    const updateUser = (updatedUser) => {
        const newUsers = users.map(user => {
            return user.id === updatedUser.id ? updatedUser : user
        })
        setUsers([...newUsers])
    }

    const clearErrors = () => {
        setErrors({
            name: '',
            age: '',
            address: '',
            phone: ''
        })
    }

    const clearInput = () => {
        setInput({
            id: null,
            name: '',
            age: '',
            address: '',
            phone: ''
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validate(input)) {
            if (isUpdating) {
                updateUser(input)
            } else {
                addUser(input)
            }
            clearInput();
            clearErrors();
            setShowForm(false);
        }
    }

    const handleEdit = (userId) => {
        const user = users.find(user => user.id === userId)
        if (user) {
            setInput({ id: user.id, name: user.name, age: user.age, address: user.address, phone: user.phone })
            setIsUpdating(true)
            setShowForm(true)
        }
    }

    const handleUpdate = (updatedUser) => {
        updateUser(updatedUser);
    }

    const toggleForm = () => {
        if (!showForm)
            clearInput()
        if (isUpdating) {
            clearInput();
            clearErrors();
        }
        setShowForm(true)
        setIsUpdating(false)
    }

    const handleDelete = (userId) => {
        const newUsers = users.filter(item => item.id !== userId)
        setUsers([...newUsers])
        // console.log("delete user with id ", userId)
    }

    return (
        <div className="d-flex gap-5 pt-5">
            <div className='w-50'>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope='col' className='col-1'>id</th>
                            <th scope='col' className='col-4'>name</th>
                            <th scope='col' className='col-5'>address</th>
                            <th scope='col' className='col-2'>actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => (
                            <UserItem
                                key={user.id}
                                user={user}
                                clearInput={clearInput}
                                clearErrors={clearErrors}
                                userToUpdate={userToUpdate}
                                setUserToUpdate={setUserToUpdate}
                                handleEdit={handleEdit}
                                handleUpdate={handleUpdate}
                                handleDelete={handleDelete}
                                updateUser={updateUser}
                            />
                        ))}
                    </tbody>
                </table>
                <button
                    className='btn btn-primary'
                    onClick={toggleForm}
                >
                    Create user
                </button>
            </div>
            {/* Form edit */}
            {showForm && (
                <form ref={formRef} className='flex-grow-1' onSubmit={handleSubmit}>
                    <div className="form-group row">
                        <label htmlFor="name"
                            className='col-2 col-form-label'
                        >
                            Name
                        </label>
                        <div className="col-10">
                            <input type="text"
                                className='form-control'
                                id='name'
                                name="name"
                                value={input.name}
                                onChange={handleInputChange}
                            />
                            <p className="text-danger">{errors.name}</p>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="age"
                            className='col-2 col-form-label'
                        >
                            Age
                        </label>
                        <div className="col-10">
                            <input type="number"
                                className='form-control'
                                id='age'
                                name="age"
                                value={input.age}
                                onChange={handleInputChange}
                            />
                            <p className="text-danger">{errors.age}</p>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="address"
                            className='col-2 col-form-label'
                        >
                            Address
                        </label>
                        <div className="col-10">
                            <input type="text"
                                className='form-control'
                                id='address'
                                name="address"
                                value={input.address}
                                onChange={handleInputChange}
                            />
                            <p className="text-danger">{errors.address}</p>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="phone"
                            className='col-2 col-form-label'
                        >
                            Phone
                        </label>
                        <div className="col-10">
                            <input type="number"
                                className='form-control'
                                id='phone'
                                name="phone"
                                value={input.phone}
                                onChange={handleInputChange}
                            />
                            <p className="text-danger">{errors.phone}</p>
                        </div>
                    </div>
                    <button
                        type='submit'
                        className='btn btn-primary'
                    >
                        {isUpdating ? 'Update' : 'Create'}
                    </button>
                </form>
            )}
        </div>
    )
}

export default CrudApp