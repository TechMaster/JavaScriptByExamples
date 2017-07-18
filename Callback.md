# Callback - JavaScript Higher-order Functions

Hàm Callback - Hàm nâng cao trong Javascript

## Hàm Callback

#### Định nghĩa:

Trong javascript, các hàm là một first-class objects (hay gọi là các đối tượng định nghĩa sẵn), vì thế nên hàm là một instance của Object, và được sử dụng như các object khác như String,Array,Number,...Và vì chính nó là một đối tượng, Function có thể:

- Trữ trong các biến.
- Truyền vào function khác như một tham số.
- Khởi tạo trong một function khác.
- Trả về từ (return from) một function khác.

Tóm lại, ta có thể  khai báo function dưới dạng biến (function expression),truyền function như một tham số vào một function khác hoặc trả về một function để có thể chạy hàm đấy sau.Ví dụ:

```javascript
// Trữ function trong biến:
let func = function log(x){
    console.log(x);
}
func(34)    // in ra 34
log(34)     // in ra undefined

// Khởi tạo trong một function khác
function log(x) {
    function newFunction() {
        console.log('this is function inside function');
    }
    newFunction()
    console.log(x);
}
log(54) //in ra 'this is function inside function' và 54

// Truyền function dạng tham số và trả về từ một function khác
function sum(a, b) {
    return a + b
}
function multi(a, b) {
    return a * b
}
function calcNumber(a, b, callback) {
    return callback(a, b) // trả về một function
}

console.log(calcNumber(3, 4, sum)) // in ra 7
console.log(calcNumber(10, 20, multi)) // in ra 20
```
Callback function được sử dụng chủ đạo trong mô hình lập trình functional programming - chủ yếu về cách sử dụng một function như một tham số, callback là một function được truyền vào từ một function khác như một biến, sau đó callback function được gọi hoặc được chạy bên trong function đó. Ví dụ điển hình về callback:

```javascript
let arr = ['one','two','three','four']

arr.forEach(function(value,index){
    console.log(`${index+1}: value.`)
}) // in ra
// 1: one.
// 2: two.
// 3: three.
// 4: four.
```
Ta thấy một function vô danh với 2 tham số value và index được truyền vào dạng tham số vào method forEach (cũng dạng function) của Array.prototype.

#### Sự bất đồng bộ trong Javascript:

Nói đơn giản về sự bất đồng bộ là hai tiến trình lúc gọi tới thì tuần tự nhưng lúc kết thúc thì không tuần tư, dẫn tới việc kiểm soát kết quả của 2 tiến trình đấy khó khăn. Giống như việc bạn đang download một file nhạc và cố  bật nó lúc nó vẫn đang load vậy, ta phải chờ download xong rồi mới chạy thì callback cũng vậy, nó sẽ chờ hàm trước chạy xong rồi chạy tiếp hàm sau để xử lý bất đồng bộ đó.ví dụ về bất đồng bộ:

```javascript
function logFirst() {
    setTimeout(function () {
        console.log('First')
    }, 2000)
}

function logLater() {
    setTimeout(function () {
        console.log('Later')
    }, 1000)
}

logFirst() // gọi logFirst trước
logLater() // rồi gọi logLater

// in ra 'Later'
// in ra 'First'
```
Với ví dụ trên, logFirst() và logLater() được gọi tới một cách tuần tự nhưng thời gian xử lý của logFirst lâu hơn nên sẽ log ra chậm hơn dẫn tới kết quả không mong muốn.

```javascript
function num(x){
    setTimeout(function(){
        return x
    },0)
}

let x = num(5)

console.log(x) // in ra undefined
```
Với vị dụ trên,dù timeout có bằng 0 thì vẫn ra kết quả sai do bất đồng bộ.

Sự bất đồng bộ trong javascript thường xảy ra ở:
- Các tiến trình cần thời gian thực hiện như đọc file, các request HTTP,...
- Trong các event Listener/Handler
- Trong các phương thức setTimeout, setInterval


#### Xử lý bất đồng bộ với hàm callback:

Đối với những hàm cần thời gian xử lý mà ta cần chúng thực hiện nối đuôi nhau, hoặc ta muốn "bắt" kết quả của một hàm mà ta không biết lúc nào sẽ chạy xong để rồi dùng kết quả đó thực hiện xử lý tiếp thì ta sẽ dùng callback nest - các hàm callback lồng nhau để xử lý bất đồng bộ một cách tuần tự.

```javascript
const add = function (a, b, cb) { // function expression,trũ function trong một biến
    setTimeout(function () {
        if (typeof a !== 'number' || typeof b !== 'number') {
            return cb('a,b must be number !', undefined)
        } else {
            return cb(false, a + b) // trả về một function
        }
    }, 1000);

}

const powBy2 = function (a, cb) {
    setTimeout(function () {
        if (typeof a !== 'number') {
            return cb('a must be a number !', undefined)
        } else {
            return cb(false, a * a)
        }
    }, 500);
}

try { // callback nest
    add(2, 2, function (err, resultOfAdd) { // truyền vào một function
        if (err) {
            throw new Error(err)
        }
        powBy2(resultOfAdd, function (err, resultOfPow) { // truyền vào một function
            if (err) {
                throw new Error(err)
            }
            console.log(resultOfPow) // in ra 16 sau ~ 1,5s
        })
    })
} catch (err) {
    console.log(err);
}
```
## Callback Hell

Callback hell là một thuật ngữ dùng để miêu tả callback nest quá phức tạp, thậm chí dẫn tới mất kiểm soát. Các hàm callback lồng nhau quá nhiều khiến việc bảo trỳ code khó khăn. 

```javascript
// ví dụ về callback hell:
try { // callback nest
    add(2, 2, function (err, resultOfAdd) {
        if (err) throw new Error(err)
        powBy2(resultOfAdd, function (err, resultOfPow) {
            if (err) throw new Error(err)
            rootBy2(resultOfPow, function (err, resultOfRoot) {
                if (err) throw new Error(err)
                divBy2(resultOfRoot, 2, function (err, resultOfDiv) {
                    if (err) throw new Error(err)
                    console.log(resultOfDiv) // in ra kết quả cuối
                })
            })
        })
    })
} catch (err) {
    console.log(err);
}
```
Ví dụ trên với 4 hàm lồng nhau, thực tế với nodejs thì còn phức tạp hơn nhiều.

Để giải quyết việc này, ta thường sử dụng Promise hoặc Async-Await để giảm sự phức tạp của cách viết hàm callback bằng một cách viết tuần tự giống như các hàm sync bình thường.


# Bài tập:
- Viết lại các ví dụ mẫu.

- : Dùng callback để xử lý lỗi sau:
```javascript
let i = 0;
while (i < 10) {
    setTimeout(function () {
        console.log(i)
    }, 0)
    i++
} // in ra 10 số 10, trong khi ta cần in ra từ 0 đến 9
```

- : dùng fs.readdir và fs.stat để in ra toàn bộ file và folder có trong 1 thư mục.

