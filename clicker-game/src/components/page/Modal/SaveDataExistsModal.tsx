import ModalButton from "../../ui/ModalButton"
import { ModalState } from "../../../Enum"
import { loadingLocalData, removeLocalData } from "../../functional/UserLodalData"

type SaveDataExistsModalProps = {
    setModalState : React.Dispatch<React.SetStateAction<ModalState>>
}

function SaveDataExistsModal ({ setModalState}: SaveDataExistsModalProps) {

    const handleGemeStartButton = () => {
        setModalState(ModalState.ExistsSaveDataModal)
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
                    onButtonClick={()=>{}}
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