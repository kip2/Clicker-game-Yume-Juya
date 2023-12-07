import ModalButton from "../../ui/ModalButton"
import "./SaveDataNotExistsModal.css"

function SaveDataNotExistsModal() {
    return(
        <div className="saveDataNotExistsModal-outer">
            <p className="modal-text">セーブデータがありません</p>
            <ModalButton
                text="新規ユーザー登録する"
                onButtonClick={()=>{}}
            />
            <ModalButton
                text="JSONデータで登録する"
                onButtonClick={()=>{}}
            />
        </div>
    )
}

export default SaveDataNotExistsModal