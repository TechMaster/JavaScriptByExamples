# JavaScript by Examples
Thông qua nhiều ví dụ nhỏ, có tính minh hoạ, so sánh đối lập giúp học viên
hiểu rõ kỹ thuật lập trình JavaScript trên trình duyệt và Node.js

Khoá học được thiết kế bởi đội ngũ lập trình viên Techmaster.

# I. Cài Đặt, Cấu Hình Môi Trường
## 1.Cài đặt, cấu hình môi trường
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


**Một số IDE để run và debug Javascript Back-end**

- Web Storm
- PyCharm
- PHP Storm
- Visual Studio Code
- ...

## 2. JavaScript frond end giống và khác gì với lập trình JavaScript Node.js tạm gọi là back end?
- Cùng sử dụng chung ngôn ngữ JavaScript và trình dịch Google V8
- Node.js có bổ xung thêm [một số module](https://nodejs.org/dist/latest-v8.x/docs/api/)
- JavaScript front end tương tác với DOM, Window trong trình duyệt, không truy cập được hệ thống file trên máy tính
- Video sử dụng Chrome Dev Tools để run và debug Javascript Front-end**
- Sử dụng NodeJS để run Javascript Back-end


# II. Javascript Toàn Tập
// số thứ tự sẽ quyết định sau.
## 1. Kiểu dữ liệu cơ bản - Basic data type:

. Khai báo var, let và const. Sự khác biệt của từng khai báo. Kiểm tra xem trình duyệt Chrome, Firefox, Safari đã hỗ trợ let và const chưa
- Number - Số
- Boolean
- String - Chuỗi
- Scoping và Hoisting
- So sánh '==' và '==='
- Loose typing: phép cộng giữa chuỗi và số

## 2. Toán tử - Operator:
- Mathematical operator - Toán tử toán học (+, -, *, /, %, ++, --)
- Assignment operator - Toán tử gán (-=, +=, =, *=, /=,%=)
- Relational operator - Toán tử quan hệ (>, < , <=, >=, ==, !==)
Bài tập: ghi chi tiết ra

## 3. Cấu trúc lập trình - Control structure:
- If then else
- For, for in, for of, forEach
- While - do while
- Break - Continue
- Switch
Bài tập: vẽ bảng cửu chương, tính giai thừa, vẽ hình thoi, tính chỉ số BMI, cho mảng số tự nhiên, tìm ra mảng chứa phần tử duy nhất, tính lãi suất sau N tháng. Tham khảo quyển sách "Introduction to Java" hoặc CodeFight

## 4. Hàm căn bản
- Khai báo hàm
- Truyền tham số cho hàm: byValue vs byReference
- Hàm là một đối tượng. Hàm trả về hàm
- Dùng prototype để bổ xung phương thức

## 5. Mảng
- Mảng 1 chiều, chiều dài mảng, lấy phần tử thứ i trong mảng
- Duyệt mảng for và forEach
- Thêm, xoá phần tử mảng: push, pop
- Tìm kiếm phần tử trong mảng
- Sắp xếp mảng theo tiêu chí
- Array.prototype để bổ xung phương thức cho mảng. [Tham khảo](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/prototype)
- Mảng 2 chiều
Bài tập:
- Nghịch đảo mảng
- Tìm số phần tử chung có trong 2 mảng.

## 6. Chuỗi - String
[Tham khảo](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String)
- Khai báo string sử dụng single quote, double quote, string trên nhiều dòng.
- Các escape character
- Template string
Bài tập: 
- Đếm số từ khác biệt trong một chuỗi
- Convert văn bản định dạng Markdown tối giản có 4 loại thẻ căn bản sang HTML

## 7. Đối tượng
[Tham khảo](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics)
- Đối tượng và thuộc tính
- Tạo đối tượng, hàm tạo đối tượng, (xem)[https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_JS]
- Class trong ES6

## 8. Hướng đối tượng
- Encapsulation: Tính đóng gói, bảo mật. Javascript không có keyword public, private, protected, friend như C++
- Inheritance: Tính kế thừa. Có 2 loại single inheritance (kế thừa từ 1 base class) và multiple inheritance (kế thừa từ nhiều base class)
- Polymophism: Tính đa hình. [Xem thêm](https://www.youtube.com/watch?v=zdovG9cuEBA)
- Abstraction: Tính trừu tượng: abstract class hay interface thì JavaScript chưa có
[Object-Oriented JavaScript — A Deep Dive into ES6 Classes](https://www.sitepoint.com/object-oriented-javascript-deep-dive-es6-classes/)

- Hãy so sánh kế thừa theo kiểu prototype với kế thừa từ Class trong ES6
- Tìm hiểu thêm về đa kế thừa [mixin](https://javascriptweblog.wordpress.com/2011/05/31/a-fresh-look-at-javascript-mixins/)

## 8. Hàm nâng cao
- Anonymous Function - Hàm vô danh
- Arrow function - Hàm vô danh rút gọn hay "Hàm suy ra" 
- First-class-function - (hàm là một đối tượng, trong hàm có thể bổ xung thuộc tính)

- A function is an instance of the Object type
- A function can have properties and has a link back to its constructor method
- You can store the function in a variable
- You can pass the function as a parameter to another function
- You can return the function from a function

## 9. Quy ước lập trình - Coding Convention:
Tham khảo quy ước lập trình JavaScript của [AirBNB JavaScript coding convention](https://github.com/airbnb/javascript)
Phần này chỉ cần dịch ra tiếng Việt là được push lên Github.

## 10. Callback

## 11. Promise

## 10: Functional Programming
[Bài viết của Linh Ngo](https://github.com/NLinh2911/Functional-Programming)
[serie bài viết của TobyHo đếm số từ trong văn bản text](http://tobyho.com/2015/11/09/functional-programming-by-example/)




### Callback function - Hàm Callback:
### Async và Await:
### Yield / next:
### Promise:

## 11: Closure function

### Binding function





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
