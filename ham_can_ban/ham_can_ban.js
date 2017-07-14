// function hamCha(){
//     obj = {
//         conghaiso: function(a, b) {
//             return a + b;
//         },
//         truhaiso: (a, b) => {
//             return a - b;
//         }
//     };
//     return obj;
// }
//
// let func = hamCha();
//
// console.log(func.conghaiso(1,2)); // 3
// console.log(func.truhaiso(3,2)); // 3




// function hamCha() {
//     let obj = {
//         name: 'Techmaster',
//         age: 5,
//         address: 'Số 14, ngõ 4, Nguyễn Đình Chiểu, Đống Đa, Hà Nội'
//     };
//     return obj;
// }
//
// let func = hamCha();
//
// console.log(func)



//
// function make_person(firstname, lastname, age) {
//     person = {};
//     person.firstname = firstname;
//     person.lastname = lastname;
//     person.age = age;
//     return person;
// }
// console.log(make_person("Tech", "master", 5));
// console.log(make_person("Tech 1", "master 1", 6));

function make_person_object(firstname, lastname, age) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
    // Note, we did not include a return statement
}

let Joe = make_person_object("Joe", "Smith", 23);
console.log(Joe); // undefined

let john = new make_person_object("john", "Smith", 23);
console.log(john); // make_person_object { firstname: 'john', lastname: 'Smith', age: 23 }
