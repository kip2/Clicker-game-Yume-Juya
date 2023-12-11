import Button from "../../ui/Button"
import "./ItemPurchase.css"
import { useState } from "react"

type ItemPurchaseProps = {
    name: string
    remainingPurchaseQuantity: number
    reduceTime: number
    price: number
    description: string
    imgUrl: string
    numberOfItemsUserHas: number
    backButton?: () => void
    purchaseButton?: (purchase:number) => void
}


function ItemPurchase ({ 
    name, 
    remainingPurchaseQuantity, 
    reduceTime, 
    price, 
    description,
    imgUrl,
    numberOfItemsUserHas,
    backButton,
    purchaseButton
}: ItemPurchaseProps) {
    const [inputValue, setInputValue] = useState("");

    const handleInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        setInputValue(value)
    }

    return (
        <>
            <h2 className="purchase-title"> 細 目 </h2>
            <div className="purchase-information">
                <div className="purchase-information-description">
                    <p>{name}</p>
                    <p>残り：{remainingPurchaseQuantity - numberOfItemsUserHas} 個</p>
                    <p>ひとつ：{price} 刻</p>
                    { (name === "大きな真珠貝") ? 
                        <p>ひと叩き 1割 増量</p>
                        :
                        <p>毎秒 {reduceTime}秒 追加</p>
                    }
                    <div className="purchase-information-item-description outlined-text">
                        {description}
                    </div>
                    {
                        remainingPurchaseQuantity - numberOfItemsUserHas === 0
                        ? <div className="purchase-sold-out-banner">完売御礼</div>
                        : <div></div>
                    }
                </div>
                <img
                    className="purchase-image"
                    src={imgUrl}
                >
                </img>
            </div>
            <input
                className="purchase-input"
                type="number"
                value={inputValue}
                onChange={handleInputValue}
                max={remainingPurchaseQuantity}
                min="0"
                placeholder="お幾つご入用ですか"
            ></input>
            <div className="display-price-box">
                <p className="display-price-description">購入時の対価</p>
                <p className="display-price-price">
                    { Number(inputValue) <= 0 ? 0 :
                    price * Number(inputValue)} 刻
                </p>
            </div>
            <div className="purchase-information-buttons">
                <Button 
                    text="戻る"
                    onButtonClick={backButton}
                />
                <Button
                    text="購入"
                    color="blue"
                    onButtonClick={() => {
                        if (purchaseButton) {
                            purchaseButton(Number(inputValue))
                        }
                    }}
                />
            </div>
        </>
    )

}

export default ItemPurchase