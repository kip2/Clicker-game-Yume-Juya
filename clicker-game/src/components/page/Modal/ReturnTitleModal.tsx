import ModalButton from "../../ui/ModalButton"

type ReturnTitleModalProps = {
    handleSaveButton: () => void
    handleNavigateTop: () => void
}

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

function ReturnTitleModal({ handleSaveButton, handleNavigateTop }: ReturnTitleModalProps) {

    const handleSaveAndReturn = async () => {
        handleSaveButton()
        await sleep(2000)
        handleNavigateTop()
    }
    
    return(
        <>
            <div className="blank-space"></div>
            <div className="blank-space"></div>
            <p className="modal-text">セーブしてタイトルに戻りますか？</p>
            <div>
                <ModalButton
                    text="セーブして戻る"
                    onButtonClick={handleSaveAndReturn}
                />
            </div>
            <div>
                <ModalButton
                    text="そのままタイトルに戻る"
                    onButtonClick={handleNavigateTop}
                />
            </div>
        </>
    )
}

export default ReturnTitleModal