import ModalButton from "../../ui/ModalButton";
import { ModalState } from "../../../Enum";
import { removeLocalData } from "../../functional/UserLodalData";

type ConfirmSaveDataDeletionProps = {
    setModalState : React.Dispatch<React.SetStateAction<ModalState>>
}

function ConfirmSaveDataDeletion({ setModalState }:ConfirmSaveDataDeletionProps) {

    const handleYesButton = () => {
        removeLocalData()
        setModalState(ModalState.AfterDeleteSaveDataModal)
    }

    const handleNoButton = () => {
        setModalState(ModalState.ExistsSaveDataModal)
    }

    return(
        <>
            <div className="blank-space"></div>
            <p className="modal-text">ユーザーデータを削除しますか？</p>
            <div className="blank-space"></div>
            <div>
                <ModalButton
                    text="はい"
                    onButtonClick={handleYesButton}
                />
            </div>
            <div>
                <ModalButton
                    text="いいえ"
                    onButtonClick={handleNoButton}
                />
            </div>
        </>
    )
}

export default ConfirmSaveDataDeletion