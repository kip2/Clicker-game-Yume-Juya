import "./Modal.css"

type ModalProps = {
    children: React.ReactNode,
    onClose?: () => void
}

function Modal ({children, onClose}:ModalProps) {
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