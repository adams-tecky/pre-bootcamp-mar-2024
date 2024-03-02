// let input = "mystring"


// console.log(input.length)

// console.log(input[7])


// adams
//     |
//      start index

function reverseOutput(inputString) {

    let result = "";
    let startIndex = inputString.length - 1
    for (let i = 0; i < inputString.length; i++) {

        let targetIndex = startIndex - i
        // console.log(inputString[targetIndex])
        result += inputString[targetIndex]
    }
    console.log(result)
}

reverseOutput("adams")