import ModalButton from "../../ui/ModalButton"
import "./ClearPopup.css"

function ClearPopup() {
    return (
        <div className="game-clear-popup">
            <p className="game-clear-modal-title">祝賀</p>
            <p className="game-clear-modal-text">百年完走！</p>
            <p className="game-clear-modal-text">約束の刻限です！</p>
            <div className="">
                <ModalButton
                    text="エンディングを見る"
                    onButtonClick={()=>{}}
                />
            </div>
        </div>
    )
}

export default ClearPopup