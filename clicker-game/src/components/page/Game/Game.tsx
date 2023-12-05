import "./Game.css"
import Button from "../../ui/Button"
import ItemBar from "./ItemBar"
import { useCustomNavigate } from "../../functional/CustomNavigate"
import { useState } from "react"
import ItemPurchase from "./ItemPurchase"
import TimeFormatter from "../../functional/TimeFormatter"
import data from "../../../json/itemList.json"
import { useEffect } from "react"

// todo: データの保存ボタンを設置したので、後で内部ロジックを実装する

const userData = {
    name: "名無しの権兵衛",
    money: 0,
    decrementPerSecond: 25,
    decrementPerClick: 25,
    remainingTime: 100 * 365 * 24 * 60 * 60,
    items: {
        "健さんのパナマの帽子": 1,
        "大きな真珠貝":0,
        "隣の床の間の置き時計":0,
        "豆腐屋のラッパ":0,
        "掘り損ねた仁王像":0,
        "真鍮で拵えた飴屋の笛":0,
        "檳榔樹のステッキ":0,
        "行き先不明の船":0,
        "運慶の仁王像":0,
        "祈りの八幡宮":0,
        "侍の悟り":0,
    }
}

function Game () {
    const [selectedItem, setSelectedItem] = useState<Item | null>(null)
    const { navigateToPage } = useCustomNavigate()
    // todo: 秒数を計算してから最初に渡すロジックがいる
    const [totalSeconds, setTotalSeconds] = useState(userData.remainingTime)
    const [decrement, setDecrement] = useState(userData.decrementPerSecond)
    const [clickPosition, setClickPosition] = useState({ x: 0, y: 0})
    const [showNumber, setShowNumber] = useState(false)
    const [showClickNumber, setShowClickNumber] = useState(false)
    const [clickDecrement, setClickDecrement] = useState(userData.decrementPerClick)
    const [totalMoney, setTotalMoney] = useState(userData.money)

    const items: Item[] = data

    const handleItemBackButton = () => {
        setSelectedItem(null)
    }

    const handleNavigateTop = () => {
        navigateToPage("/")
    }

    const handleOnItemBarClick = (item: Item ) => {
        setSelectedItem(item)
    }

    const handlePurchaseButton = (itemName: string) => (purchaseNumber: number) => {
        // 購入数が0なら
        if (purchaseNumber === 0) return

        const item = items.find(element => element.name === itemName)!

        // 購入数が、アイテムの数より多い場合は購入できない
        if (purchaseNumber >  item.remainingPurchaseQuantity - userData.items[itemName]) return
    
        
        const totalPrice = item.price * Number(purchaseNumber)
        if (totalMoney > totalPrice){
            userData.items[itemName] += Number(purchaseNumber)
            // お金を減らす
            setTotalMoney(totalMoney - totalPrice)

            // 残り秒数を増やす
            setTotalSeconds(totalSeconds + totalPrice)

            // 秒間に減る秒数を追加
            setDecrement(decrement + item.reduceTime * Number(purchaseNumber))
            setSelectedItem(null)
        } 
    }

    const handleMoonClick = (e) => {
        const { clientX, clientY } = e;
        setClickPosition({ x: clientX - 20, y: clientY - 60})
        setShowClickNumber(true)
        setTotalSeconds(Math.max(totalSeconds - clickDecrement, 0))
        setTotalMoney(totalMoney + clickDecrement)

        setTimeout(() => {
            setShowClickNumber(false)
        }, 100)
    }

    useEffect(() => {
        const timer = setInterval(() => {
            setShowNumber(true)
            setTotalSeconds((prevSeconds) => Math.max(prevSeconds - decrement, 0))
            setTotalMoney((prevMoney) => prevMoney + decrement)
            setTimeout(() => {
                setShowNumber(false)
            }, 700)

        }, 1000)
        return () => clearInterval(timer)
    }, [decrement])

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
                                style={{ left: 300, top: 110}}
                            >
                                {decrement}秒
                            </span>
                        )}
                        <p>秒間{decrement}秒ずつ</p>
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
                    <p className="decreases-click">クリックごとに{clickDecrement}秒ずつ</p>
                </div>
                <div className="game-right-window">
                    <div className="game-right-upper-window">
                        <div className="game-name-space">
                            {userData.name}
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
                                numberOfItemsUserHas={userData.items[selectedItem.name]}
                                backButton={handleItemBackButton}
                                purchaseButton={handlePurchaseButton(selectedItem.name)}
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
                                            userPossession={userData.items[item.name]}
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