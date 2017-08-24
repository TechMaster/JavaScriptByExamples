# Object

Viết bởi Phan Quân.

## I. Đối Tượng Trong Javascript

Đối tượng trong javascript dùng để lưu trữ dữ liệu thông qua các thuộc tính của nó, dữ liệu trữ dưới dạng biến thì gọi là properties (các thuộc tính) còn dữ liệu trữ dưới dạng hàm thì gọi là methods (các phương thức).

```javascript
// Khởi tạo đối tượng con mèo
let cat = {// đây là các properties (thuộc tính)
    name: 'Tom',                // tên là Tom    
    sound: 'Meow',    // loài mèo Nga lông xanh
    say(){                      // Tom kêu meo meo
        return `${cat.name} says ${cat.sound}`
    } // đây là một method (phương thức) dưới dạng hàm
}
```
Khi khai báo đối tượng ta khai báo một cách đơn giản như trên hoặc khai báo đối tượng rỗng không có giá trị:

```javascript
// nên
let emptyObj = {}

// tránh khai báo kiểu object:
let emptyObj = new Object()
```
Từ khoá this với đối tượng:

This sẽ trỏ tới đối tượng đang bao quanh nó.

## II. Truy vấn Properties và Methods của Object
***************
Để truy vấn thuộc tính và phương thức của đối tượng (properties và method của Object) ta dùng dấu "." và dấu "[]"

### Dot Notation và Bracket Notation

#### Giống: 

Như ví dụ ở trên, ta truy vấn tới thuộc tính của đối tượng thông qua dấu "." và "[]" - truy vấn trực tiếp và gián tiếp.

```javascript
// ví dụ II-1
// Khởi tạo đối tượng con mèo
let cat = {// đây là các thuộc tính
    name: 'Tom',                // tên là Tom    
    spacies: 'Russian Blue',    // loài mèo Nga lông xanh
    say(){                      // Tom kêu meo meo
        return `${this.name} says Meow Meow`
    } // đây là một method (phương thức) dưới dạng hàm
}

console.log(cat.name)       // in ra 'Tom'
console.log(cat['name'])    // in ra 'Tom'
```
Dễ thấy rằng cả 2 cách đều đưa ra một kết quả, do đó ta có thể sử dụng cả 2 để truy vẫn và thường mình sẽ dùng Dot Notation cho dễ nhìn.

#### Khác: 

Khi ta muốn truyền tham số vào truy vấn, hai cách trên sẽ cho kết quả khác nhau.Ví dụ:
```javascript
// ví dụ II-2
// Khởi tạo đối tượng con mèo
let cat = {// đây là các thuộc tính
    name: 'Tom',                // tên là Tom    
    spacies: 'Russian Blue',    // loài mèo Nga lông xanh
    cry(){                      // Tom kêu meo meo
        return `${this.name} cries Meow Meow`
    } // đây là một method (phương thức) dưới dạng hàm
}

let test = 'name'   // Khai báo một biến test để kiểm tra sự khác nhau:

console.log(cat.test)   // in ra 'Undefined'
console.log(cat[test])  // in ra 'Tom' giống cat['name']
```

Lúc này, khi ta gõ `person.test` thì tham số test sẽ bị truyền trực tiếp vào đối tượng `person` và test sẽ trở thành một thuộc tính mới của `person`, do đó khi gõ `person.test` -> gọi tới thuộc tính `test` của `person` và tất nhiên `person` không có thuộc tính `test` nên sẽ cho kết quả `undefined`.

Còn `person[test]` thì sao ?, cách gọi này giống như gọi trong mảng, nó sử dụng tham số để gián tiếp truy vấn tới thuộc tính của đối tượng. Khi ta viết `person.['name']` thì hiểu như ta truyền một chuỗi string `'name'` vào ngoặc vuông để tìm tới thuộc tính giống với chuỗi `'name'` đó. Thế nên bạn Muốn truyền một tham số động để tìm thuộc tính của một đối tượng thì nên dùng Bracket, còn không thì dùng Dot.

