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
    backButton?: () => void
}


function ItemPurchase ({ 
    name, 
    remainingPurchaseQuantity, 
    reduceTime, 
    price, 
    description,
    imgUrl,
    backButton
}: ItemPurchaseProps) {
    const [inputValue, setInputValue] = useState("");

    const handleInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        setInputValue(value)
    }

    return (
        <>
            <h2> 細 目 </h2>
            <div className="purchase-information">
                <div className="purchase-information-description">
                    <p>{name}</p>
                    <p>残り購入数:{remainingPurchaseQuantity}</p>
                    <p>購入によって得る力</p>
                    <p>毎秒 {reduceTime}秒 追加</p>
                    <div className="purchase-information-item-description outlined-text">
                        {description}
                    </div>
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
                placeholder="幾ら購う？"
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
                    onButtonClick={()=>{}}
                />
            </div>
        </>
    )

}

export default ItemPurchase