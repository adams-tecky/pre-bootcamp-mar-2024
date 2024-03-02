function reverseStringVersion3(inputString) {

    let result = []
    let temp = [...inputString]

    while (temp.length) {
        result.push(temp.pop())
    }

    console.log(result.join(""))
}


reverseStringVersion3("james")