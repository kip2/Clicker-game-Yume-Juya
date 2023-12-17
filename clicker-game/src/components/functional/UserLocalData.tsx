export const createNewLocalData = ( userName : string):UserData => {
    const newUserData: UserData = {
        name: userName,
        money: 0,
        decrementPerSecond: 1,
        decrementPerClick: 1,
        remainingTime: 100 * 365 * 24 * 60 * 60,
        items: {
            "健さんのパナマの帽子": 0,
            "大きな真珠貝":0,
            "隣の床の間の置き時計":0,
            "豆腐屋のラッパ":0,
            "掘り損ねた仁王像":0,
            "真鍮で拵えた飴屋の笛":0,
            "檳榔樹のステッキ":0,
            "行き先不明の船":0,
            "運慶の仁王像":0,
            "祈りの八幡宮":0,
            "侍の悟り":0,
        },
        achievements: {
            click100: false,
            click1000: false, 
            click10000: false, 
            click100000: false, 
            click3153600000: false,
        },
        achievementStates: {
            totalClick: 0,
        }
    }
    return newUserData
}

export const saveLocalData = (saveData: UserData) => {
    localStorage.setItem('yumejuuya', JSON.stringify(saveData))
}

export const loadingLocalData = () => {
    const data = localStorage.getItem("yumejuuya")
    if (data) {
        const userSaveData = JSON.parse(data)
        return userSaveData
    }
    return null
}

export const removeLocalData = () => {
    localStorage.removeItem("yumejuuya")
}
