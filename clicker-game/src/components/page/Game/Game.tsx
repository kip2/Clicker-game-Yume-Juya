import "./Game.css"
import Button from "../../ui/Button"
import ItemBar from "./ItemBar"
import { useCustomNavigate } from "../../functional/CustomNavigate"
import { useState, useRef, useContext } from "react"
import ItemPurchase from "./ItemPurchase"
import TimeFormatter from "../../functional/TimeFormatter"
import data from "../../../json/itemList.json"
import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import { saveLocalData } from "../../functional/UserLocalData"
import ClearPopup from "./ClearPopup"
import { GameContext } from "../../model/GameContext"
import ReturnTitleModal from "../Modal/ReturnTitleModal"
import Modal from "../Modal/Modal"
import ToastPopup from "./ToastPopup"

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
    const {gameClear, setGameClear} = useContext(GameContext)
    const timerId = useRef<number>(null as unknown as number)
    const items: Item[] = data
    const [returnModalOpen, setReturnModalOpen] = useState(false)
    const [totalClick, setTotalClick] = useState(userData.achievementStates.totalClick)
    const [showAchievementsPopup, setShowAchievementsPopup] = useState(false)
    const [achievementKey, setAchivementKey] = useState("")
    const [isClick100Achievement, setIsClick100Achievment] = useState(userData.achievements.click100)
    const [isClick1000Achievement, setIsClick1000Achievment] = useState(userData.achievements.click1000)
    const [isClick10000Achievement, setIsClick10000Achievment] = useState(userData.achievements.click10000)
    const [isClick100000Achievement, setIsClick100000Achievment] = useState(userData.achievements.click100000)
    const [isClick3153600000Achievement, setIsClick3153600000Achievment] = useState(userData.achievements.click3153600000)

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
            items: userData.items,
            achievements: {
                click100: isClick100Achievement,
                click1000: isClick1000Achievement,
                click10000: isClick10000Achievement,
                click100000: isClick100000Achievement,
                click3153600000: isClick3153600000Achievement
            },
            achievementStates: {
                totalClick: totalClick
            }
        }
        saveLocalData(saveData)
        setShowPopup(true)
        setTimeout(() => {
            setShowPopup(false)
        }, 2000)
    }

    useEffect(() => {
        const saveData:UserData = {
            name: userData.name,
            money: totalMoney,
            decrementPerSecond: decrement,
            decrementPerClick: clickDecrement,
            remainingTime: totalSeconds,
            items: userData.items,
            achievements: {
                click100: isClick100Achievement,
                click1000: isClick1000Achievement,
                click10000: isClick10000Achievement,
                click100000: isClick100000Achievement,
                click3153600000: isClick3153600000Achievement
            },
            achievementStates: {
                totalClick: totalClick
            }
        }
        saveLocalData(saveData)
    }, [isClick100Achievement, isClick1000Achievement, isClick10000Achievement, isClick100000Achievement, isClick3153600000Achievement])

    const handlePurchaseButton = (itemName: string) => (purchaseNumber: number) => {
        // 購入数が0なら
        if (purchaseNumber === 0) return

        const item = items.find(element => element.name === itemName)!

        // 購入数が、アイテムの数より多い場合は購入できない
        if (purchaseNumber >  item.remainingPurchaseQuantity - userData.items[itemName]) return

        let totalPrice = 0
    
        if (itemName === "大きな真珠貝") {
            const totalPossession = (Number(purchaseNumber) + userData.items[itemName])
            if (totalPossession === 1) {
                totalPrice = item.price * totalPossession
            } else {
                totalPrice = Math.ceil(item.price * (Number(purchaseNumber) + userData.items[itemName]) * 1.5)
            }
        } else {
            totalPrice = item.price * Number(purchaseNumber)
        }

        if (totalMoney > totalPrice){
            userData.items[itemName] += Number(purchaseNumber)
            // お金を減らす
            setTotalMoney(totalMoney - totalPrice)

            // 残り秒数を増やす
            setTotalSeconds(totalSeconds + totalPrice)

            if (itemName === "大きな真珠貝"){
                setClickDecrement(Math.ceil(clickDecrement * 1.05 * Number(purchaseNumber)))
            } else {
                // 秒間に減る秒数を追加
                setDecrement(decrement + item.reduceTime * Number(purchaseNumber))
            }
            setSelectedItem(null)
        } 
    }

    const handleReturnButton = () => {
        setReturnModalOpen(true)
    }

    const isClick3153600000Achievements = () => {
        if ( !userData.achievements.click3153600000 && totalClick == 3153600000) {
            setShowAchievementsPopup(true)
            setIsClick3153600000Achievment(true)
            setAchivementKey("click3153600000")
            setTimeout(() => {
                setShowAchievementsPopup(false)
                setAchivementKey("")
            }, 5000)
        }
    }

    const isClick100000Achievements = () => {
        if ( !userData.achievements.click100000 && totalClick == 100000) {
            setShowAchievementsPopup(true)
            setIsClick100000Achievment(true)
            setAchivementKey("click100000")
            setTimeout(() => {
                setShowAchievementsPopup(false)
                setAchivementKey("")
            }, 5000)
        }
    }
    const isClick10000Achievements = () => {
        if ( !userData.achievements.click10000 && totalClick == 10000) {
            setShowAchievementsPopup(true)
            setIsClick10000Achievment(true)
            setAchivementKey("click10000")
            setTimeout(() => {
                setShowAchievementsPopup(false)
                setAchivementKey("")
            }, 5000)
        }
    }

    const isClick1000Achievements = () => {
        if ( !userData.achievements.click1000 && totalClick == 1000) {
            setShowAchievementsPopup(true)
            setIsClick1000Achievment(true)
            setAchivementKey("click1000")
            setTimeout(() => {
                setShowAchievementsPopup(false)
                setAchivementKey("")
            }, 5000)
        }
    }

    const isClick100Achievements = () => {
        if ( !userData.achievements.click100 && totalClick == 100) {
            setShowAchievementsPopup(true)
            setIsClick100Achievment(true)
            setAchivementKey("click100")
            setTimeout(() => {
                setShowAchievementsPopup(false)
                setAchivementKey("")
            }, 5000)
        }
    }

    const handleMoonClick = (e: React.MouseEvent<HTMLElement>) => {
        const offsetX = e.nativeEvent.offsetX
        const offsetY = e.nativeEvent.offsetY
        setClickPosition({ x: offsetX - 20, y: offsetY - 60})
        setShowClickNumber(true)
        setTotalSeconds(Math.max(totalSeconds - clickDecrement, 0))
        setTotalMoney(totalMoney + clickDecrement)
        setTotalClick(totalClick + 1)

        // 100回クリック実績達成かを判定
        isClick100Achievements()

        // 1000回クリック実績達成かを判定
        isClick1000Achievements()

        // 10000回クリック実績達成かを判定
        isClick10000Achievements()

        // 100000回クリック実績達成かを判定
        isClick100000Achievements()

        // 3153600000回クリック実績達成かを判定
        isClick3153600000Achievements()

        setTimeout(() => {
            setShowClickNumber(false)
        }, 100)
    }


    useEffect(() => {
        timerId.current = setInterval(() => {
            setShowNumber(true)
            setTotalSeconds((prevSeconds: number) => Math.max(prevSeconds - decrement, 0))
            setTotalMoney((prevMoney: number) => prevMoney + decrement)
            setTimeout(() => {
                setShowNumber(false)
            }, 700)

        }, 1000)
        return () => clearInterval(timerId.current)
    }, [decrement])

    useEffect(() => {
        if (totalSeconds <= 0) {
            setGameClear(true)
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
                                style={{ left: 250, top: 30}}
                            >
                                {decrement}秒
                            </span>
                        )}
                        <p>秒間 {decrement} 秒ずつ</p>
                    </div>
                    <div className="game-click-window">
                        <img 
                            onClick={handleMoonClick}
                            className="click-moon"
                            src="./img/clickmoon.png"
                            draggable="false"
                        />
                        {showClickNumber && (
                            <span
                                className="animated-click-number"
                                style={{ left: clickPosition.x, top: clickPosition.y}}
                            >
                                {clickDecrement}秒
                            </span>
                        )}
                    </div>
                    <p className="decreases-click">ひと叩き {clickDecrement} 秒減</p>
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
                                userPossesionSinjugai={userData.items[selectedItem.name]}
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
                            {/* 実績ポップアップ用 */}
                            {showAchievementsPopup && 
                                <ToastPopup 
                                    name={achievementKey}
                                />
                            }
                            <Button 
                                text="状態保存"
                                onButtonClick={handleSaveButton}
                            />
                        </div>
                        <div className="button-center">
                            <Button 
                                text="戻る"
                                onButtonClick={handleReturnButton}
                            />
                        </div>
                    </div>
                </div>
            </div>
            {gameClear && 
                <>
                    <div className="game-overlay"></div>
                    <div className="confetti">
                        <span></span> <span></span> <span></span> <span></span><span></span>
                        <span></span> <span></span> <span></span> <span></span><span></span>
                        <span></span> <span></span> <span></span> <span></span><span></span>
                        <span></span> <span></span> <span></span> <span></span><span></span>
                        <span></span> <span></span> <span></span> <span></span><span></span>
                        <span></span> <span></span> <span></span> <span></span><span></span>
                        <span></span> <span></span> <span></span> <span></span><span></span>
                        <span></span> <span></span> <span></span> <span></span><span></span>
                        <span></span> <span></span> <span></span> <span></span><span></span>
                        <span></span> <span></span> <span></span> <span></span><span></span>
                    </div>
                    <ClearPopup />
                </>
            }
            <div>
                {returnModalOpen && (
                    <>
                        <div className="overlay" onClick={() => setReturnModalOpen(false)}></div>
                        <Modal onClose={()=> setReturnModalOpen(false)}>
                            <ReturnTitleModal 
                                handleSaveButton={handleSaveButton}
                                handleNavigateTop={handleNavigateTop}
                            />
                        </Modal>
                    </>
                )}
            </div>
        </>
    )
}

export default Game