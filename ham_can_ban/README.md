# Hàm căn bản

[Bài 1. Khai báo hàm](https://github.com/TechMaster/JavaScriptByExamples/tree/master/ham_can_ban/khai_bao_ham.md)

[Bài 2. By value - By reference](https://github.com/TechMaster/JavaScriptByExamples/tree/master/ham_can_ban/byValue_byReference.md)

[Bài 3. Hàm là đối tượng, Hàm trả về hàm](https://github.com/TechMaster/JavaScriptByExamples/tree/master/ham_can_ban/ham_la_doi_tuong_tra_ve_ham.md)

[Bài 4. Dùng Prototype để bổ xung phương thức](https://github.com/TechMaster/JavaScriptByExamples/tree/master/ham_can_ban/prototype.md)

# Bài tập tổng

#### Bài 1. 

Viết function kiểm tra xem chuỗi nhập vào có phải là một chuỗi palindrome (Đọc xuôi ngược đều giống như nhau) hay không?

Ví dụ: Nếu là chuỗi **palindrome** thì kết quả trả về là **True**, ngược lại **false**

- Nhập vào 'aabaa' => kết quả **True**

- Nhập vào 'abac' => kết quả **False**

Viết trong function:

```javascript
function checkPalindrome(inputString) {
    
}
```

#### Bài 2. 

Cho một mảng số nguyên, tìm cặp các phần tử liền kề nhân với nhau có giá trị lớn nhất và trả lại giá trị đó.

Ví dụ:

Cho inputArray = [3, 6, -2, -5, 7, 3]

Kết quả sẽ là: 21 vì 7 * 3 = 21

Viết trong function:

```javascript
function adjacentElementsProduct(inputArray) {
    
}
```

#### Bài 3. 

Cho một số n có 2 chữ số, Trả về tổng của 2 số đó

Ví dụ: n = 44 => 4 + 4 =8

Viết trong function:

```javascript
function addTwoDigits(n) {
    
} 

```

#### Bài 4.

Cho một số nguyên n, trả về số lớn nhất chứa n chữ số

ví dụ: n = 2 => số lớn nhất chưa n chữ số là: 99

Ví trong function:

```javascript
function largestNumber(n) {

}
```


# Bài giải

#### Bài 1. 

```javascript
// split(""): chuyển chuỗi thành mảng
// reverse(): Đảo ngược mảng
// join(""): Chuyển mảng thành chuỗi
function checkPalindrome(inputString) {
    let reverseString = inputString.split("").reverse().join("");
    if(inputString == reverseString) {
        return true;
    }else{
        return false;
    }
}

```

#### Bài 2.

```javascript
/// Math.max.apply(Math, [1,2,3,4]) = Math.max(1,2,3,4) = 4
function adjacentElementsProduct(inputArray) {
    let arr = [];
    for(let i = 0; i < inputArray.length - 2; i++){
        let total = inputArray[i] * inputArray[i + 1];
        arr.push(total);
    }
    return Math.max.apply(Math, arr);
}
```

#### Bài 3.

```javascript
// n%10: chia lấy phần dư
// Math.floor(n/10): Làm tròn xuống. 
// Ví dụ: 22/10 = 2.2 => Math.floor(2.2) = 2
function addTwoDigits(n) {
    return n%10 + Math.floor(n/10)
}
```

#### Bài 4. 

```javascript
//Math.pow(10, n) = 10 ^ n
function largestNumber(n) {
    return Math.pow(10, n) - 1
}

```