# While - Do while

Vòng lặp **While** và **Do while** khác với vòng lặp **for** là dùng khi chúng ta không biết chính xác số lần lặp. Rất dễ gặp phải trường hợp lặp vô hạn nên các bạn cẩn thận khi dùng vòng lặp này.

- Nếu điều kiện đúng, câu lệnh sẽ được thực thi, vòng lặp vẫn được tiếp diễn.

- Nếu điều kiện sai, câu lệnh không được thực thi, vòng lặp kết thúc.

### 1) While

Cú pháp:

```javascript
while (điều kiện){
    // Câu lệnh
}
```

- Điều kiện là điều kiện dừng vòng lặp. Vòng lặp dừng lại khi **điều kiện** = **false**.

Ví dụ:

Dùng vòng lặp While để lặp từ 1 đến 5

```javascript
/*
* Sử dụng i++ để tăng i lên 1
* Sử dụng i-- để giảm i xuống 1
*/
let i = 1;
while(i <= 5){
    console.log(i);
    i++;
}
```

Kết quả:

```
1
2
3
4
5
```


### 2) Do while

Khác với vòng lặp **while** là sẽ thực hiên câu lệnh trước sau đó mới kiểm tra điều kiện.

Câu lệnh sẽ được thực hiện ít nhất là 1 lần.

```javascript
do {
    // Câu lệnh
}
while(điều kiện)
```

Ví dụ:

Dùng vòng lặp Do while để lặp từ 1 đến 5

```javascript
let i = 0;
do{
    i++;
    console.log(i);
}
while(i < 5)
```

Kết quả:

``` 
1
2
3
4
5
```

### 3) Sự khác nhau giữa While và Do while

Ví dụ:

- Vòng lặp While

```javascript
while(false){
    console.log(1);
}
```

- Kết quả (không in ra gì cả)

```

```

- Vòng lặp Do while

```javascript
do{
    console.log(1);
}
while(false)
```

- Kết quả

```
1
```

Kết luận: Qua 2 ví dụ trên ta có thể thấy sự khách nhau giữa While và Do while là

- While: kiểm tra rồi mới chạy lệnh

- Do while: Chạy lệnh rồi mới kiểm tra


# Bài tập

1) Sử dụng vòng lặp while để vẽ bảng cửu chương

2) Sử dụng vòng lặp do while để vẽ bảng cửu chương

Gợi ý: Sử dụng vòng lặp lồng nhau giống **for**