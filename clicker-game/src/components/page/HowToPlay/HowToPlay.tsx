import Button from "../../ui/Button"
import "./HowToPlay.css"
import "../../../index.css"

// todo: 機能をあとで追加する
const returnTop = () => {}

const HowToPlay = () => {
    return(
        <div className="synopsis-background outlined-text">
            <div className="synopsis-text">
                <h1 className="how-to-play-title">
                    遊び方
                </h1>
                <div className="mt">
                    <p className="synopsis-p">
                        1. 月に吼えろ！
                    </p>
                    <br></br>
                    <p className="synopsis-p">
                        月をクリックすると、不思議なパワーで、百年までの時間がどんどん減るぞ！
                    </p>
                </div>
                <div className="mt">
                    <p className="synopsis-p">
                        2. 不思議アイテムを購入しろ！
                    </p>
                    <br></br>
                    <p className="synopsis-p">
                        アイテムを購入すると、さらに百年までの時間がどんどん減るぞ！
                    </p>
                    <p className="synopsis-p">
                        どんどん購入しよう！
                    </p>
                    <p className="synopsis-p">
                        ただし、購入した分だけ百年までの時間が伸びるので注意しよう！
                    </p>
                </div>
            </div>
            <div className="return-button">
                <Button
                    text="戻る"
                    onButtonClick={returnTop}
                />
            </div>
        </div>
    )
}

export default HowToPlay