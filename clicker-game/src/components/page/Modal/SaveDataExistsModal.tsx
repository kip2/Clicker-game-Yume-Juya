import ModalButton from "../../ui/ModalButton"

function SaveDataExistsModal () {
    return (
        <>
            <p>データの読み込みが完了しました</p>
            <p>こちらのデータでゲームを開始しますか？</p>
            <div>
                <ModalButton
                    text="ゲームを始める"
                    onButtonClick={()=>{}}
                />
            </div>
            <div>
                <ModalButton
                    text="別のゲームを登録する"
                    onButtonClick={()=>{}}
                />
            </div>
            <p>ユーザーデータを消去する</p>
        </>
    )
}

export default SaveDataExistsModal