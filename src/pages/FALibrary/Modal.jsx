import React from 'react'

const Modal = ({ setShowModal, title, body, ok, cancel, onOk }) => {

    const closeModal = () => {
        setShowModal(false)
    }

    const handleOk = () => {
        closeModal()
        onOk()
    }

    return (
        <div className='overlay' tabIndex="-1"
            onClick={closeModal}
        >
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{title || 'Modal title'}</h5>
                        <button type="button" className="close"
                            onClick={closeModal}
                        >
                            <span>&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <p>{body || 'Modal body text goes here.'}</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary"
                            onClick={closeModal}
                        >{cancel || 'Close'}</button>
                        <button type="button" className="btn btn-primary"
                            onClick={handleOk}
                        >{ok || 'Save changes'}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal