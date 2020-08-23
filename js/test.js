console.log('Hello');

setTimeout(function() {
	console.log('Bye');
}, 3000);

console.log('Hello Again');

function makeCallBack() {
    console.log("하루")
    let number = 1
    console.log(number)
    function secondCallBack() { 
        console.log("이틀")
        console.log(number)
        number += 1
        console.log(number)
        function thirdCallBack() { 
            console.log("사흘")
            console.log(number)
            number += 1
            console.log(number)
            function fourthCallBack() { 
                console.log("나흘")
                console.log(number)
                number += 1
                console.log(number)
                function fifthCallBack() { 
                    console.log("닷새")
                    console.log(number)
                    number += 1
                    console.log(number)
                    function sixthCallBack() { 
                        console.log("엿새")
                        console.log(number)
                        number += 1
                        console.log(number)
                        function seventhCallBack() { 
                            console.log("이래")
                            console.log(number)
                            number += 1
                            console.log(number)
                        }
                    }
                }
            }
        }
    }
}

