import ModalButton from "../../ui/ModalButton";
import { ModalState } from "../../../Enum";

type ConfirmSaveDataDeletionProps = {
    setModalState : React.Dispatch<React.SetStateAction<ModalState>>
}

function ConfirmSaveDataDeletion({ setModalState }:ConfirmSaveDataDeletionProps) {
    return(
        <>
            <div className="blank-space"></div>
            <p className="modal-text">ユーザーデータを削除しますか？</p>
            <div className="blank-space"></div>
            <div>
                <ModalButton
                    text="はい"
                    onButtonClick={()=>{}}
                />
            </div>
            <div>
                <ModalButton
                    text="いいえ"
                    onButtonClick={()=>{}}
                />
            </div>
        </>
    )
}

export default ConfirmSaveDataDeletion