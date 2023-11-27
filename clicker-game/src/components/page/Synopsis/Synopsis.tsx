import Button from "../../ui/Button"
import "./Synopsis.css"

// todo: 機能をあとで追加する
const returnTop = () => {}

const Synopsis = () => {
    return(
        <div className="synopsis-background">
            <p>
                女は静かな調子を一段張り上げて、「百年待っていて下さい」と思い切った声で云った。
            </p>
            <p>
                「百年、私の墓の傍に坐って待っていてください。きっと逢いに来ますから」
            </p>

            <p>
                男は云った。
            </p>

            <p>
                「そんなに待てるか！」
            </p>

            <p>
                生来のせっかちであった。
            </p>
            <Button
                text="戻る"
                onButtonClick={returnTop}
            />
        </div>
    )
}

export default Synopsis