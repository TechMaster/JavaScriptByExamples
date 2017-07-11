# Break - Continue

Chỉ sử dụng ở trong vòng lặp. 

Bạn có thể lập tức thoát khỏi vòng lặp hoặc chạy tiếp vòng lặp tiếp theo mà không cần quan tâm tới các lệnh sau nó.

### Break

Lệnh **break** dùng để dừng vòng lặp ngay lập tức cho dù vòng lặp vẫn đang chạy.

Ví dụ:

```javascript
for(let i=1; i<10; i++){
    console.log('Vòng lặp', i);
    break;
}
console.log('Kết thúc');
```

Kết quả:

```
Vòng lặp 1
Kết thúc
```

**Giải thích:** Ta thấy, ở vòng lặp đầu tiên chương trình in ra màn hình và gặp lệnh **break** nên sẽ dừng vòng lặp và thoát ra khỏi vòng lặp và chạy lên tiếp theo ở ngoài vòng lặp.


### Continue

Lệnh *continue** dùng để bỏ qua vòng lặp hiện tại để chạy vòng lặp tiếp theo nên cách lệnh sau nó sẽ không được thực hiện.

Ví dụ:

```javascript
for(let i=1; i<10; i++){
    if(i > 5){
        continue;
    }
    console.log('Vòng lặp', i);
}
console.log('Kết thúc');
```

Kết quả:

```
Vòng lặp 1
Vòng lặp 2
Vòng lặp 3
Vòng lặp 4
Vòng lặp 5
Kết thúc
```

**Giải thích:** Nếu vòng lặp lơn hơn 5 sẽ sử dụng lệnh **continue** để không in ra.