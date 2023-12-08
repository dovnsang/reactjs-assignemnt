import React, { useState } from 'react';

const UserItem = ({ user, userToUpdate, setUserToUpdate, handleEdit, handleUpdate, handleDelete }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedName, setEditedName] = useState(user.name);
    const [editedAddress, setEditedAddress] = useState(user.address);

    const handleEditClick = () => {
        console.log('user', user)
        console.log('user to update', userToUpdate)
        setIsEditing(true);
        setUserToUpdate(prev => ({ ...prev, ...user }));
    };

    const handleUpdateClick = () => {
        handleUpdate(prev => ({
            ...prev,
            id: user.id, name: editedName, address: editedAddress
        }));
        setIsEditing(false);
    };

    const handleDeleteClick = () => {
        handleDelete(user.id);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'name') {
            setEditedName(value);
        } else if (name === 'address') {
            setEditedAddress(value);
        }
    };
    return (
        <tr>
            <td>{user.id}</td>
            <td onClick={handleEditClick}>
                {isEditing && userToUpdate.id === user.id ? (
                    <input type="text"
                        name="name"
                        value={editedName}
                        onChange={handleInputChange}
                    />
                ) : (
                    user.name
                )}
            </td>
            <td onClick={handleEditClick}>
                {isEditing && userToUpdate.id === user.id ? (
                    <input type="text"
                        name="address"
                        value={editedAddress}
                        onChange={handleInputChange}
                    />
                ) : (
                    user.address
                )}
            </td>
            <td>
                {isEditing && userToUpdate.id === user.id ? (
                    <button
                        className='btn btn-primary'
                        onClick={handleUpdateClick}>Update</button>
                ) : (
                    <>
                        <button className='btn btn-primary' onClick={() => handleEdit(user.id)}>Edit</button>
                        <button className='btn btn-danger' onClick={handleDeleteClick}>Delete</button>
                    </>
                )}
            </td>
        </tr>
    );
};

export default UserItem;
