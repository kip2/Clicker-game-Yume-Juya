import Button from "../../ui/Button"
import "./HowToPlay.css"
import "../../../index.css"
import { useCustomNavigate } from "../../functional/CustomNavigate"

function HowToPlay() {
    const { navigateToPage } = useCustomNavigate()

    const handleNavigateTop = () => {
        navigateToPage("/")
    }
    
    return(
        <div className="how-to-play-background">
            <h1 className="how-to-play-title outlined-text">
                遊び方
            </h1>
            <div className="how-to-play-text outlined-text-red">
                <p className="how-to-play-p">
                    1. 月に吼えろ！
                </p>
                <br></br>
                <p className="how-to-play-p">
                    月をクリックすると、不思議なパワーで、百年までの時間がどんどん減るぞ！
                </p>
            </div>
            <div className="how-to-play-text outlined-text-red">
                <p className="how-to-play-p">
                    2. 不思議アイテムを購入しろ！
                </p>
                <br></br>
                <p className="how-to-play-p">
                    アイテムを購入すると、さらに百年までの時間がどんどん減るぞ！
                </p>
                <br></br>
                <p className="how-to-play-p">
                    ただし、購入した分だけ百年までの時間が伸びるので注意しよう！
                </p>
            </div>
            <p className="how-to-play-ijo outlined-text-red">
                以上！
            </p>
            <div className="how-to-play-button-parent">
                <div className="how-to-play-return-button">
                    <Button
                        text="戻る"
                        onButtonClick={handleNavigateTop}
                    />
                </div>
            </div>
        </div>
    )
}

export default HowToPlay