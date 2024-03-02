function reverseStringVersion2(inputString) {

    let stomach_1 = [];
    let stomach_2 = []

    for (let i = 0; i < inputString.length; i++) {
        stomach_1.push(inputString[i])
    }

    while (stomach_1.length > 0) {
        stomach_2.push(stomach_1.pop())
    }
    console.log("final", stomach_2.join(""))

}


reverseStringVersion2("james")