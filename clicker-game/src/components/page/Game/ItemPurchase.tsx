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
            <h1>ItemPurchase</h1>
            <div>

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