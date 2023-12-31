import ModalButton from "../../ui/ModalButton";
import { ModalState } from "../../../Enum";

type AfterSaveDataDeletionProps = {
    setModalState : React.Dispatch<React.SetStateAction<ModalState>>
}

function AfterSaveDataDeletion({ setModalState }: AfterSaveDataDeletionProps) {

    const handleReturnButton = () => {
        setModalState(ModalState.NotExistsSaveDataModal)
    }
    
    return(
        <>
            <div className="blank-space"></div>
            <div className="blank-space"></div>
            <div className="blank-space"></div>
            <p className="modal-text">ユーザーデータを削除しました</p>
            <div className="blank-space"></div>
            <div>
                <ModalButton
                    text="戻る"
                    onButtonClick={handleReturnButton}
                />
            </div>
        </>
    )
}

export default AfterSaveDataDeletion