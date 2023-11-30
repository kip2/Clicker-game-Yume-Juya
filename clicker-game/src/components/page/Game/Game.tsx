import "./Game.css"
import Button from "../../ui/Button"

// todo: 戻るボタンと、データの保存ボタンを設置したので、後で内部ロジックを実装する

function Game () {
    return (
        <>
            <div className="game-background">
                <div className="game-left-window">
                    <div className="remaining-time">
                        <p className="remaining-time-header">残</p>
                        <p className="remaining-time-counter">99年9999時間9999分9999秒</p>
                        <p>秒間25秒ずつ</p>
                    </div>
                    <div>
                        <img 
                            className="click-moon"
                            src="./img/clickmoon.png"
                        />
                    </div>
                </div>
                <div className="game-right-window">
                    <div className="game-right-upper-window">
                        <div className="game-name-space">
                            あなたの名
                        </div>
                        <div className="game-remaining-time-amount">
                            使える刻:9999999刻
                        </div>
                    </div>
                    <div className="game-right-middle-window">
                        アイテム
                    </div>
                    <div className="game-right-bottom-window">
                        <div className="button-center">
                            <Button 
                                text="状態保存"
                                onButtonClick={() => {}}
                            />
                        </div>
                        <div className="button-center">
                            <Button 
                                text="戻る"
                                onButtonClick={() => {}}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Game