import InputBox from "../../ui/InputBox"
import ModalButton from "../../ui/ModalButton"
import { ModalState } from "../../../Enum"

type SignUpModalProps = {
    setModalState : React.Dispatch<React.SetStateAction<ModalState>>
}

function SignUpModal({ setModalState }: SignUpModalProps) {
    const handleUserRegistrationButton = () => {
        setModalState(ModalState.ExistsSaveDataModal)
    }

    return(
        <>
            <div className="blank-space"></div>
            <p className="modal-text">名前を入力してください</p>
            <div className="blank-space"></div>
            <InputBox />
            <div className="blank-space"></div>
            <ModalButton
                text="登録する"
                onButtonClick={handleUserRegistrationButton}
            />
        </>
    )
}

export default SignUpModal