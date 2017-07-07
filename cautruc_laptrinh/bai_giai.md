# Giải bài tập

### Giải phương trình bậc 2
```javascript
let a = 1, b = 2, c = 1; // Khai báo biến và gán 1 số cụ thể
let delta = b * b - 4 * a * c; // Tính delta
let canDelta = Math.sqrt(delta); // Sử dụng hàm có sẵn để tính căn bậc 2
let a2 = 2 * a;
if(canDelta < 0){
    console.log('Phương trình vô nghiệm');
}else if(canDelta > 0){
    let x1 = (-b - canDelta) / a2;
    let x2 = (-b + canDelta) / a2;
    console.log('Phuơng trình có 2 nghiệm phân biệt');
    console.log('x1 = ' + x1);
    console.log('x2 = ' + x2);
}else{
    let x = (-b / a2);
    console.log('Phuơng trình có nghiệm kép: ');
    console.log('x = ' + x);
}
```