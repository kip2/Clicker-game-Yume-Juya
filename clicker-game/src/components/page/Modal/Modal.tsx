import "./Modal.css"

function Modal ({children, onClose}) {
    return(
        <div className="modal">
            <p className="modal-close-button"
                onClick={onClose}>
                ✖︎
            </p>
            <div className="blank-space"></div>
            {children}
        </div>
    )
}

export default Modal