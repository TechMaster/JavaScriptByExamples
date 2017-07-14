# Truyền tham số cho hàm: byValue vs byReference

### By value

Nếu ta có 1 biến a ở ngoài hàm, truyền biến a đó vào hàm và thay đổi giá trị trong hàm thì biến a ở ngoài hàm không bị thay đổi.

Ví dụ

```javascript
function changeParam(a, obj) {
    a = 1;
    obj = {name: 'Tech'};
    console.log(a, obj); // 1 { name: 'Tech' }
}
let a = 4;
let obj = {name: 'Tectmaster'};
changeParam(a, obj);
console.log(a, obj); // 4 { name: 'Tectmaster' }
```

### By reference

Nếu ta có biến là mảng hoặc mảng đối tượng mà trong hàm ta thay đổi thuộc tính của mảng hoặc đối tượng thì nó sẽ thay đổi cả mảng hoặc mảng đối tượng ngoài hàm.

Ví dụ:

```javascript
function changeParam(arr, obj) {
    //Thay đổi thuộc tính của mảng hoặc object thì ngoài hàm cũng thay đổi
    arr[0] = 4;
    obj.age = 6;

    // Thay đổi giá trị thì nó chỉ có giá trị trong hàm.
    arr = [5,6,7];
    obj = {name: 'Tech'};
    
    console.log(arr, obj); // [ 5, 6, 7 ] { name: 'Tech' }
}

let arr = [1,2,3];
let obj = {name: 'Techmaster', age: 6};
changeParam(arr, obj);

console.log(arr, obj); // [ 4, 2, 3 ] { name: 'Techmaster', age: 6 }
```

