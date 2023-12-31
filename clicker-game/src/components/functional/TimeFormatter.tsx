function formatSeconds(totalSeconds: number) {
    const secondsPerMinute = 60;
    const minutesPerHour = 60;
    const hoursPerDay = 24;
    const daysPerYear = 365;
    const secondsPerHour = secondsPerMinute * minutesPerHour;
    const secondsPerDay = secondsPerHour * hoursPerDay;
    const secondsPerYear = secondsPerDay * daysPerYear;

    const years = Math.floor(totalSeconds / secondsPerYear)
    totalSeconds %= secondsPerYear
    const days = Math.floor(totalSeconds / secondsPerDay)
    totalSeconds %= secondsPerDay
    const hours = Math.floor(totalSeconds / secondsPerHour)
    totalSeconds %= secondsPerHour
    const minutes = Math.floor(totalSeconds / secondsPerMinute)
    totalSeconds %= secondsPerMinute
    const seconds = totalSeconds

    return `${years}年${days}日${hours}時間${minutes}分${seconds}秒`
}

function TimeFormatter(totalSeconds: number) {
    const formattenTime = formatSeconds(totalSeconds)

    return formattenTime
}

export default TimeFormatter