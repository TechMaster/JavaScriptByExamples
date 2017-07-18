// let func = function log(x) {
//     console.log(x);
// }
// func(34) // in ra 34
// log(34) // in ra undefined


// function log(x) {
//     function newFunction() {
//         console.log('this is function inside function');
//     }
//     newFunction()
//     console.log(x);
// }

// log(54)

// let pow = function (a, cb) {
//     if (!isNaN(a)) {
//         return cb('a must be a number', undefined)
//     }
//     return cb(false, a * a)
// }

// pow("4", function(err,result){
//     if (err) {
//         console.log(err);
//         return
//     }
//     console.log(result);
// })

// let arr = ['one','two','three','four']

// arr.forEach(function(value,index){
//     console.log(`${index+1}: ${value}.`)
// })
// function num(x){
//     // setTimeout(function(){
//         return x
//     // },0)
// }

// let x = num(5)

// console.log(x)

// let i = 0 // bt

// while (i < 10) {
//     log(i, (err, result) => {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log(result);
//         }
//     })
//     i++
// }

// function log(x, cb) {
//     setTimeout(function () {
//         if (isNaN(x)) {
//             return cb('error')
//         }
//         return cb(false,x)
//     }, 0);
// }

// let i = 0;
// while (i < 10) {
//     setTimeout(function () {
//         console.log(i)
//     }, 0)
//     i++
// } // in ra 10 số 10, trong khi ta cần in ra từ 0 đến 9


