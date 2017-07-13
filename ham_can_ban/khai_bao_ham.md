# Khai báo hàm

### Định nghĩa hàm (function)

Hàm (function) gồm những tập lệnh được nhóm lại với nhau thành một khối với mục đích thực hiện một hành động nào đó và có thể gọi đi gọi lại được.

Mỗi hàm có 1 tên riêng không trùng nhau

Hàm sẽ trả về một giá trị nào đó: Dùng lệnh **return** để trả về kết quả của hàm

Hàm không trả về giá trị: Trong hàm không có lệnh **return**. Hạn chế dùng kiểu này. Ta chỉ nên dùng khi fix bug vì các biến trong hàm chỉ sử dụng được trong hàm.

Cú pháp:

- Hàm không có tham số

    ```javascript
    function funName(){
        //code
    }
    ```
    
    + Ví dụ:
     
    ```javascript
    function tongHaiSo(){
      return 2 + 3;
    }
    console.log(tongHaiSo()); // 5
    ```

- Hàm có tham số     
    ```javascript
    function funName(var1, var2, ..., varn){
        //code
    }
    ```
    
    + Ví dụ:
    
    ```javascript
    function tongHaiSo(a, b){
      return a + b;
    }
    console.log(tongHaiSo(2, 3)); // 5
    ```

- Hàm có tham số mặc định
    
    Nếu ta không truyền tham số vào thì hàm sẽ tự lấy giá trị mặc định
    
    ```javascript
      function funName(var1 = val1, var2 = val2, ..., varn = valn){
        //code
      }
    ```
    
    + Ví dụ:
    
    ```javascript
    function tongHaiSo(a = 2, b = 3){
      return a + b;
    }
    console.log(tongHaiSo()); // 5
    console.log(tongHaiSo(4, 5)); // 9
    ```
    
Trong đó:

- funName : là tên hàm

- var1, var2, ..., varn: là tham số truyền vào

- val1, val2, ..., valn: là tham số mặc định


Ví dụ: Tính tổng 2 số

- Không dùng hàm

```javascript
let number = 2;
if (number % 2 == 0){
   console.log('Số chẵn');
}else {
   console.log('Số lẻ');
}
//Số chẵn

let number1 = 3;
if (number1 % 2 == 0){
   console.log('Số chẵn');
}else {
   console.log('Số lẻ');
}
//Số lẻ
```

- Dùng hàm

```javascript
function tongHaiSo(a){
    if (a % 2 == 0){
        return 'Số chẵn';
    }else {
        return 'Số lẻ';
    }
}
console.log(tongHaiSo(2)); //Số chẵn
console.log(tongHaiSo(3)); //Số lẻ
```

- Dùng hàm có tham số mặc định

```javascript
function tongHaiSo(a = 2){
    if (a % 2 == 0){
        return 'Số chẵn';
    }else {
        return 'Số lẻ';
    }
}
console.log(tongHaiSo()); //Số chẵn
console.log(tongHaiSo(3)); //Số lẻ
```

**Ghi chú:** Những lệnh nào mà dùng đi dùng lại nhiều lần thì ta nên cho vào 1 hàm.

# Bài tập

Bài 1. Nhập vào năm và in ra thế kỷ

- 1700: thế kỷ 16

- 1905: thể kỷ 19

Bài 2. Viết hàm đảo ngược chuỗi

Có thể sử dụng thư viện có sẵn để làm.

VD: chuỗi nhập vào "abc123", kết quả là "321cba";
