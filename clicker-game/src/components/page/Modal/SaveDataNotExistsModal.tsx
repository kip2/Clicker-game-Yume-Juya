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
            <p className="modal-text">セーブデータがありません</p>
            <ModalButton
                text="新規ユーザー登録する"
                onButtonClick={handleUserRegistration}
            />
            <ModalButton
                text="JSONデータで登録する"
                onButtonClick={()=>{}}
            />
        </div>
    )
}

export default SaveDataNotExistsModal