import React from 'react';

const DeleteModal = ({ currentCartItem, cart, setCart, setDeleteModal }) => {

    const deleteCartItem = () => {
        const newCart = cart.filter(item => item.id !== currentCartItem.id)
        setCart([...newCart])
        setDeleteModal(false)
    }

    return (
        <div className="modal show" tabIndex="-1">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Delete Item</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
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

// const App = () => {
//     const [showModal, setShowModal] = useState(false);

//     const handleShowModal = () => {
//         setShowModal(true);
//     };

//     const handleCloseModal = () => {
//         setShowModal(false);
//     };

//     const handleDelete = () => {
//         // Implement your delete logic here
//         console.log('Deleting...');
//         handleCloseModal();
//     };

//     return (
//         <div>
//             <button classNameName="btn btn-danger" onClick={handleShowModal}>Open Delete Modal</button>
//             <DeleteModal show={showModal} handleClose={handleCloseModal} handleDelete={handleDelete} />
//         </div>
//     );
// };

export default DeleteModal;
