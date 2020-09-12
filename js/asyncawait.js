const week = (day) => {
    console.log(day)
    return new Promise ((resolved, rejected) => {
        if (day == "1st"){
            resolved(`일주일이 시작되었어요`)
        } else {
            rejected(`123`)
        }
    })
}

const monday = (param) => {
    return new Promise ((resolve, rejected) => {
        // console.log(param)
        resolve('월요일이에요')
        // rejected(new Error(`월요일에 아무것도 못했어요,,,`))
    })
}

const tuesday = (param) => {
    return new Promise ((resolved, rejected) => {
        resolved(`화요일이에요`)
    })
}

const wednesday = (param) => {
    return new Promise ((resolved, rejected) => {
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
        resolved(`금요일이에요`)
    })
}
const saturday = (param) => {
    return new Promise ((resolved, rejected) => {
        resolved(`토요일이에요`)
    })
}

const sunday = (param) => {
    return new Promise ((resolved, rejected) => {
        resolved(`일요일이에요`)
    })
}


async function asyncMain(){
    let result = await week('1s').catch(console.error)
    console.log(result)
    result = await monday("월요일이에요")
    console.log(result)

    result = await tuesday(result)
    console.log(result)
    
    result = await wednesday(result)
    console.log(result)

    result = await thursday(result)
    console.log(result)

    result = await friday(result)
    console.log(result)

    result = await saturday(result)
    console.log(result)

    result = await sunday(result)
    console.log(result)
}

asyncMain()