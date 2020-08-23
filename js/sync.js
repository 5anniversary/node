function callBack(cb) {
    cb()
}

function week(day) {
    day = "월요일"
    callBack(function () {
        console.log(day)
        day = "화요일"
        callBack(function () {
            console.log(day)
            day = "수요일"
            callBack(function () {
                console.log(day)
                day = "목요일"
                callBack(function () {
                    console.log(day)
                    day = "금요일"
                    callBack(function () {
                        console.log(day)
                        day = "토요일"
                        callBack(function () {
                            console.log(day)
                            day = "일요일"
                            callBack(function () {
                                console.log(day)
                            })
                        })
                    })
                })
            })
        })
    })
}


week()