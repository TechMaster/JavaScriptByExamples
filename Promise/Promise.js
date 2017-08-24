const Promise = require('bluebird')
const fs = require('fs')

// const pro1 = new Promise((resolve, reject) => {
//     // console.log(`Handling add()`);
//     const add = (a, b) => {
//         if (typeof (a) !== 'number' || typeof (b) !== 'number') {
//             reject('a,b must be a number')
//         }
//         resolve(a + b)
//     }
//     add(3, "7")
// }).catch(err => err)


// const pro2 = new Promise((resolve, reject) => {
//     // console.log(`Handling add()`);
//     const add = (a, b) => {
//         if (typeof (a) !== 'number' || typeof (b) !== 'number') {
//             reject('a,b must be a number')
//         }
//         resolve(a + b)
//     }
//     add(3, 7)
// }).then(val => val)

// const newPro = new Promise((resolve, reject) => {

// }).then(val => val)

// console.log('Pending: ',newPro.isPending())

// setTimeout(function () {
//     console.log('Rejected: ',pro1.isRejected(),'-',pro1.value());
//     console.log('Fulfilled: ',pro2.isFulfilled(),'-',pro2.value());
// }, 2000);


// const add = (a, b) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (typeof a !== 'number' || typeof b !== 'number') {
//                 reject(new Error(`a,b must be a number !`))
//             }
//             resolve(a + b)
//         }, 500);
//     })
// }

// const powBy2 = (a) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (typeof a !== 'number') {
//                 reject(new Error(`a must be a number !`))
//             }
//             resolve(a * a)
//         }, 500)
//     })
// }

// add(4, 5)
//     .then(res => {
//         return powBy2(res)
//     })
//     .then(res => {
//         console.log(res);
//     })
//     .catch(err => console.log(err + ''))

// let promise1 = new Promise((resolve, reject) => {
//     setTimeout(function () {
//         resolve('resolved 500')
//     }, 500);
// })

// let promise2 = new Promise((resolve, reject) => {
//     setTimeout(function () {
//         reject('rejected 1000')
//     }, 1000);
// })

// let promise3 = new Promise((resolve, reject) => {
//     setTimeout(function () {
//         resolve('resolved 300')
//     }, 300);
// });
// let allPro = Promise.all([promise1, promise3, promise2])
//     .then(val => {
//         console.log(val)
//         return val
//     }, err => {
//         console.log(err)
//         return err
//     })
// let y = Promise.race([promise1, promise2])
//             .then(val => {
//                 console.log(val)
//                 return val
//             }, err => {
//                 console.log(err);
//                 return err
//             })
// setTimeout(function () {
//     console.log(x);
// }, 2000);


// let x = promise.reject(new Error(`I want it that way !`))
// // x.then(val => console.log(val), err => console.log(err + ''))
// x.catch(err => console.log(err + ''))

// let y = promise.resolve(4 * 3)
// y.then(val => console.log(val))

// setTimeout(function() {
//     console.log(y.isFulfilled());
// }, 500);


// const add = (a, b, cb) => {
//     setTimeout(() => {
//         if (typeof a !== 'number' || typeof b !== 'number') {
//             return cb(new Error('a,b must be a number !'))
//         }
//         return cb(false, a + b)
//     }, 500)
// }

// add(3, "7", (err, res) => {
//     if (err) {
//         console.log(err + '')
//         return
//     }
//     console.log(res);
// })

// let addAsync = Promise.promisify(add)

// addAsync(3, "7") // addAsync(3, 7) in ra 10
//     .then(val => console.log(val), err => console.log(err + ''))
//     // in ra Error: a,b must be a number !


// const add = (a, b) => {
//     return new Promise((resolve, reject) => {
//         if (typeof a !== 'number' || typeof b !== 'number') {
//             reject(new Error('a,b must be a number !'))
//         }
//         resolve(a + b)
//     });
// }

// add(3, 4).asCallback((err, res) => {
//     if (err) return console.log(err + '');
//     console.log(res);
// })

// const sum = (a, b) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(function () {
//             if (typeof a !== 'number' || typeof b !== 'number') {
//                 reject('a,b cbmust be a number !')
//             }
//             resolve(a + b)
//         }, 500);
//     });
// }

// Promise.all([sum(3, "4"), sum(4, -1), sum(4, 9), sum(-5, 6), sum('w', 3)].map(val => {
//         return val.reflect()
//     }))
//     .filter(prom => prom.isFulfilled())
//     .then(val => {
//         val.forEach(ele => {
//             console.log(ele._settledValueField);
//         })
//     })

// const first = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(function () {
//             console.log('First function: log after 0.5s');
//             resolve('First function: log after 0.5');
//         }, 500);
//     });
// }

// const second = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(function () {
//             console.log('Second function: log after 1s');
//             reject('Second function: log after 1s');
//         }, 1000);
//     });
// }

