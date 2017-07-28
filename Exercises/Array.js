// Cho 2 mảng đa chiều, viết phương thức cộng ma trận 2 mảng đấy.

let x = [
    [1, 2],
    [2, 3]
]
let y = [
    [5, 6],
    [7, 8]
]
// z = x + y = [
//     [6, 8],
//     [9, 11]
// ]


function matrixSum(x, y) {
    // let z = x.slice()
    let z = [...y]
    for (let i = 0; i < x.length; i++) {
        for (let j = 0; j < y.length; j++) {
            z[i][j] = x[i][j] + y[i][j]
        }
    }
    return z
}

let z = matrixSum(x, y)
console.log(y);


// viết function tính tổng căn bậc hai và bình phương của một mảng input

function sumRoot(array) {
    var sum = 0,
        i = array.length;
    while (i--)
        sum += Math.pow(array[i], 2);
    return sum;
}

function sumPow(array) {
    var sum = 0,
        i = array.length;
    while (i--)
        sum += Math.sqrt(array[i]);
    return sum;
}

console.log(sumRoot([0, 1, 2, 3, 4]));
console.log(sumPow([0, 1, 2, 3, 4]));


// viết function bỏ các phần tử "negative" của 1 mảng như null,undefined,0,false,...


function filter_array(test_array) {
    var index = -1,
        arr_length = test_array ? test_array.length : 0,
        resIndex = -1,
        result = [];

    while (++index < arr_length) {
        var value = test_array[index];

        if (value) {
            result[++resIndex] = value;
        }
    }

    return result;
}

let tArr = [null, false, '5633', 23, 0, -34]
console.log(filter_array(tArr))
console.log(tArr.filter(val => {
    return val
})) // cả 2 in ra cùng kết quả


// cho mảng [a,b], in ra một mảng gồm các số tụ nhiên từ a -> b
function listNumber(array) {
    let newArr = []
    if (array[0] < array[1]) {
        for (let i = array[0]; i < array[1]; i++) {
            newArr.push(i)
        }
        return newArr
    } else if (array[0] > array[1]) {
        for (let i = array[0]; i > array[1]; i--) {
            newArr.push(i)
        }
        return newArr
    } else {
        return [0]
    }
}

console.log(listNumber([3,3]));


// phẳng hóa mảng,ghép mảng với concat, xắp xếp với sort

let flattened = [
    [0, 1, 45, 9999],
    [2, 3, 47, 98],
    [4, 5, 100001]
].reduce((a, b) => {
    return a.concat(b)
}).sort((a,b)=> a-b);
// flattened
// flattened is [0, 1, 2, 3, 4, 5]
console.log(flattened);