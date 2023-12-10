import { useCustomNavigate } from "../../functional/CustomNavigate"
import ModalButton from "../../ui/ModalButton"
import "./ClearPopup.css"

function ClearPopup() {
    const { navigateToPage } = useCustomNavigate()

    const handleEndingButton = () => {
        navigateToPage("/ending")
    }

    return (
        <div className="game-clear-popup">
            <p className="game-clear-modal-title">祝賀</p>
            <p className="game-clear-modal-text">百年完走！</p>
            <p className="game-clear-modal-text">約束の刻限です！</p>
            <div className="">
                <ModalButton
                    text="エンディングを見る"
                    onButtonClick={handleEndingButton}
                />
            </div>
        </div>
    )
}

export default ClearPopup