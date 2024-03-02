let countLimit = 5
let count = 0
let intervalId;
// function scope
function sayHi() {
    if (count < countLimit) {
        console.log("hiiii")
        count = count + 1
    } else {
        console.log("check intervalID before cancel:", intervalId)

        clearInterval(intervalId)
    }
}


intervalId = setInterval(sayHi, 1000)

console.log("intervalID:", intervalId)
