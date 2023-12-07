import ModalButton from "../../ui/ModalButton"

function SaveDataExistsModal () {
    return (
        <>
            <p className="modal-text">データの読み込みが完了しました</p>
            <p className="modal-text">こちらのデータでゲームを開始しますか？</p>
            <div>
                <ModalButton
                    text="ゲームを始める"
                    onButtonClick={()=>{}}
                />
            </div>
            <div>
                <ModalButton
                    text="別のデータを登録する"
                    onButtonClick={()=>{}}
                />
            </div>
            <p className="modal-link">ユーザーデータを消去する</p>
        </>
    )
}

export default SaveDataExistsModal