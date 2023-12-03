import "./ItemBar.css"

type ItemBarProps = {
    name: string
    onBarClick?: () => void
}

// todo: 所持数がハードコード

function ItemBar ({ name, onBarClick }: ItemBarProps) {
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
                        src="./img/items/panamaHat.png"
                    />
                </div>
                <p className="itembar-item-name">
                    {name}
                </p>
                <div className="number-of-item-box">
                    所持
                    <br/>
                    2個
                </div>
            </div>
        </>
    )
}

export default ItemBar