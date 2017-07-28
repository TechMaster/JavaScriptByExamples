let person = { // khai báo dạng literal hay còn gọi là kiểu hàn lâm
    name: 'Tom',
    age: 16,
    hobbies: ['Reading', 'Coding', 'Gaming'],
    family: {
        father: 'Spike',
        mother: 'Hanna'
    },
    intro() {
        return `Hi, My name is ${this.name}`+
        `,im ${this.age} years old.`
    }
}
console.log(person.name)
console.log(person.intro());

let obj = {}
obj.intro = () => {
    
}

