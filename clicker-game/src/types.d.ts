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
    achievements: {
        click100: boolean
        click1000: boolean
        click10000: boolean
        click100000: boolean, 
        click3153600000: boolean,
    }
    achievementStates: {
        totalClick: number
    }
}