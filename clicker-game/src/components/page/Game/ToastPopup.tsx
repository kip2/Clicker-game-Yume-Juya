import "./ToastPopup.css"
import achievementJsonData from "../../../json/achievement.json"

// todo: 渡す文字列はenumで管理する
// todo: userDataの方の実績をtrueにする

type ToastPopupProps = {
    name: string
}

const emptyAchivementData: AchievmentRecord = {
    empty: {
        achievment: "empty",
        description: "empty"
    }
}

function ToastPopup({name}: ToastPopupProps) {
    const achievementData: Achievments= achievementJsonData

    const findDataByKey = (key: string): Achievment => {
        for (let item of achievementData) {
            if (Object.prototype.hasOwnProperty.call(item, key)) {
                return item[key]
            }
        }
        return emptyAchivementData.empty
    }

    const handleToast = (): string => {
        const achievmentRecord = findDataByKey(name) 
        return  achievmentRecord && achievmentRecord.achievment ? achievmentRecord.achievment 
        : "データが見つかりません"
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