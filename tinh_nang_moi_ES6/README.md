# Tính năng mới trong ES6

ES6 (ESMAScript 6) là phiên bản mới nhất của chuẩn ECMAScript. ECMAScript do hiệp hội các nhà sản xuất máy tính Châu Âu đề xuất làm tiêu chuẩn của ngôn ngữ Javascript.

ES6 có rất nhiều tính năng mới mà chúng ta nên quan tâm. 

Mình sẽ điểm qua 1 số tính năng 

##### 1. Block-Scoped Constructs Let and Const

##### 2. Template Literals

##### 3. Multi-line String

##### 1. Default Parameters

##### 2. Destructuring Assignment


##### 6. Arrow Function

##### 5. Enhanced Object Literals


##### 7. Promises

##### 9. Classes

##### 10. Modules


## 1. Block-Scoped Constructs Let and Const

ES6 bổ sung thêm 2 cách khai báo biến cục bộ là **let** và **const**

#### 1.1. Let

Let cho phép chúng ta khai báo biến trong phạm vi các khối lệnh mà không ảnh hướng tới các khối lệnh khác. 

Các khối lệnh được định nghĩa bởi cặp ngoặc nhọn {}. 

Trong ES5, các khối không giới hạn phạm vi của các biến.

- ES5

```javascript
var a = 1;
if(true){
    var a = 2;
}
console.log(a) //2
```

- ES6

```javascript
let a = 1;
if(true){
    let a = 2;
}
console.log(a) //1
```

#### 1.2. Const

Const khai báo 1 biến không thay đổi giá trị

```javascript
const a = 1;
a = 2;
console.log(a); // Lỗi: Assignment to constant variable.
```

## 2. Template Literals