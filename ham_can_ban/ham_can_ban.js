function adjacentElementsProduct(inputArray) {
    let arr = [];
    for(let i = 0; i < inputArray.length - 1; i++){
        let total = inputArray[i] * inputArray[i + 1];
        arr.push(total);
    }
    console.log(arr)
    return Math.max.apply(Math, arr);
}

console.log(adjacentElementsProduct([1,2,3,5,9,1,4]))