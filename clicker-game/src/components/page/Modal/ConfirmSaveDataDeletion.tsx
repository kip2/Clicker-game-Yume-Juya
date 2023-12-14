import ModalButton from "../../ui/ModalButton";
import { ModalState } from "../../../Enum";
import { loadingLocalData, removeLocalData } from "../../functional/UserLocalData";

type ConfirmSaveDataDeletionProps = {
    setModalState : React.Dispatch<React.SetStateAction<ModalState>>
    setUserData: React.Dispatch<React.SetStateAction<UserData>>
}

function ConfirmSaveDataDeletion({ setModalState , setUserData}:ConfirmSaveDataDeletionProps) {

    const handleYesButton = () => {
        removeLocalData()
        setUserData(loadingLocalData())
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