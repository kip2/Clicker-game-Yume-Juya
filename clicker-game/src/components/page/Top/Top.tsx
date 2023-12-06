import "./Top.css"
import Button from "../../ui/Button"
import "../../../index.css"
import { useCustomNavigate } from "../../functional/CustomNavigate"
import { useState } from "react"
import Modal from "./Modal"

function Top() {
    const { navigateToPage } = useCustomNavigate()
    const [isAnimating, setIsAnimating] = useState(true)
    const [modalOpen, setModalOpen] = useState(false)

    const handleNavigateSynopsis = () => {
        navigateToPage("/synopsis")
    }

    const handleNavigateHowToPlay = () => {
        navigateToPage("/howToPlay")
    }

    const handleNavigateGame = () => {
        navigateToPage("/game")
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
                    onButtonClick={handleNavigateGame}
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
                    ユーザー名：ユーザー1
                </p>
            </div>
            <div>
                <button onClick={() => setModalOpen(true)}>ポップアップを開く</button>
                {modalOpen && (
                    <Modal 
                        onClose={()=> setModalOpen(false)}
                    >
                        <div>
                            test
                            <h1>TEST!</h1>
                        </div>
                    </Modal>
                )}
            </div>
        </div>
    )
}

export default Top