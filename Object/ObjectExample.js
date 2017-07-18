let person = {
    name: 'Tom',
    age: 34,
    intro(){
        return `Im ${this.name} and im ${this.age} years old.`
    }
}



//Dot Notation hay còn truy vấn trực tiếp

// Bracket Notation - Truy vấn gián tiếp thông qua dấu []



let test = 'name'

console.log(person.test);
console.log(person[test]);
