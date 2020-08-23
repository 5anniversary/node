function firshCallBack() {
    console.log("월요일")
}
function secondCallBack() {
    console.log("화요일")
}
function thirdCallBack() {
    setTimeout (function third() {
        console.log("수요일")    
    }, 4000)
}
function fourthCallBack() {
    console.log("목요일")
}
function fifthCallBack() {
    console.log("금요일")
}
function sixthCallBack() {
    console.log("토요일")
}
function seventhCallBack() {
    console.log("일요일")
}

firshCallBack()
secondCallBack()
thirdCallBack()
fourthCallBack()
fifthCallBack()
sixthCallBack()
seventhCallBack()