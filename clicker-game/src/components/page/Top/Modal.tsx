import "./Modal.css"

function Modal ({children, onClose}) {
    return(
        <div className="modal">
            <button onClick={onClose}>
                閉じる
            </button>
            {children}
        </div>
    )
}

export default Modal