import "./ToastPopup.css"

// todo: popupに文字列を引数で渡す
// todo: 渡す文字列はenumで管理する
// todo: こちらのコンポーネント内で実績表示用データをフェッチする
// todo: トーストのレイアウトを考える
// todo: userDataの方の実績をtrueにする

function ToastPopup() {
    return (
        <>
            <p className="toast-popup">
                実績<br/>「あああああ」<br/>を達成しました
            </p>
        </>
    )
}

export default ToastPopup