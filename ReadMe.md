# Khung giáo trình

# I. Cài Đặt, Cấu Hình Môi Trường
## Cài đặt, cấu hình môi trường
- Javascript cho Front-end và Javascript cho Back-end:
    - Giống: Đều sử dụng chung một mô típ lập trình.
    - Khác:
        - Đối với Front-end thì javascript chủ yếu dùng để tương tác với giao diện thông qua DOM,JQuery, etc...(bổ sung thêm)
        - Đối với Back-end thì js ....(bổ sung thêm)
- Cài đặt javascript cho Front-end với trình duyệt Chrome hoặc Firefox:
    - Sử dụng Sublime Text để code javascript,các bạn có thể download ở đây:
    ```
    https://www.sublimetext.com/
    ``` 
    - Chrome Develeper Tools: Download và Sử dụng Chrome bản mới nhất từ trang chủ Google,Chrome Dev Tools là công cụ tốt nhất để run và debug javascript đối với các trang web front-end.
    ```
    https://www.google.com/chrome/browser/desktop/index.html
    ```
    - Firefox Developer Edition: Download và cài đặt FF Dev ở trang chủ của Mozilla, dù FF Dev run và debug code không được như Chrome, bù lại nó rất mạnh trong việc viết giao diện CSS cho web front-end.
    ```
    https://www.mozilla.org/en-US/firefox/developer/
    ```
- Cài đặt Javascript cho Back-end với Node.js:
    - Window: Download Nodejs bản mới nhất và chạy file .exe để tiến hành cài đặt:
    ```
    https://nodejs.org/en/download/
    ```
    Ngoài ra ta sẽ cài thêm Git Bash cho windown để dễ dàng sử dụng Nodejs hơn:
    ```
    https://git-scm.com/downloads
    ```
    - Unix: Sử dụng Terminal để cài đặt:
    ```
     curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
     sudo apt-get install -y nodejs
     sudo npm install npm --global
    ```
    - MacOS: Download và cài đặt:
    ```
    https://nodejs.org/en/download/
    ```
## Sử dụng Chrome Dev Tools để run và debug Javascript Front-end
(video)
## Sử dụng NodeJS để run Javascript Back-end
(video)
## Một số IDE để run và debug Javascript Back-end

- Web Storm
- PyCharm
- PHP Storm
- Visual Studio Code
- ...

# II. Javascript Toàn Tập
// số thứ tự sẽ quyết định sau.
## 1. Kiểu dữ liệu cơ bản - Basic data type:

### Khai báo var,let và const
### Scoping và Hoisting
### So sánh '==' và '==='
### Array - Mảng
### Loose typing
### Object - Đối Tượng
### String - Chuỗi
### Number - Số

## 2. Toán tử - Operator:

### Mathematical operator - Toán tử toán học (+, -, *, /, %, ++, --)
### Assignment operator - Toán tử gán (-=, +=, =, *=, /=,%=)
### Relational operator - Toán tử quan hệ (>, < , <=, >=, ==, !==)


## 3. Cấu trúc lập trình - Control structure:

### If then else
### For, for in, for of, forEach
### While - do while
### Break - Continue
### Switch


## 4. Hàm - Function:

### Anonymous Function - Hàm vô danh
### Arrow function - Hàm vô danh rút gọn hay "Hàm suy ra" 
### First-class-function - (Hàm trực kiện ?)

- A function is an instance of the Object type
- A function can have properties and has a link back to its constructor method
- You can store the function in a variable
- You can pass the function as a parameter to another function
- You can return the function from a function

### Strict mode
### Closure function
### Binding function

## 5. Quy ước lập trình - Coding Convention:

## 6. Callback - Promise:

### Callback function - Hàm Callback:
### Async và Await:
### Yield / next:
### Promise:

## 7. Lập trình hướng đối tượng - Object Oriented Programming (OOP):

### Bốn Tính chất cơ bản của OOP:
- Encapsulation: Tính đóng gói, bảo mật
- Inheritance: Tính kế thừa
- Polymophism: Tính đa hình
- Abstraction: Tính trừu tượng
### Prototype 
### Class 

## 8. Vòng lặp xử lý sự kiện - Event Loop:

### Single Thread - Đơn luồng:
### Call stack:
### Timing function:
- setTimeout()
- processNextTick()
- setInterval()
### Task queue:
### Callback:

## 9. Testing with Mocha-Chai
### Unit test với Mocha-Chai:
- Should
- Expect 
- Assert

## 10. JSON - Javascript Object Notation

### Định Nghĩa,Ví dụ,etc...

## 11. Thiết kế Mẫu - Design Patterns:

### Factory
### Prototype
### Singleton
### Mixin
### MVC

## 12. Cấu trúc dữ liệu - Data Structure:
### Dictionnary
### Array
### Queue
### TypedArray
### Set
### Map
### Linked List
### 3rd party libraries
- Lodash
- Immutable
