import ModalButton from "../../ui/ModalButton"
import "./SaveDataNotExistsModal.css"
import { ModalState } from "../../../Enum"

type SaveDataNotExistsModalProps = {
    setModalState : React.Dispatch<React.SetStateAction<ModalState>>
}

function SaveDataNotExistsModal({ setModalState }: SaveDataNotExistsModalProps) {

    const handleUserRegistration = () => {
        setModalState(ModalState.SignUpModal)
    }

    return(
        <div className="saveDataNotExistsModal-outer">
            <div className="blank-space"></div>
            <p className="modal-text">セーブデータがありません</p>
            <div className="blank-space"></div>
            <ModalButton
                text="新規ユーザー登録する"
                onButtonClick={handleUserRegistration}
            />
        </div>
    )
}

export default SaveDataNotExistsModal