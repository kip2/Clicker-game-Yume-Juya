import "./ToastPopup.css"
import achievementData from "../../../json/achievement.json"

// todo: 渡す文字列はenumで管理する
// todo: こちらのコンポーネント内で実績表示用データをフェッチする
// todo: userDataの方の実績をtrueにする

type ToastPopupProps = {
    name: string
}

function ToastPopup({name}: ToastPopupProps) {
    const findDataByKey = (key: string) => {
        const data = achievementData.find((item) => item[key])
        return data ? data[key] : null
    }

    const handleToast = () => {
        const achivementText = findDataByKey(name)
        return achivementText ? achivementText.achivement : "データが見つかりません"
    }

    return (
        <>
            <p className="toast-popup">
                実績<br/>「{handleToast()}」<br/>を達成しました
            </p>
        </>
    )
}

export default ToastPopup