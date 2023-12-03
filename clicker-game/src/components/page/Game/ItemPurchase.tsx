type ItemPurchaseProps = {
    name: string
    remainingPurchaseQuantity: number
    reduceTime: number
    price: number
    description: string
}


function ItemPurchase ({ name, remainingPurchaseQuantity, reduceTime, price, description}: ItemPurchaseProps) {
    return (
        <>
            <h1>ItemPurchase</h1>
        </>
    )

}

export default ItemPurchase