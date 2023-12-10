type Item = {
    name: string
    remainingPurchaseQuantity: number,
    reduceTime: number,
    price: number,
    description: string,
    imgUrl: string
}

type UserData = {
    name: string
    money: number
    decrementPerSecond: number
    decrementPerClick: number
    remainingTime: number
    items: {
        [key: string]: number
    }
}