import InputBox from "../../ui/InputBox"
import ModalButton from "../../ui/ModalButton"
import { ModalState } from "../../../Enum"
import "./SignUpModal.css"
import { useState } from "react"

type SignUpModalProps = {
    setModalState : React.Dispatch<React.SetStateAction<ModalState>>
}

function SignUpModal({ setModalState }: SignUpModalProps) {
    const [inputValue, setInputValue] = useState("")

    const handleUserRegistrationButton = () => {
        // todo: 実際にユーザーデータを登録してセーブする動作が必要
        // todo: データのfetchをさせるのも必要になる
        
        setModalState(ModalState.ExistsSaveDataModal)
    }

    return(
        <>
            <div className="blank-space"></div>
            <p className="modal-text">名前を入力してください</p>
            <p className="modal-cation-statement">※名前は30文字まで</p>
            <div className="blank-space"></div>
            <InputBox 
                maxLength={30}
                inputValue={inputValue}
                setInputValue={setInputValue}
            />
            <div className="blank-space"></div>
            <ModalButton
                text="登録する"
                onButtonClick={handleUserRegistrationButton}
            />
        </>
    )
}

export default SignUpModal