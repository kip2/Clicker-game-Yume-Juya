import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { useCustomNavigate } from "../../functional/CustomNavigate"
import Modal from "../Modal/Modal"
import Button from "../../ui/Button"
import SignUpModal from "../Modal/SignUpModal"
import SaveDataExistsModal from "../Modal/SaveDataExistsModal"
import SaveDataNotExistsModal from "../Modal/SaveDataNotExistsModal"
import "../../../index.css"
import "./Top.css"
import ConfirmSaveDataDeletion from "../Modal/ConfirmSaveDataDeletion"
import AfterSaveDataDeletion from "../Modal/AfterSaveDataDeletion"
import { ModalState } from "../../../Enum"
import { loadingLocalData } from "../../functional/UserLodalData"

function Top() {
    const { navigateToPage } = useCustomNavigate()
    const [isAnimating, setIsAnimating] = useState(true)
    const [modalOpen, setModalOpen] = useState(false)
    // defaultはセーブデータないという想定
    const [modalState, setModalState] = useState<ModalState>(ModalState.NotExistsSaveDataModal)
    const navigate = useNavigate()
    const [userData, setUserData] = useState(loadingLocalData())

    const handleNavigateSynopsis = () => {
        navigateToPage("/synopsis")
    }

    const handleNavigateHowToPlay = () => {
        navigateToPage("/howToPlay")
    }

    // todo: gameスタートを別のモーダル画面に権限を委譲すること
    const handleNavigateGame = () => {
        navigate("/game", { state: userData })
    }

    const handleStartButton = () => {
        const userSaveData = loadingLocalData()
        if (userSaveData){
            setModalState(ModalState.ExistsSaveDataModal)
        } else {
            setModalState(ModalState.NotExistsSaveDataModal)
        }
        setModalOpen(true)
    }

    const handleClick = () => {
        setIsAnimating(false)
    }

    return(
        <div className="top-background"
            onClick={handleClick}
        >
            <div>
                <h1 
                    className={`${isAnimating 
                        ?
                        "top-title-sekkachi-anime top-title-sekkachi top-font outlined-text" 
                        :
                        "top-title-sekkachi top-font outlined-text" 
                }`}
                >
                    せっかち
                </h1>
                <h1 
                    className={`${isAnimating
                    ?
                    "top-title top-font outlined-text top-anime"
                    :
                    "top-title top-font outlined-text"
                    }`}>
                    夢十夜
                </h1>
                <h1 
                    className={`${isAnimating
                    ?
                    "top-title-daiichiya top-font outlined-text top-anime"
                    :
                    "top-title-daiichiya top-font outlined-text"
                    }`}>
                    第一夜
                </h1>
            </div>
            <div 
                className={`${isAnimating ? 'top-anime top-buttons' : 'top-buttons'}`}
            >
                <Button 
                    text="始める"
                    onButtonClick={handleStartButton}
                >
                </Button>
                <Button 
                    text="あらすじ"
                    onButtonClick={handleNavigateSynopsis}
                >
                </Button>
                <Button 
                    text="遊び方"
                    onButtonClick={handleNavigateHowToPlay}
                >
                </Button>
            </div>
            <div 
                className={`${isAnimating
                ? "top-anime"
                :
                ""
            }`}>
                <p className="outlined-text top-p">
                    { userData === null ?
                    "ユーザー情報がありません"
                    :
                    "ユーザー名：" + userData.name}
                </p>
            </div>
            <div>
                {modalOpen && (
                    <>
                        <div className="overlay" onClick={() => setModalOpen(false)}></div>
                        <Modal onClose={()=> setModalOpen(false)}>
                            <div>
                                {modalState === ModalState.NotExistsSaveDataModal && 
                                    <SaveDataNotExistsModal
                                        setModalState={setModalState}
                                    />
                                }
                                {modalState === ModalState.ExistsSaveDataModal &&
                                    <SaveDataExistsModal 
                                        setModalState={setModalState}
                                    />
                                }
                                {modalState === ModalState.ConfirmDeleteSaveDataModal &&
                                    <ConfirmSaveDataDeletion 
                                        setModalState={setModalState}
                                    />
                                }
                                {modalState === ModalState.AfterDeleteSaveDataModal &&
                                    <AfterSaveDataDeletion 
                                        setModalState={setModalState}
                                    />
                                }
                                {modalState === ModalState.SignUpModal &&
                                    <SignUpModal 
                                        setModalState={setModalState}
                                    />
                                }
                            </div>
                        </Modal>
                    </>
                )}
            </div>
        </div>
    )
}

export default Top