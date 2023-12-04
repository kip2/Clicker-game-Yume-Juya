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
    const [clickPosition, setClickPosition] = useState({ x: 0, y: 0})
    const [showNumber, setShowNumber] = useState(false)
    const [showClickNumber, setShowClickNumber] = useState(false)
    const [clickDecrement, setClickDecrement] = useState(25)
    const [totalMoney, setTotalMoney] = useState(0)

    const handleItemBackButton = () => {
        setSelectedItem(null)
    }

    const handleNavigateTop = () => {
        navigateToPage("/")
    }

    const handleOnItemBarClick = (item: Item ) => {
        setSelectedItem(item)
    }

    const handleMoonClick = (e) => {
        const { clientX, clientY } = e;
        setClickPosition({ x: clientX - 20, y: clientY - 60})
        setShowClickNumber(true)
        setTotalSeconds(totalSeconds - clickDecrement)
        setTotalMoney(totalMoney + clickDecrement)

        setTimeout(() => {
            setShowClickNumber(false)
        }, 100)
    }

    useEffect(() => {
        const timer = setInterval(() => {
            setShowNumber(true)
            setTotalSeconds((prevSeconds) => Math.max(prevSeconds - decrement, 0))
            setTotalMoney(totalMoney + decrement)
        }, 1000)

        setTimeout(() => {
            setShowNumber(false)
        }, 500)

        return () => clearInterval(timer)
    })

    return (
        <>
            <div className="game-background">
                <div className="game-left-window">
                    <div className="remaining-time">
                        <p className="remaining-time-header">百 年 迄</p>
                        <p className="remaining-time-counter">{TimeFormatter(totalSeconds)}</p>
                        {showNumber && (
                            <span
                                className="animatedNumber"
                                style={{ left: 400, top: 110}}
                            >
                                {decrement}
                            </span>
                        )}
                        <p>秒間25秒ずつ</p>
                    </div>
                    <div>
                        <img 
                            onClick={handleMoonClick}
                            className="click-moon"
                            src="./img/clickmoon.png"
                            draggable="false"
                        />
                        {showClickNumber && (
                            <span
                                className="animatedNumber"
                                style={{ left: clickPosition.x, top: clickPosition.y}}
                            >
                                {clickDecrement}
                            </span>
                        )}
                    </div>
                    <p className="decreases-click">クリックごとに25秒ずつ</p>
                </div>
                <div className="game-right-window">
                    <div className="game-right-upper-window">
                        <div className="game-name-space">
                            名無しの飲兵衛
                        </div>
                        <div className="game-remaining-time-amount">
                            使える刻 ： {totalMoney}
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
                                <p className="game-oshinagaki"> 御 品 書 </p>
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