// const third = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(function () {
//             console.log('Third function was rejected with 0s');
//             reject('Third function was rejected with 0s');
//         }, 0);
//     });
// }

// let iterator = [first, second, third]

// Promise.map(iterator, eachFn => eachFn())
//     .then(val => {
//         console.log('\n Array of Results: \n' )
//         console.log(val);
//     })
//     .catch(err => console.log(err))

// setTimeout(function() {
//     console.log(iterator);
// }, 2000);
// const wait = (time) => {
//     return () => {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 console.log(time)
//                 resolve(time)
//             }, time)
//         });
//     }
// }

// let iterator = Promise.resolve([300, 400, 100, 200].map(n => wait(n)))

// iterator.map(each => each())
//     .then(res => console.log(res))
//     // ra kết quả giống nhau
// Promise.map(iterator, each => each())
//     .then(res => console.log(res))
//     // ra kết quả giống nhau

//     // in ra 100 -> 400 và [ 300, 400, 100, 200 ]
//     // tương ứng kết quả in ra và thứ tự hàm trong mảng.
//     // với .map() thì tất cả các hàm sẽ chạy và hàm nào xong trc 
//     // thì cho kết quả trc

// const add = (a, b) => {
//     return new Promise((resolve, reject) => {
//         if (typeof a !== 'number' || typeof b !== 'number') {
//             reject(new Error('a,b must be a number !'))
//         }
//         resolve(a + b)
//     });
// }

// Promise.all([add(3, 4), add(2, 6)]).spread((res1, res2) => {
//     if (res1 === res2) {
//         console.log('The results of 2 fn are equal !');
//     } else {
//         console.log('nah');
//     }
// }) // in ra 'nah'

// // Tương tự với then
// Promise.all([add(3, 4), add(2, 5)]).then(([res1,res2]) => {
//     if (res1 === res2) {
//         console.log('The results of 2 fn are equal !');
//     } else {
//         console.log('nah');
//     }
// }) // in ra 'The results of 2 fn are equal !'


// const add = (a, b) => {
//     return new Promise((resolve, reject) => {
//         if (typeof a !== 'number' || typeof b !== 'number') {
//             reject(new Error('a,b must be a number !'))
//         }
//         resolve(a + b)
//     });
// }

// Promise.join(add(3, "4"), add(1, -3), add(34, 12), ((a, b, c) => {
//     return `Total: ${a+b+c}`
// })).then(val => console.log(val)).catch(err => console.log(err))

// const sum = (a, b) => {
//     return Promise.try(() => {
//         if (typeof a !== 'number' || typeof b !== 'number') {
//             throw new Error('a,b must be a number !')
//         }
//         return (a + b)
//     })
// }

// sum(3,"4").then(val => console.log(val)).catch(err => console.log(err + ''))

// const log = (time) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(function () {
//             resolve(time)
//         }, time);
//     })
// }

// let arrPro = [1000, log(400), log(100), log(300), log(700)]
// // console.log(arrPro);

// Promise
//     .each(arrPro, item => {
//         console.log('log: ', item);
//         return item
//     })
//     .filter(item => item > 350)
//     .reduce((pre, cur) => pre + cur)
//     .then(res => console.log('Total of input > 350: ', res))


// const add = (a, b) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (typeof a !== 'number' || typeof b !== 'number') {
//                 reject(new Error(`a,b must be a number !`))
//             }
//             resolve(a + b)
//         }, 500);
//     })
// }

// const powBy2 = (a) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (typeof a !== 'number') {
//                 reject(new Error(`a must be a number !`))
//             }
//             resolve(a * a)
//         }, 500)
//     })
// }

// Promise.props({
//     resultOfAdd: add(5, 4),
//     resultOfPow: powBy2(5),
// }).then(res => {
//     console.log(res.resultOfAdd);   // in ra 9
//     console.log(res.resultOfPow);   // in ra 25
// }).catch(err => console.log(err))

const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a !== 'number' || typeof b !== 'number') {
                reject(new Error(`a,b must be a number !`))
            }
            resolve(a + b)
        }, 700);
    })
}

const powBy2 = (a) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a !== 'number') {
                reject(new Error(`a must be a number !`))
            }
            resolve(a * a)
        }, 1000)
    })
}

const div = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a !== 'number' || typeof b !== 'number' || b === 0) {
                reject(new Error(`a,b must be a number and b != 0 !`))
            }
            resolve(a / b)
        }, 500)
    })
}


const sub = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a !== 'number' || typeof b !== 'number') {
                reject(new Error(`a must be a number !`))
            }
            resolve(a - b)
        }, 200)
    })
}

Promise.some([add(3, 4), sub("7", 10), powBy2(9), div(1, 2)], 0)
    .then(val => console.log(val))
    .catch(err => console.log(err))