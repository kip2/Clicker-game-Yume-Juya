import "./ItemBar.css"

type ItemBarProps = {
    name: string
}

function ItemBar ({ name }: ItemBarProps) {
    return(
        <>
            <div className="item-bar">
                <div className="item-box">
                    <img 
                        className="item-image"
                        src="./img/panamaHat.png"
                    />
                </div>
                <p className="itembar-item-name">
                    {name}
                    {/* 健さんのパナマの帽子 */}
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