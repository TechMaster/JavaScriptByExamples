// let a = {x:4,y:5}
// // let b = Object.assign({},a);
// let b =a

// b.x = 1
// b.y = 2

// console.log('a: ',a);
// console.log('b: ',b);

// a.x = 20
// a.y = 10

// console.log('a: ',a);
// console.log('b: ',b);

// let o = [4,6,8]
// let m = []
// m = o
// let n = [...o]
// o[0] = 'a'

// console.log('o: ',o);
// console.log('m: ',m);
// console.log('n: ',n);







// Array.prototype.thisIsNewMethod = (yourName) => {
//     if(yourName) return `Hey ${yourName} !`
//     return `Hey, Hello Ya !`
// }

// let x = []

// console.log(x.thisIsNewMethod());
// console.log(x.thisIsNewMethod('You'));


// let stringArray = ['One', 'Two', 'Three', 'Four', 'One']

// for (let i = 0; i < stringArray.length; i++) {
//     console.log(stringArray[i])    
// }

// stringArray.forEach((element) => {
//     console.log(element)
// });

// for (let index in stringArray) {
//     console.log(stringArray[index])
// }

// for (let value of stringArray){
//     console.log(value)
// }

// let arr1 = [0,1,2,3]
// let arr2 = arr1

// for (let i = 0; i < arr2.length; i++) {
//     arr2[i] = arr2[i] * 2
// }


// console.log('arr1: ',arr1)
// console.log('arr2: ',arr2)

// let arr1 = [0,1,2,3]
// let arr2 = [...arr1]

// for (let i = 0; i < arr2.length; i++) {
//     arr2[i] = arr2[i] * 2  // thay đổi giá trị của mảng arr2
// }

// console.log('arr1: ',arr1) // in ra arr1:  [ 0, 1, 2, 3 ]
// console.log('arr2: ',arr2) // in ra arr2:  [ 0, 2, 4, 6 ]

// console.log(arr1.sort((a,b)=>{return a<b}));

// Array.prototype.findMax = function (max = 0) {
//     try {
//         this.forEach(ele => {
//             if ((typeof ele) !== 'number') throw new Error("The array's elements must containt only number")
//             if (ele > max) max = ele
//         })
//         return max
//     } catch (error) {
//         return error
//     }
// }

// let maxNumber = [12, 2, 54, 34]
// let test = ['a','b',3,32]
// console.log(maxNumber.findMax()); // in ra max = 54
// console.log(test.findMax())       // in ra Error: The array's elements must containt only number

let arr = [2, 3, 44, 89, 23, 44, 6, 2, 3, 101, 2, 3]

// let subArr = arr.map((value,i,array) => {
//     // return(array[i]*2)   // trả về phần tử thứ i trong mảng vào gán vào mảng subArr
//     return value*2          // trả về giá trị của phần tử trong mảng và gán vào mảng sybArr     
// })

// let subArr = arr.filter((value, i, array) => {
//     return array.indexOf(value) === i
// })

// let subArr = arr.reduce((pre, cur, i, array) => {
//     if (pre > cur)
//     return cur 
// })

// console.log(subArr); // in ra [ 4, 6, 88, 178, 46, 88, 12, 4, 6, 202 ]
// console.log(arr) // in ra [ 2, 3, 44, 89, 23, 44, 6, 2, 3, 101 ]

var flattened = [
    [0, 1, 45, 9999],
    [2, 3, 47, 98],
    [4, 5, 100001]
].reduce((a, b) => {
    return a.concat(b)
});
flattened.sort((a,b)=> a-b)
// flattened is [0, 1, 2, 3, 4, 5]
console.log(flattened);