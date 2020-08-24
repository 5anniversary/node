const week = (day) => {
    console.log(day)
    return new Promise ((resolved, rejected) => {
        resolved(`일주일이 시작되었어요`)
    })
}

const monday = (param) => {
    return new Promise ((resolve, rejected) => {
        console.log(param)
        resolve('월요일이에요')
        // rejected(new Error(`월요일에 아무것도 못했어요,,,`))
    })
}

const tuesday = (param) => {
    return new Promise ((resolved, rejected) => {
        console.log(param)
        resolved(`화요일이에요`)
    })
}

const wednesday = (param) => {
    return new Promise ((resolved, rejected) => {
        console.log(param)
        resolved(`수요일이에요`)
    })
}

const thursday = (param) => {
    return new Promise ((resolved, rejected) => {
        console.log(param)
        resolved(`목요일이에요`)
    })
}

const friday = (param) => {
    return new Promise ((resolved, rejected) => {
        console.log(param)
        resolved(`금요일이에요`)
    })
}
const saturday = (param) => {
    return new Promise ((resolved, rejected) => {
        console.log(param)
        resolved(`토요일이에요`)
    })
}

const sunday = (param) => {
    return new Promise ((resolved, rejected) => {
        console.log(param)
        resolved(`일요일이에요`)
    })
}

let promise = week('1st')

promise
    .then(monday)
    .then(console.log)
    .then(tuesday)
    .then(console.log)
    .then(wednesday)
    .then(console.log)
    .then(thursday)
    .then(console.log)
    .then(friday)
    .then(console.log)
    .then(saturday)
    .then(console.log)
    .then(sunday)
    .catch(console.error)
    .then(sunday)

    
