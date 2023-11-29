import "./Game.css"

function Game () {
    return (
        <>
            <div className="game-background">
                <div className="game-left-window">
                    <div className="remaining-time">
                        <p className="remaining-time-header">残</p>
                        <p>99年9999時間9999分9999秒</p>
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
                        右上
                    </div>
                    <div className="game-right-middle-window">
                        アイテム
                    </div>
                    <div className="game-right-bottom-window">
                        ボタン
                    </div>
                </div>
            </div>
        </>
    )
}

export default Game