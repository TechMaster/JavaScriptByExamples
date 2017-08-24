# Array

Viết bởi Phan Quân.

## I. Mảng trong Javascript

#### Định nghĩa:

Mảng trong javascript dùng để lưu trữ nhiều giá trị trong một biến.

```javascript
// ví dụ:
// Mảng số
let numberArray = [1, 2, 3, 4]

//Mảng chuỗi
let stringArray = ['One', 'Two', 'Three', 'Four', 'One']

//mảng đa chiều
let multiDimensionArray = [
    [0, 1],
    [2, 3],
    [4, 5]
]

// Mảng đối tượng
let objectArray = [{
    name: "Tom",
    age: 5
}, {
    name: "Jerry",
    age: 4
}, {
    name: "Spike",
    age: 7
}]
```
Cách khai báo mảng:

```javascript
// tránh khai báo kiểu constructor:
let arr = new Array(40) // arr sẽ có 40 phần tử có giá trị là undefined
let arr = new Array(30,40) // arr sẽ có 2 phần tử 30 và 40

// nên
let arr = [40]      // arr có 1 phần tử là 40
let arr = [30,40]   // ar có 2 phần tử là 30,40
```


#### Truy vấn phần tử trong Mảng:

Ta sẽ sử dụng Bracket Notation (dấu []) và gọi tới phần tử trong mảng thông qua vị trí của chúng trong mảng, vị trí luôn bắt đầu từ 0.

```javascript
// lấy ví dụ ở trên
console.log(numberArray[2]) // in ra 3
console.log(stringArray[0]) // in ra 'One'
console.log(multiDimensionArray[1][1]) // in ra 3
console.log(objectArray[2]) // in ra {name:"Spike",age:7}
```
Lặp các phần tử trong mảng và in ra chúng:

Vòng lặp for và forEach, for..in, for...of:

```javascript
let stringArray = ['One', 'Two', 'Three', 'Four', 'One']

for (let i = 0; i < stringArray.length; i++) {
    console.log(stringArray[i])    
}

for (let index in stringArray) {
    console.log(stringArray[index])
}

for (let value of stringArray){
    console.log(value)
}

stringArray.forEach((element) => {
    console.log(element)
})

// Đều in ra One Two Three Four One
```

#### Tính tham chiếu của Mảng và Side Effect:

Giống đối tượng, mảng có tính tham chiếu nên nếu ta copy mảng không cẩn thận sẽ tạo ra side effect (tác dụng phụ) và side effect này sẽ ảnh hưởng cả 2 mảng khi ta thay đổi giá trị của 1 mảng:

```javascript
let arr1 = [0,1,2,3]
let arr2 = arr1     // gán giá trị arr1 cho arr2

for (let i = 0; i < arr2.length; i++) {
    arr2[i] = arr2[i] * 2  // thay đổi giá trị của mảng arr2
}

console.log('arr1: ',arr1) // in ra arr1:  [ 0, 2, 4, 6 ]
console.log('arr2: ',arr2) // in ra arr2:  [ 0, 2, 4, 6 ]
```

Ta thấy sau khi gán mảng arr1 cho mảng arr2, và thay đổi mảng arr2 thì giá trị của cả 2 mảng đều thay đổi, ta gọi đây là một side effect, để fix lỗi này, ta dùng cách gán [...arr] như sau:

```javascript
let arr1 = [0,1,2,3]
let arr2 = [...arr1] // gán mảng bằng [...arrayName]

for (let i = 0; i < arr2.length; i++) {
    arr2[i] = arr2[i] * 2  // thay đổi giá trị của mảng arr2
}
// Đã in ra đúng
console.log('arr1: ',arr1) // in ra arr1:  [ 0, 1, 2, 3 ]
console.log('arr2: ',arr2) // in ra arr2:  [ 0, 2, 4, 6 ]
```

#### Các method cơ bản của Mảng:

#### Array.prototype để bổ sung phương thức cho Mảng:

Sẽ nói củ thể ở phần Prototype của OOP. Ta sử dụng Array.prototype để bổ sung thêm method cho mảng:

```javascript
// Bổ sung method tìm số lớn nhất trong mảng số
Array.prototype.findMax = function (max = 0) {
    try {
        this.forEach(ele => { // this trỏ tới mảng.
            if ((typeof ele) !== 'number') {
                throw new Error("The array's elements must containt only number")
            }
            if (ele > max) {
                max = ele
            }
        })
        return max
    } catch (error) {
        return error
    }
}

let maxNumber = [12, 2, 54, 34]
let test = ['a','b',3,32]
console.log(maxNumber.findMax()); // in ra max = 54
console.log(test.findMax());       // in ra Error: The array's elements must containt only number
```

