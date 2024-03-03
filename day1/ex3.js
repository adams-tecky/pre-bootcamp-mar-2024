// let input = "mystring"


// console.log(input.length)

// console.log(input[7])


// adams
//     |
//      start index

function reverseOutput(inputString) {

    let result = "";
    // console.log(`length of string input '${inputString}':`, inputString.length)
    let startIndex = inputString.length - 1
    // console.log("startIndex of selector:", startIndex, "which is character:", inputString[startIndex])
    // console.log("loop start:")
    for (let i = 0; i < inputString.length; i++) {
        // console.log("i:", i)
        let targetIndex = startIndex - i
        // console.log(`targetIndex cal from  ${startIndex} - ${i}:`, targetIndex, ",character:", inputString[targetIndex])

        // console.log(inputString[targetIndex])
        result += inputString[targetIndex]
        // console.log("result after string concat in the loop:", result)
        // console.log("end of 1 loop")
    }

    // console.log("loop end")
    console.log(result)
}

reverseOutput("adams")