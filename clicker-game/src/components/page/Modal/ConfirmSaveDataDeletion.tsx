import ModalButton from "../../ui/ModalButton";

function ConfirmSaveDataDeletion() {
    return(
        <>
            <div className="blank-space"></div>
            <p className="modal-text">ユーザーデータを消去しますか？</p>
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