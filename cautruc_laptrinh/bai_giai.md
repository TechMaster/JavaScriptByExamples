# Giải bài tập

### If else
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

### For

Bài 1) 

```javascript
for(let i = 1; i < 10; i++){
    for(let j = 1; j < 11; j++){
        console.log(i + ' x ' + j + ' = ' + i*j);
    }
    console.log('-----------');
}
```

Bài 2)

```javascript
let n = 8;
let giaiThua = 1;
for(let i = 2; i <= 4; i++){
    giaiThua *= i;
}
console.log(giaiThua);
```

### While - Do while

Bài 1)

```javascript
let i = 1;
while(i < 10){
    let j = 1;
    while(j <= 10){
        console.log(i + ' x ' + j + ' = ' + i*j);
        j++;
    }
    i++;
    console.log('-----------');
}
```

Bài 2)

```javascript
let i = 1;
do{
    let j = 1;
    do{
        console.log(i + ' x ' + j + ' = ' + i*j);
        j++;
    }
    while(j <= 10);
    i++;
    console.log('-----------');
}
while(i < 10);
```