import "./Game.css"
import Button from "../../ui/Button"
import ItemBar from "./ItemBar"
import { useCustomNavigate } from "../../functional/CustomNavigate"
import { useState } from "react"
import ItemPurchase from "./ItemPurchase"
import TimeFormatter from "../../functional/TimeFormatter"

// todo: データの保存ボタンを設置したので、後で内部ロジックを実装する
// todo: アイテムの一覧をダミーで生成しているので、配列で値を渡す様に変更する

const item: Item = {
    name: "健さんのパナマの帽子",
    remainingPurchaseQuantity: 100,
    reduceTime: 3000,
    price: 2000000,
    description: "description",
    imgUrl: "./img/panamaHat.png"
}

function Game () {
    const [selectedItem, setSelectedItem] = useState<Item | null>(null)
    const { navigateToPage } = useCustomNavigate()

    const handleItemBackButton = () => {
        setSelectedItem(null)
    }

    const handleNavigateTop = () => {
        navigateToPage("/")
    }

    const handleOnItemBarClick = (item: Item ) => {
        setSelectedItem(item)
    }

    const totalSeconds = 100 * 365 * 24 * 60 * 60

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
                            className="click-moon"
                            src="./img/clickmoon.png"
                        />
                    </div>
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
                                {...item}
                                backButton={handleItemBackButton}
                            />
                        :
                            <>
                                <p>購入可能アイテム</p>
                                {[...Array(5)].map((_, i) => (
                                    <ItemBar 
                                        key={i}
                                        name={item.name}
                                        onBarClick={() => handleOnItemBarClick(item)}
                                    />
                                ))}
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