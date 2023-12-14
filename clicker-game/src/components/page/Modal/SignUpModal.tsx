import InputBox from "../../ui/InputBox"
import ModalButton from "../../ui/ModalButton"
import { ModalState } from "../../../Enum"
import "./SignUpModal.css"
import { useState } from "react"
import { saveLocalData, createNewLocalData, loadingLocalData } from "../../functional/UserLocalData"

type SignUpModalProps = {
    setModalState : React.Dispatch<React.SetStateAction<ModalState>>
    setUserData: React.Dispatch<React.SetStateAction<UserData>>
}

function SignUpModal({ setModalState, setUserData}: SignUpModalProps) {
    const [inputValue, setInputValue] = useState("")

    const handleUserRegistrationButton = () => {
        saveLocalData(createNewLocalData(inputValue))
        setInputValue("")
        setUserData(loadingLocalData())
        setModalState(ModalState.ExistsSaveDataModal)
    }

    return(
        <>
            <div className="blank-space"></div>
            <p className="modal-text">名前を入力してください</p>
            <p className="modal-cation-statement">※名前は20文字まで</p>
            <div className="blank-space"></div>
            <InputBox 
                maxLength={20}
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