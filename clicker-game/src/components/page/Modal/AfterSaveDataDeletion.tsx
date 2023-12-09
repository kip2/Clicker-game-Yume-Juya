import ModalButton from "../../ui/ModalButton";

function AfterSaveDataDeletion() {
    return(
        <>
            <div className="blank-space"></div>
            <div className="blank-space"></div>
            <div className="blank-space"></div>
            <p className="modal-text">ユーザーデータを消去しました</p>
            <div className="blank-space"></div>
            <div>
                <ModalButton
                    text="戻る"
                    onButtonClick={()=>{}}
                />
            </div>
        </>
    )
}

export default AfterSaveDataDeletion