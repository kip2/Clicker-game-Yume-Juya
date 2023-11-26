import "./Top.css"
import Button from "../../ui/Button"

// todo: あとで内容を実装する
const onStartButton = () => {}
const onStoryButton = () => {}
const onHowToButton = () => {}

const Top = () => {
    return(
        <div className="top-background">
            <div>
                <h1 className="top-title-sekkachi top-font outlined-text">
                    せっかち
                </h1>
                <h1 className="top-title top-font outlined-text">
                    夢十夜
                </h1>
                <h1 className="top-title-daiichiya top-font outlined-text">
                    第一夜
                </h1>
            </div>
            <div className="top-buttons">
                <Button 
                    text="始める"
                    onButtonClick={onStartButton}
                >
                </Button>
                <Button 
                    text="あらすじ"
                    onButtonClick={onStoryButton}
                >
                </Button>
                <Button 
                    text="遊び方"
                    onButtonClick={onHowToButton}
                >
                </Button>
            </div>
            <div>
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