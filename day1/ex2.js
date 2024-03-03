// use mod  % to find remainder
function determineLeapYear(yearInput) {

    // on every year that is evenly divisible by 4
    if (yearInput % 4 == 0) {

        // except every year that is evenly divisible by 100
        if (yearInput % 100 == 0) {
            // unless the year is also evenly divisible by 400
            if (yearInput % 400 == 0)
                return true
            else
                return false 

        } else {
            return true
        }
    } else {
        return false
    }
}

console.log("2000 is", determineLeapYear(2000) ? "" : "not", "leap year")
console.log("1997 is", determineLeapYear(1997) ? "" : "not", "leap year")
console.log("1996 is", determineLeapYear(1996) ? "" : "not", "leap year")
console.log("1900 is", determineLeapYear(1900) ? "" : "not", "leap year")

