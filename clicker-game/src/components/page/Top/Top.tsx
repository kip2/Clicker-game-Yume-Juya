import "./Top.css"
import Button from "../../ui/Button"

const Top = () => {
    return(
        <div className="top-background">
            <div>
                <h1 className="top-title top-font outlined-text">
                    せっかち夢十夜第一夜
                </h1>
            </div>
            <div className="top-buttons">
                <Button text="始める"></Button>
                <Button text="あらすじ"></Button>
                <Button text="遊び方"></Button>
            </div>
            <div>
                <p className="outlined-text">
                    ユーザー名: ユーザー1
                </p>
                <p className="outlined-text">
                    ユーザーID: 1111111
                </p>
            </div>
        </div>
    )
}

export default Top