import React from 'react'
import PropTypes from 'prop-types';
const SuccessModal = ({ msg, type, setModal, modalId }) => {
    const closeModal = () => {
        setModal({ msg: '', type: 0 })
        document.getElementById(modalId).style.display = "none";
    }
    return (
        <div className="modal-container" id={modalId}>
            <div className="custom-modal mt-5">
                <img src={`/assets/img/${type == 1 ? 'successful-circle.png' : 'error-circle.png'}`} alt="" />
                <p>{msg}</p>
                <button className="btn btn-primary" id="closeModal" onClick={closeModal}>OK</button>
            </div>
        </div>
    )
}
SuccessModal.propTypes = {
    modalId: PropTypes.string,
    msg: PropTypes.string,
    type: PropTypes.string,
    setModal: PropTypes.func
}

export default SuccessModal