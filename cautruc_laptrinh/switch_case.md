# Switch case

Lệnh **Switch case** giống với **If else** là để rẽ nhánh chương trình.

Mỗi nhánh sẽ có điều kiện cụ thể

- Với **Switch case** là điều kiện so sánh bằng (=)

- Với **If else** thì có thể truyền nhiều toán tử khác nhau.

Cú pháp:

```javascript
switch (variable)
{
    case condition_1: 
        // Câu lệnh 1
        break;
    
    case condition_2: 
       // Câu lệnh 2
    break;
    ...
    
    case condition_n: 
        // Câu lệnh n
        break;
    
    default: 
        // Câu lệnh mặc định
}
```

#### Giải thích:

**variable:** Biến truyền vào để kiểm tra

**condition_1 ... condition_n:** Là giá trị để so sánh với **variable**. Nếu đúng thì thực hiện câu lệnh, sai bỏ qua và kiểm tra điều kiện tiếp theo

**break:** Dùng để ngắt khỏi vòng lặp Switch mỗi khi câu lệnh tương ứng thực hiện xong. Nếu không có thì nó sẽ chạy tất cả câu lệnh trong Switch

**default:** Nếu 1 trong các **case** không đúng thì chương trình sẽ tự chạy lệnh mặc định

#### Ví dụ 1: sử dụng break

```javascript
let x = 'apple';
switch(x){
    case 'apple':
        console.log('Apple');
        break;
    case 'banana':
        console.log('Banana');
        break;
    default:
        console.log('Orange');
}
```

Kết quả:

```
Apple
```

#### Ví dụ 2: không sử dụng break

```javascript
let x = 'banana';
switch(x){
    case 'apple':
        console.log('Apple');
    case 'banana':
        console.log('Banana');
    default:
        console.log('Orange');
}
```

Kết quả:

```
Banana
Orange
```

### Kết luận

- Sử dụng **break** thì chương trình sẽ chỉ chạy câu lệnh trong case = true và sau đó thoát khỏi lệnh Switch.

- Không sử dụng **break** thì chương trình sẽ chạy từ câu lệnh trong case = true và tất cả câu lệnh sau nó.


# Bài tập

1) Nhập vào 1 số từ 2 đến 8 và in ra thứ.


