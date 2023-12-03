import Button from "../../ui/Button"
import "./ItemPurchase.css"

type ItemPurchaseProps = {
    name: string
    remainingPurchaseQuantity: number
    reduceTime: number
    price: number
    description: string
    backButton?: () => void
}


function ItemPurchase ({ 
    name, 
    remainingPurchaseQuantity, 
    reduceTime, 
    price, 
    description,
    backButton
}: ItemPurchaseProps) {
    return (
        <>
            <h2> 購 入 細 目 </h2>
            <div className="purchase-information">
                <div className="purchase-information-description">
                    <p>purchase</p>
                </div>
                <img
                    className="purchase-image"
                    src="./img/panamaHat.png"
                ></img>

            </div>
            <input
                className="purchase-input"
                type="number"
                min="1"
                placeholder="幾つ購う？"
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