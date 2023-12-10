import "./Game.css"
import Button from "../../ui/Button"
import ItemBar from "./ItemBar"
import { useCustomNavigate } from "../../functional/CustomNavigate"
import { useState, useRef } from "react"
import ItemPurchase from "./ItemPurchase"
import TimeFormatter from "../../functional/TimeFormatter"
import data from "../../../json/itemList.json"
import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import { saveLocalData } from "../../functional/UserLodalData"
import ClearPopup from "./ClearPopup"

function Game () {
    const location = useLocation()
    const userData = location.state
    const [selectedItem, setSelectedItem] = useState<Item | null>(null)
    const { navigateToPage } = useCustomNavigate()
    const [totalSeconds, setTotalSeconds] = useState(userData.remainingTime)
    const [decrement, setDecrement] = useState(userData.decrementPerSecond)
    const [clickPosition, setClickPosition] = useState({ x: 0, y: 0})
    const [showNumber, setShowNumber] = useState(false)
    const [showClickNumber, setShowClickNumber] = useState(false)
    const [clickDecrement, setClickDecrement] = useState(userData.decrementPerClick)
    const [totalMoney, setTotalMoney] = useState(userData.money)
    const [showPopup, setShowPopup] = useState(false)
    const [showGameClear, setShowGameClear] = useState(false)
    const timerId = useRef<number>(null as unknown as number)

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

    const handleSaveButton = () => {
        const saveData:UserData = {
            name: userData.name,
            money: totalMoney,
            decrementPerSecond: decrement,
            decrementPerClick: clickDecrement,
            remainingTime: totalSeconds,
            items: userData.items
        }
        saveLocalData(saveData)
        setShowPopup(true)
        setTimeout(() => {
            setShowPopup(false)
        }, 2000)
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
        timerId.current = setInterval(() => {
            setShowNumber(true)
            setTotalSeconds((prevSeconds) => Math.max(prevSeconds - decrement, 0))
            setTotalMoney((prevMoney) => prevMoney + decrement)
            setTimeout(() => {
                setShowNumber(false)
            }, 700)

        }, 1000)
        return () => clearInterval(timerId.current)
    }, [decrement])

    useEffect(() => {
        if (totalSeconds <= 0) {
            setShowGameClear(true)
            setTotalSeconds(0)
            clearInterval(timerId.current)
        }
    }, [totalSeconds])

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
                        <p>秒間 {decrement} 秒ずつ</p>
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
                                {clickDecrement}秒
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
                                            remainingPurchaseQuantity={item.remainingPurchaseQuantity}
                                            onBarClick={()=> handleOnItemBarClick(item)}
                                        />
                                    )
                                })}
                            </>
                        }
                    </div>
                    <div className="game-right-bottom-window">
                        <div className="button-center">
                            {showPopup && <div className="savebutton-popup">データを保存しました</div>}
                            <Button 
                                text="状態保存"
                                onButtonClick={handleSaveButton}
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
                {showGameClear && 
                    <ClearPopup />
                }
            </div>
        </>
    )
}

export default Game