import Button from "../../ui/Button"

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
            <Button 
                text="戻る"
                onButtonClick={backButton}
            />
        </>
    )

}

export default ItemPurchase