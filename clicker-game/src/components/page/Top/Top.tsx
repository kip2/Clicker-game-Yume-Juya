import "./Top.css"
import Button from "../../ui/Button"
import "../../../index.css"
import { useCustomNavigate } from "../../functional/CustomNavigate"

// todo: あとで内容を実装する
const onStartButton = () => {}

function Top() {
    const { navigateToPage } = useCustomNavigate()

    const handleNavigateSynopsis = () => {
        navigateToPage("/synopsis")
    }

    const handleNavigateHowToPlay = () => {
        navigateToPage("/howToPlay")
    }

    return(
        <div className="top-background">
            <div>
                <h1 className="top-title-sekkachi top-font outlined-text">
                    せっかち
                </h1>
                <h1 className="top-title top-font outlined-text top-anime">
                    夢十夜
                </h1>
                <h1 className="top-title-daiichiya top-font outlined-text top-anime">
                    第一夜
                </h1>
            </div>
            <div className="top-buttons top-anime">
                <Button 
                    text="始める"
                    onButtonClick={onStartButton}
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
            <div className="top-anime">
                <p className="outlined-text top-p">
                    ユーザー名: ユーザー1
                </p>
                <p className="outlined-text top-p">
                    ユーザーID: 1111111
                </p>
            </div>
        </div>
    )
}

export default Top