import React from 'react';

const DeleteModal = ({ currentCartItem, cart, setCart, setDeleteModal }) => {

    const deleteCartItem = () => {
        const newCart = cart.filter(item => item.id !== currentCartItem.id)
        setCart([...newCart])
        setDeleteModal(false)
    }

    return (
        <div className="modal show overlay" tabIndex="-1">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Delete Item</h5>
                        <button type="button" className="close"
                            onClick={() => setDeleteModal(false)}>
                            <span>&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <p>Are you sure want to delete {currentCartItem.title} from cart</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-danger" onClick={deleteCartItem}>Delete</button>
                        <button type="button" className="btn btn-secondary" onClick={() => setDeleteModal(false)}>Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteModal;
