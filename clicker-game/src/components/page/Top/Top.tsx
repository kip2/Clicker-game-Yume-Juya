import "./Top.css"
import Button from "../../ui/Button"

const Top = () => {
    return(
        <>
            <div>
                <h1 className="top-title">せっかち夢十夜第一夜</h1>
            </div>
            <div className="top-buttons">
                <Button text="始める"></Button>
                <Button text="あらすじ"></Button>
                <Button text="遊び方"></Button>
            </div>
            <img src="../img/top.png"/>
            <div>
                <p>
                    ユーザー名: ユーザー1
                </p>
                <p>
                    ユーザーID: 1111111
                </p>
            </div>
        </>
    )
}

export default Top