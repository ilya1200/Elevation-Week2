function getTime(callback) {
    const time = new Date()
    callback(time)
}


const returnTime = function (time) {
    alert('The current time is: ' + time)
}

getTime(returnTime)
