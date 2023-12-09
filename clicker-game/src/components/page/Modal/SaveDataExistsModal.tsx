import ModalButton from "../../ui/ModalButton"
import { ModalState } from "../../../Enum"

type SaveDataExistsModalProps = {
    setModalState : React.Dispatch<React.SetStateAction<ModalState>>
}

function SaveDataExistsModal ({ setModalState }: SaveDataExistsModalProps) {

    const handleGemeStartButton = () => {
        setModalState(ModalState.ExistsSaveDataModal)
    }

    const handleRegistrationButton = () => {
        setModalState(ModalState.SignUpModal)
    }

    const handleUserDeleteParagraph = () => {
        setModalState(ModalState.ConfirmDeleteSaveDataModal)
    }

    return (
        <>
            <p className="modal-text">データの読み込みが完了しました</p>
            <p className="modal-text">こちらのデータでゲームを開始しますか？</p>
            <div>
                <ModalButton
                    text="ゲームを始める"
                    onButtonClick={()=>{}}
                />
            </div>
            <div>
                <ModalButton
                    text="別のデータを登録する"
                    onButtonClick={handleRegistrationButton}
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