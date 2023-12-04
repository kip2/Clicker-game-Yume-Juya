import "./ItemBar.css"

type ItemBarProps = {
    name: string
    imgUrl: string,
    userPossession: number
    onBarClick?: () => void
}

// todo: 所持数がハードコード

function ItemBar ({ name, imgUrl, userPossession, onBarClick }: ItemBarProps) {
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
            </div>
        </>
    )
}

export default ItemBar