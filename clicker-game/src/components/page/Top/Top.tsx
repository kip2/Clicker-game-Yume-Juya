import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
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
import JsonDataLoadModal from "../Modal/JsonDataLoadModal"

const userData = {
    name: "名無しの権兵衛",
    money: 0,
    decrementPerSecond: 25,
    decrementPerClick: 25,
    remainingTime: 100 * 365 * 24 * 60 * 60,
    items: {
        "健さんのパナマの帽子": 0,
        "大きな真珠貝":0,
        "隣の床の間の置き時計":0,
        "豆腐屋のラッパ":0,
        "掘り損ねた仁王像":0,
        "真鍮で拵えた飴屋の笛":0,
        "檳榔樹のステッキ":0,
        "行き先不明の船":0,
        "運慶の仁王像":0,
        "祈りの八幡宮":0,
        "侍の悟り":0,
    }
}

function Top() {
    const { navigateToPage } = useCustomNavigate()
    const [isAnimating, setIsAnimating] = useState(true)
    const [modalOpen, setModalOpen] = useState(false)
    // defaultはセーブデータないという想定
    const [modalState, setModalState] = useState<ModalState>(ModalState.NotExistsSaveDataModal)
    const navigate = useNavigate()

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
        setModalOpen(true)
    }

    const handleClick = () => {
        setIsAnimating(false)
    }

    // todo: userdataをローディングする動作が必要
    // todo: jsonロードの画面を作成する(jsonをドラッグアンドロップしたら読み込むようにする)

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
                    ユーザー名：{userData.name}
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
                                {modalState === ModalState.LoadingJsonModal &&
                                    <JsonDataLoadModal
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