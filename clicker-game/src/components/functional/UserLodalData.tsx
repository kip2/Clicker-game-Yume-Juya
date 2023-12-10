
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
