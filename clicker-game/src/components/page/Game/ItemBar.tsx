import "./ItemBar.css"

type ItemBarProps = {
    name: string
    imgUrl: string,
    userPossession: number
    remainingPurchaseQuantity: number
    onBarClick?: () => void
}

function ItemBar ({ 
    name, 
    imgUrl, 
    userPossession, 
    remainingPurchaseQuantity,
    onBarClick }: ItemBarProps) {
    return(
        <>
            <div 
                className="item-bar"
                onClick={onBarClick}
            >
                <div 
                className="item-box">
                    <img 
                        className="item-image"
                        src={imgUrl}
                    />
                </div>
                <p className="itembar-item-name">
                    {name}
                </p>
                <div className="number-of-item-box">
                    所持
                    <br/>
                    {userPossession} 個
                </div>
                {
                    remainingPurchaseQuantity - userPossession === 0
                    ? <div className="item-bar-sold-out-banner">完売御礼</div>
                    : <div></div>
                }
            </div>
        </>
    )
}

export default ItemBar