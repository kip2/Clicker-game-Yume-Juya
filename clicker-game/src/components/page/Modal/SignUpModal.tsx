import InputBox from "../../ui/InputBox"
import ModalButton from "../../ui/ModalButton"

function SignUpModal() {
    return(
        <>
            <div className="blank-space"></div>
            <p className="modal-text">名前を入力してください</p>
            <div className="blank-space"></div>
            <InputBox />
            <div className="blank-space"></div>
            <ModalButton
                text="登録する"
                onButtonClick={()=> {}}
            />
        </>
    )
}

export default SignUpModal