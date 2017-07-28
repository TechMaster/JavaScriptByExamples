# Hàm là đối tượng, hàm trả về hàm

### Hàm là đối tượng

Tất cả các hàm trong javascript là đối tượng và có thể sử dụng để tạo đối tượng.

Ví dụ:

```javascript
function make_person(firstname, lastname, age) {
    person = {};
    person.firstname = firstname;
    person.lastname = lastname;
    person.age = age;
    return person;
}
console.log(make_person("Tech", "master", 5)); // { firstname: 'Tech', lastname: 'master', age: 5 }
console.log(make_person("Tech 1", "master 1", 6)); // { firstname: 'Tech 1', lastname: 'master 1', age: 6 }+
```

### Hàm trả về hàm

Hàm có thể trả về một hoặc nhiều hàm.

1) Trả về 1 hàm

Ví dụ:

```javascript
function hamCha(){
    let conghaiso = (a, b) => {
        return a + b;
    }; // tạo 1 hàm cộng 2 số bằng ES6
    return conghaiso; // Trả về 1 hàm
}

let func = hamCha();

console.log(func(1,2)); // 3
```

2) Trả về nhiều hàm

Sử dụng object để chứa nhiều hàm và trả về object đó.

```javascript
function hamCha(){
    /**
    * Tạo 1 object để lưu các function vào object này 
    */
    obj = {};
    obj.conghaiso = function(a, b) { return a + b };
    obj.truhaiso = (a, b) => { return a - b };
    return obj;
}

let func = hamCha();

console.log(func.conghaiso(1,2)); // 3
console.log(func.truhaiso(3,2)); // 1
```



