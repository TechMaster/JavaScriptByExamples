# Bài giải

### Khai báo hàm

Bài 1.

```javascript
function theKy(year){
    let a = Math.floor(year/100);
    let b = year%100;
    return b > 0 ? a : a-1; // Đoạn này có ý nghĩa: nếu b > 0 thì trả về a, ngược lại trả về a - 1;
}
console.log(theKy(2001));
```

Bài 2.

```javascript
function daoNguocChuoi(str){
    return str.split('').reverse().join('');
}
console.log(daoNguocChuoi('abc123'));
```