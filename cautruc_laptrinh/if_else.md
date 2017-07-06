# Cấu trúc lập trình - Control Structure

### Chạy chương trình


Tên file: **if_else.js**

Thì lệnh chạy sẽ là:

```
node if_else.js
```


### 1) If else

Câu lệnh If else dùng để kiểm tra một mệnh đề nào đó có đúng hay không, nếu đúng thì thực thi câu lệnh bên trong và ngược lại thì sẽ bỏ qua câu lệnh đó.

Điều kiện sẽ để trong ngoặc đơn () và câu lệnh thực thi trong ngoặc {}

##### Lệnh _If_

Nếu điều kiện là **True** thì nó sẽ thực thi _câu lệnh 1_, sai thì bỏ qua

Cú pháp:

```
if (Điều kiện){
    // Câu lệnh 1
}
```

Trong đó điều kiện luôn luôn phải có một trong 2 giá trị True/False.

Trường hợp đặc biệt:

- NULL => false
- Rỗng => false
- Số khác 0 => true
- Số 0 => false


Ví dụ:

```
let a = 10;
let b = 10;

if (a == b){
    console.log('KQ: a và b bằng nhau');
}
```

Kết quả:

```
KQ: a và b bằng nhau
```

##### 2) Lệnh If else 

Nếu Điều kiện = false thì nó sẽ bỏ qua _Câu lệnh 1_ và thực thi _câu lệnh 2_

Cú pháp:

```
if (Điều kiện){
    // Câu lệnh 1
}else{
    // Câu lệnh 2
}
```

Ví dụ:

```
let a = 10;
let b = 11;

if (a == b){
    console.log('KQ: a và b bằng nhau');
}else{
    console.log('KQ: a và b không bằng nhau');
}
```

Kết quả:

```
KQ: a và b không bằng nhau
```

##### 3) If - else if - else

Thực hiện lần lượt từng điều kiện, nếu có 1 điều kiện nào đúng thì thực thi câu lệnh đó còn không có điều kiện nào đúng thì sẽ thực thi câu lệnh trong _else_

Cú pháp:

- Có 1 else if
    
    ```
    if (Điều kiện 1){
        // Câu lệnh 1
    }else if (Điều kiện 2){
        // Câu lệnh 2
    }
    else{
        // Câu lệnh 3
    }
    ```
    
    
- Nhiều else if

    ```
    if (Điều kiện 1){
        // Câu lệnh 1
    }else if (Điều kiện 2){
        // Câu lệnh 2
    }
    ...
    else if (Điều kiện n){
        // Câu lệnh n
    }
    else{
        // Câu lệnh n+1
    }
    ```

Ví dụ:

- 1 else if

    ```
    let a = 10;
    let b = 11;
    
    if (a == b){
        console.log('KQ: a và b bằng nhau');
    }else if(a < b){
        console.log('KQ: a nhỏ hơn b');
    }else{
        console.log('KQ: a và b không bằng nhau');
    }
    ```
    
- Kết quả

    ```
    KQ: a nhỏ hơn b
    ```

- Nhiều else if

    ```
    let a = 10;
    let b = 11;
    let c = 12;
    
    if (a == b){
        console.log('KQ: a và b bằng nhau');
    }else if(a > b){
        console.log('KQ: a nhỏ hơn b');
    }else if(c > a){
        console.log('KQ: c lớn hơn a');
    }else{
        console.log('KQ: a và b không bằng nhau');
    }
    ```
- Kết quả:

    ```
    KQ: c lớn hơn a
    ```

## Bài tập