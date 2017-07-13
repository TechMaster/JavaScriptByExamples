# Truyền tham số cho hàm: byValue vs byReference

### By value

By value tức là nếu ta có 1 biến a ở ngoài hàm, truyền biến a đó vào hàm và thay đổi trong hàm thì biến a ở ngoài hàm không bị thay đổi.

Ví dụ

```javascript
function changeParam(a) {
    a = 1;
    console.log(a) // 1
}
let a = 4;
changeParam(a)
console.log(a) // 4
```

### By reference

Nếu thay đổi thuộc tính của mảng hoặc đối tượng thì biến ở ngoài hàm cũng thay đổi.

Nếu thay đổi giá trị của mảng hoặc đối tượng thì biến ở ngoài hàm không thay đổi

Ví dụ:

```javascript
function changeParam(a1, arr1, obj1) {
    a1 = 1;

    //Thay đổi thuộc tính của mảng hoặc object thì ngoài hàm cũng thay đổi
    arr1[0] = 4;
    obj1.age = 6;

    // Thay đổi giá trị thì nó chỉ có giá trị trong hàm.
    arr1 = [5,6,7];
    obj1 = {name: 'Tech', age: 1}
}

let a = 4;
let arr = [1,2,3];
let obj = {name: 'Techmaster', age: 6};
changeParam(a, arr, obj);

console.log(a, arr, obj); //4 [ 4, 2, 3 ] { name: 'Techmaster', age: 6 }

```