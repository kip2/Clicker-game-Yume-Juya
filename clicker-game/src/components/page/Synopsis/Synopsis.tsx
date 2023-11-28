import Button from "../../ui/Button"
import "./Synopsis.css"
import "../../../index.css"
import { useCustomNavigate } from "../../functional/CustomNavigate"

function Synopsis () {
    const { navigateToPage } = useCustomNavigate()

    const handleNavigateTop = () => {
        navigateToPage("/")
    }

    return(
        <div className="synopsis-background outlined-text">
            <div className="synopsis-text">
                <div className="mt">
                    <p className="synopsis-p">
                        女は静かな調子を一段張り上げて、「百年待っていて下さい」と思い切った声で云った。
                    </p>
                    <p className="synopsis-p">
                        「百年、私の墓の傍に坐って待っていてください。きっと逢いに来ますから」
                    </p>
                </div>
                <p className="synopsis-p">
                    男は云った。
                </p>

                <p className="synopsis-large-p">
                    「そんなに待てるか！」
                </p>

                <p className="synopsis-p">
                    生来のせっかちであった。
                </p>
            </div>
            <div className="return-button">
                <Button
                    text="戻る"
                    onButtonClick={handleNavigateTop}
                />
            </div>
        </div>
    )
}

export default Synopsis