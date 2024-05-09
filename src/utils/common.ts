export function formatTime(time: string) {
    let timeObj = new Date(time)

    let month = timeObj.getMonth() + 1
    let year = timeObj.getFullYear()

    return `${month} ${year}`
}