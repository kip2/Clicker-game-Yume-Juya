import "./Game.css"
import Button from "../../ui/Button"
import ItemBar from "./ItemBar"
import { useCustomNavigate } from "../../functional/CustomNavigate"
import { useState } from "react"
import ItemPurchase from "./ItemPurchase"
import TimeFormatter from "../../functional/TimeFormatter"
import items from "../../../json/itemList.json"
import { useEffect } from "react"

// todo: データの保存ボタンを設置したので、後で内部ロジックを実装する

function Game () {
    const [selectedItem, setSelectedItem] = useState<Item | null>(null)
    const { navigateToPage } = useCustomNavigate()
    // todo: 秒数を計算してから最初に渡すロジックがいる
    const [totalSeconds, setTotalSeconds] = useState(100 * 365 * 24 * 60 * 60)
    const [decrement, setDecrement] = useState(25)

    const handleItemBackButton = () => {
        setSelectedItem(null)
    }

    const handleNavigateTop = () => {
        navigateToPage("/")
    }

    const handleOnItemBarClick = (item: Item ) => {
        setSelectedItem(item)
    }

    const handleMoonClick = () => {
        setTotalSeconds(totalSeconds - 25)
    }

    useEffect(() => {
        const timer = setInterval(() => {
            setTotalSeconds((prevSeconds) => Math.max(prevSeconds - decrement, 0))
        }, 1000)

        return () => clearInterval(timer)
    })

    return (
        <>
            <div className="game-background">
                <div className="game-left-window">
                    <div className="remaining-time">
                        <p className="remaining-time-header">残</p>
                        <p className="remaining-time-counter">{TimeFormatter(totalSeconds)}</p>
                        <p>秒間25秒ずつ</p>
                    </div>
                    <div>
                        <img 
                            onClick={handleMoonClick}
                            className="click-moon"
                            src="./img/clickmoon.png"
                        />
                    </div>
                    <p className="decreases-click">クリックごとに25秒ずつ</p>
                </div>
                <div className="game-right-window">
                    <div className="game-right-upper-window">
                        <div className="game-name-space">
                            名無しの飲兵衛
                        </div>
                        <div className="game-remaining-time-amount">
                            使える刻 ： 9999999刻
                        </div>
                    </div>
                    <div className="game-right-middle-window">
                        { selectedItem
                        ?
                            <ItemPurchase 
                                {...selectedItem}
                                backButton={handleItemBackButton}
                            />
                        :
                            <>
                                <p>購入可能アイテム</p>
                                {items.map((item, i) => {
                                    return(
                                        <ItemBar
                                            key={i}
                                            name={item.name}
                                            imgUrl={item.imgUrl}
                                            onBarClick={()=> handleOnItemBarClick(item)}
                                        />
                                    )
                                })}
                            </>
                        }
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
                                onButtonClick={handleNavigateTop}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Game