# If else - Cấu trúc lập trình

Câu lệnh If else dùng để kiểm tra một mệnh đề nào đó có đúng hay không, nếu đúng thì thực thi câu lệnh bên trong và ngược lại thì sẽ bỏ qua câu lệnh đó.

**Điều kiện** sẽ để trong ngoặc đơn () và câu **lệnh thực thi** trong ngoặc {}

Trong đó **điều kiện** luôn luôn phải có một trong 2 giá trị True/False.

Trường hợp đặc biệt:

- NULL => false
- Rỗng => false
- Số khác 0 => true
- Số 0 => false

#### 1) Lệnh _If_ thông thường

Nếu điều kiện là **True** thì nó sẽ thực thi **câu lệnh 1**, sai thì bỏ qua

Cú pháp:

```javascript
if (Điều kiện){
    // Câu lệnh 1
}
```

Ví dụ:

```javascript
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

**Giải thích:** 

- Vì a = b <=> 10 = 10 <=> true nên sẽ thực thi câu lệnh trong ngoặc {}
- Nếu thay a = 11 <=> 11 = 10 <=> false nên trường hợp này sẽ bỏ qua lệnh trong ngoặc {} của **if**


#### 2) Lệnh If else 

Nếu **Điều kiện** = **false** thì nó sẽ bỏ qua **Câu lệnh 1** và thực thi **câu lệnh 2**

Cú pháp:

```javascript
if (Điều kiện){
    // Câu lệnh 1
}else{
    // Câu lệnh 2
}
```

Ví dụ:

```javascript
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

**Giải thích:**  

- Kiểm tra điều kiện 1: a == b <=> 10 == 11 <=> false => bỏ qua **Câu lệnh** trong **If** và chạy lệnh trong **else** mà không phải kiểm tra điều kiện gì.

#### 3) Lệnh If - else if - else

Có thể sử dụng nhiều **else if** cho nhiều điều kiện khác nhau

Thực hiện lần lượt từng điều kiện, nếu có 1 điều kiện nào đúng thì thực thi câu lệnh tương ứng còn không có điều kiện nào đúng thì sẽ thực thi câu lệnh trong **else**

Cú pháp:
    
```javascript
if (Điều kiện 1){
    // Câu lệnh 1
}else if (Điều kiện 2){
    // Câu lệnh 2
}else{
    // Câu lệnh 3
}
```

Ví dụ:

```javascript
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

Kết quả:

```
KQ: c lớn hơn a
```

**Giải thích:** 

- Kiểm tra điền kiện 1: a == b <=> 10 == 11 <=> false => bỏ qua
- Kiểm tra điền kiện 2: a > b <=> 10 > 11 <=> false => bỏ qua
- Kiểm tra điền kiện 3: c > a <=> 12 > 10 <=> true => Thực thi lệnh tương ứng

## Bài tập

Giải phương trình bậc 2. [Tham khảo công thức](https://toanhoc77.wordpress.com/2011/10/26/bai-3-%E2%80%93-4-ph%C6%B0%C6%A1ng-trinh-b%E1%BA%ADc-hai-m%E1%BB%99t-%E1%BA%A9n-cong-th%E1%BB%A9c-nghi%E1%BB%87m/)