## III. Tính Tham Chiếu của Đối Tượng

Giống mảng, đối tượng có tính tham chiếu, tức là nếu ta gán đối tượng không đúng cách thì khi ta đổi giá trị thuộc tính của một đối tượng gán thì đối tượng bị gán cũng đổi theo - nó còn gọi là side effect (tác dụng phụ).

Gỉa sử mình muốn khởi tạo một đối tượng với cấu trúc giống tom

```javascript
let me = {
    name: 'Me',
    age: 20,
    intro() {
        return `Hello, Im ${this.name} and Im ${this.age} years old !`
    }
}

let you = me    // khởi tạo you và gán me cho you
you.name = 'You'// đổi thuộc tính name
you.age = 25    // đổi thuộc tính age

console.log(me.intro());
// in ra Hello, Im You and Im 25 years old !

console.log(you.intro());
// in ra Hello, Im You and Im 25 years old !
```

Ta thấy khi gán object `me` cho `you` và thay đổi một trong 2 thì cả 2 bị thay đổi, đây là một side effect mà ta không muốn dính vào tí nào. Để fix lỗi này thì ta sử dụng `Object.assign()` hoặc `Object.create()`:

```javascript
let me = {
    name: 'Me',
    age: 20,
    intro() {
        return `Hello, Im ${this.name} and Im ${this.age} years old !`
    }
}
// khởi tạo you qua Object.assign() hoặc create() và gán me cho you
let you = Object.assign({}, me) // chọn 1 
let you = Object.create(me)     // trong 2

you.name = 'You'// đổi thuộc tính name
you.age = 25    // đổi thuộc tính age

console.log(me.intro());
// in ra Hello, Im Me and Im 20 years old !

console.log(you.intro());
// in ra Hello, Im You and Im 25 years old !
```

Vậy là ta đã giải quyết được side effect thông qua `Object.assign()` và `Object.create()`. Điểm khác nhau giữa 2 method của prototype Object là `assign()` sẽ tạo 1 đối tượng rỗng và gán me cho you, còn `create()` sẽ tạo thẳng you với cấu trúc giống me, `create()` sau này được dùng nhiều trong hướng đối tượng.

## IV. JSON - Javascript Object Notation

#### Định nghĩa:

JSON - JavaScript Object Notation có nghĩa là Biểu diễn đối tượng dưới dạng javascript.

Khi dữ liệu được luân chuyển giữa Server và Browsers thì nó luôn ở dạng text, khi dữ liệu chạy từ Browser tới server, ta có thể convert các javascript object sang JSON rồi chuyển lên server và khi server chuyển dữ liệu trở lại, ta lại có thể convert JSON đó trở về dạng javácript object để dễ xử lý.

Trước đây, người ta hay dùng XML để chuyển dữ liệu thì giờ họ chuyển sang JSON vì JSON dễ hiểu, dễ parse hơn XML, và quan trọng nhất là json vốn là ready-to-use javascript object nên trình duyệt tiếp cận dễ dàng hơn so với XML.

Ví dụ về Json

```json
{"employees":[
    { "firstName":"John", "lastName":"Doe" },
    { "firstName":"Anna", "lastName":"Smith" },
    { "firstName":"Peter", "lastName":"Jones" }
]}
```

Ví dụ về XML

```xml
<employees>
    <employee>
        <firstName>John</firstName> <lastName>Doe</lastName>
    </employee>
    <employee>
        <firstName>Anna</firstName> <lastName>Smith</lastName>
    </employee>
    <employee>
        <firstName>Peter</firstName> <lastName>Jones</lastName>
    </employee>
</employees>
```

Ta sẽ thấy rằng cấu trúc của XML phức tạp hơn Json nhiều.

#### Quy tắc khai báo Json