import Button from "../../ui/Button"
import "./ItemPurchase.css"

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
    return (
        <>
            <h2> 細 目 </h2>
            <div className="purchase-information">
                <div className="purchase-information-description">
                    <p>{name}</p>
                    <p>残り購入数:{remainingPurchaseQuantity}</p>
                    <p>購入によって得る力</p>
                    <p>毎秒 {reduceTime}秒 追加</p>
                    <div className="purchase-information-item-description">
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
                max={remainingPurchaseQuantity}
                min="1"
                placeholder="幾ら購う？"
            ></input>
            <div className="display-price-box">
                <p className="display-price-description">購入時の対価</p>
                <p className="display-price-price">
                    2000000 刻
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