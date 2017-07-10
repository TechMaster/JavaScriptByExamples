# Các toán tử trong javascript

[Toán tử số học](#1-toán-tử-số-học)

[Toán tử so sánh](#2-toán-tử-so-sánh)

[Toán tử logic](#3-toán-tử-logic)

[Toán tử gán](#4-toán-tử-gán)

[Độ ưu tiên của các toán tử](#5-độ-ưu-tiên-của-các-toán-tử)

### 1) Toán tử số học

Gồm: 

```
+   : Cộng
-   : Trừ
*   : Nhân
/   : Chia
%   : Chia lấy phần dư
++  : Tăng lên 1
--  : Giảm đi 1
```

**Chú ý:** Toán tử + có thể dùng cho chuỗi, các toán tử còn lại chỉ dùng số với số.

Ví dụ:

```javascript
// Khai báo a, b là số, c là chuỗi.
let a = 20;
let b = 8;
let c = '123';
let kq;

// Cộng số với số
kq = a + b;
console.log('Kết quả 1:', kq);

// Cộng Chuỗi với số
kq = a + c;
console.log('Kết quả 2:', kq); // kết quả ở đây sẽ là 1 chuỗi.

// Phép trừ
kq = a - b;
console.log('Kết quả 3:', kq);

// Phép nhân
kq = a * b;
console.log('Kết quả 4:', kq);

// Phép chia
kq = a / b;
console.log('Kết quả 5:', kq);

// Phép chia lấy phần dư
kq = a % b;
console.log('Kết quả 6:', kq);

// Tăng thêm 1
a++;
console.log('Kết quả 7:', a);

// Giảm đi 1
b--;
console.log('Kết quả 8:', b);
```

Kết quả:

```
Kết quả 1: 28
Kết quả 2: 20123
Kết quả 3: 12
Kết quả 4: 160
Kết quả 5: 2.5
Kết quả 6: 4
Kết quả 7: 21
Kết quả 8: 7
```

### 2) Toán tử so sánh

Khi so sánh một chuỗi với một số, JavaScript sẽ chuyển đổi chuỗi thành số để so sánh. Chuỗi rỗng sẽ được chuyển đổi thành FALSE.

Giá trị sẽ là TRUE/FALSE.

Gồm

```
==  : Phép bằng
!=  : Không bằng
>   : Lớn hơn
>=  : Lớn hơn hoặc bằng
<   : Nhỏ hơn
<=  : Nhỏ hơn hoặc bằng

```

Ví dụ:

```javascript
/**
 * Khai báo a, b là số
 * return TRUE/FALSE
 */
let a = 20;
let b = 8;
let kq;

// Phép bằng
kq = a == b;
console.log('(a == b) =>', kq);

// Phép không bằng
kq = a != b;
console.log('(a != b) =>', kq);

// Phép lớn hơn
kq = a > b;
console.log('(a > b) =>', kq);

// Phép lớn hơn hoặc bằng
kq = a >= b;
console.log('(a >= b) =>', kq);

// Phép nhỏ hơn
kq = a < b;
console.log('(a < b) =>', kq);

// Phép nhỏ hơn hoặc bằng
kq = a <= b;
console.log('(a <= b) =>', kq);
```

Kết quả:
```
(a == b) => false
(a != b) => true
(a > b) => true
(a >= b) => true
(a < b) => false
(a <= b) => false
```

### 3) Toán tử logic

Dùng để kết hợp hay phủ định biểu thức có chứa các toán tử so sánh.

Giá trị sẽ là TRUE/FALSE.

Gồm: 

```
&&  : Phép AND (và)
||  : Phép OR (hoặc)
!   : Phép NOT (Đảo ngược trạng thái của toán hạng)
```

Ví dụ: 

```javascript
/**
 * Khai báo a, b là TRUE/FALSE
 * return TRUE/FALSE
 */
let a = true;
let b = false;
let kq;

// Phép &&. a và b cùng đúng thì kết quả = true, 1 trong 2 cái sai thì kết quả = false.
kq = a && b;
console.log('(a && b) =>', kq);

//Phép ||. a hoặc b cùng đúng thì kết quả = true, cả a và b đều sai thì kết quả = false
kq = a || b;
console.log('(a || b) =>', kq);

//Phép !. Đảo ngược trạng thái. Nếu b = false thì !b = true, hoặc ngược lại.
kq = !b;
console.log('(!b) =>', kq);
```

Kết quả:

```
(a && b) => false
(a || b) => true
(!b) => true
```

### 4) Toán tử gán

Gồm:

```
=   : Gán giá trị toán hạng bên phải cho toán hạng bên trái
+=  : Cộng giá trị toán hạng trái với toán hạng phải và gán cho toán hạng trái
-=  : Trừ giá trị toán hạng trái cho toán hạng phải và gán cho toán hạng trái
*=  : Nhân giá trị toán hạng trái với toán hạng phải và gán cho toán hạng trái
/=  : Chia giá trị toán hạng trái cho toán hạng phải và gán cho toán hạng trái
%=  : Chia giá trị toán hạng trái cho toán hạng phải và gán cho toán hạng trái phần dư
```

Ví dụ:

```javascript
let a = 20;
let b = 8;

// Phép =
a = b;
console.log('(a = b) => (a) =', a);

// Phép +=
a += b;
console.log('(a += b) => (a) =', a);

// Phép -=
a -= b;
console.log('(a -= b) => (a) =', a);

// Phép *=
a *= b;
console.log('(a *= b) => (a) =', a);

// Phép /=
a /= b;
console.log('(a /= b) => (a) =', a);

// Phép %=
a %= b;
console.log('(a %= b) => (a) =', a);
```

Kết quả:

```
(a = b) => (a) = 8
(a += b) => (a) = 16
(a -= b) => (a) = 8
(a *= b) => (a) = 64
(a /= b) => (a) = 8
(a %= b) => (a) = 0
```

### 5) Độ ưu tiên của các toán tử

```
Độ ưu tiên |  Toán tử
1	            ( )
2	            ++ (tiền tố)
2	            -- (tiền tố)
3	            ++ (hậu tố)
3	            -- (hậu tố)
4	            *
4	            /
4	            %
5	            +
5	            -
6	            =
6	            +=
6	            -=
6	            *=
6	            /=
6	            %=
```


# Bài tập