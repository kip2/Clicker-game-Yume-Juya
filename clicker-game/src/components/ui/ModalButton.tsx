import "./ModalButton.css"

type ModalButtonProps = {
    text:string,
    onButtonClick?: () => void
}

function ModalButton ({ text, onButtonClick }: ModalButtonProps) {
    return(
        <>
            <button
                className="modal-button"
                onClick={onButtonClick}
            >
                {text}
            </button>
        </>
    )
}

export default ModalButton