import "./Game.css"

function Game () {
    return (
        <>
            <div className="game-background">
                <div className="game-left-window">
                    左
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