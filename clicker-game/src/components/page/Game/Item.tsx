import "./Item.css"

function Item () {
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
                    健さんのパナマの帽子
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

export default Item