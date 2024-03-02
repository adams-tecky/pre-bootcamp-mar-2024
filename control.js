
let array = ['ada', 'adams', 'amy', 'ben', 'bing', 'charlie']
for (let index = 0; index < 10; index++) {
    const element = array[index];
    console.log(`Element at index ${index} 's value is ${array[index]}`)
}


console.log(1 <= 1)


// of vs in
for (let entry in array) {
    console.log("case1",entry)
}

console.log(preBootcamp)


for (let key in preBootcamp) {
    console.log(`Info of preBootcamp's ${key} is ${preBootcamp[key]}`)
}