// let cat = {
//     spacies: 'Russian Blue',    //loài
//     name: 'Tom',                //tên
//     cry(){
//         return `${this.name} cries Meow Meow`
//     }
// }

// console.log(cat instanceof Object)


// function Pet(type,sound){
//     this.type = type
//     this.cry = function(){
//         return `${this.type} cries ${sound} ${sound}`
//     }
// }

// let cat = new Pet('Cat','Meow')
// let dog = new Pet('Dog','Gaow')

// console.log(cat.cry())
// console.log(dog.cry())

// console.log(Pet);

// let Pet = {}

// let cat = {
//     type: 'Cat',
//     cry() {
//         return `${this.type} cries Meow Meow`
//     }
// }

// let dog = {
//     type: 'Dog',
//     cry() {
//         return `${this.type} cries Gaoo Gaoo`
//     }
// }

// Pet = {cat,dog}

// console.log(Pet)

// console.log(Object.valueOf(cat))



// let animalNo1 = {
//     type: 'Cat',
//     cry() {
//         return `${animalNo1.type} cries Meow Meow`
//     }
// }

// let animalNo2 = {
//     type: 'Dog',
//     cry() {
//         return `${animalNo2.type} cries Gaoo Gaoo`
//     }
// }

// // Truy vấn tới cat và dog:
// console.log(animalNo1.cry())    // in ra { type: 'Cat', cry: [Function: cry] }
// console.log(animalNo2.cry())    // in ra { type: 'Dog', cry: [Function: cry] }


// let cat = {
//     name: 'Tom',
//     spacies: 'Russian Blue',
//     intro(){
//         return `${this.name} is a ${this.spacies} cat`
//     }// ở đây this sẽ trỏ tới đối tượng cat tương ứng cat.name,cat.spacies
// }
// // Tom là một chú mèo Nga lông xanh
// console.log(cat.intro()) // in ra 'Tom is a Russian Blue cat'

// function Animal(type,sound){
//     this.type = type
//     this.cry = function(){
//         return `${this.type} cries ${sound} ${sound}`
//     }
// }

// // Thực thể hóa (instantiation) các thực thể cat và dog
// let animalNo1 = new Animal('Cat','Meow') // log in ra { type: 'Cat', cry: [Function: cry] }                                  
// let animalNo2 = new Animal('Dog','Gaow') // log in ra { type: 'Dog', cry: [Function: cry] }

// // Kiểm tra property và method của instance animalNo1-2 vừa tạo
// console.log(animalNo1)   // in ra 'Cat'
// console.log(animalNo2.type)   // in ra 'Dog'
// console.log(animalNo1.cry())  // in ra 'Cat cries Meow Meow'
// console.log(animalNo2.cry())  // in ra 'Dog cries Gaow Gaow'


// let cat = {// đây là các thuộc tính
//     name: 'Tom',                // tên là Tom    
//     spacies: 'Russian Blue',    // loài mèo Nga lông xanh
//     cry(){                      // Tom kêu meo meo
//         return `${this.name} cries Meow Meow`
//     } // đây là một method (phương thức) dưới dạng hàm
// }

// let test = 'name'   // Khai báo một biến test để kiểm tra sự khác nhau:

// console.log(cat.test)   // in ra 'Undefined'
// console.log(cat[test])  // in ra 'Tom' giống cat['name']

// let x = 0

// console.log(typeof(x.toString()))


// let cat = {
//     name: 'Tom',
//     spacies: 'Russian Blue',
//     intro(){
//         return `${this.name} is a ${this.spacies} cat`
//     }// ở đây this sẽ trỏ tới đối tượng cat tương ứng cat.name,cat.spacies
// }
// // Tom là một chú mèo Nga lông xanh
// // console.log(cat.intro()) // in ra 'Tom is a Russian Blue cat'
// console.log(cat.valueOf())

// Constructor 
// function Pet (type,sound){
//     this.type = type
//     this.sound = sound
//     this.cry = function(){
//         return `${this.type} cries ${this.sound} ${this.sound}`
//     }
// }

// // Khai báo instance cat
// let cat = new Pet('Cat','Meow')
// let dog = new Pet('dog','Gaow')

// Pet.prototype.intro = function(){
//     return `${this.type} says Hello`
// }

// console.log(cat.intro())
// console.log(dog.intro())

// unnamed
var Triangle = class {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};

// named
var Rect = class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};

let tri = new Triangle(3,4)
console.log(tri);

let rec = new Rect(4,4)
console.log(rec instanceof Rectangle);