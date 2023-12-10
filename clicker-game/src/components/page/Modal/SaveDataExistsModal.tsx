import ModalButton from "../../ui/ModalButton"
import { ModalState } from "../../../Enum"
import { useNavigate } from "react-router-dom"

type SaveDataExistsModalProps = {
    setModalState : React.Dispatch<React.SetStateAction<ModalState>>
    userData: UserData
}

function SaveDataExistsModal ({ setModalState, userData}: SaveDataExistsModalProps) {
    const navigate = useNavigate()

    const handleGemeStartButton = () => {
        navigate("/game", { state: userData })
    }

    const handleUserDeleteParagraph = () => {
        setModalState(ModalState.ConfirmDeleteSaveDataModal)
    }

    return (
        <>
            <div className="blank-space"></div>
            <div className="blank-space"></div>
            <div className="blank-space"></div>
            <p className="modal-text">データの読み込みが完了しました</p>
            <div className="blank-space"></div>
            <div>
                <ModalButton
                    text="ゲームを始める"
                    onButtonClick={handleGemeStartButton}
                />
            </div>
            <p 
                className="modal-link"
                onClick={handleUserDeleteParagraph}
            >ユーザーデータを消去する</p>
        </>
    )
}

export default SaveDataExistsModal