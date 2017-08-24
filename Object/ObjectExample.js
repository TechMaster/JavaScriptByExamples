let tom = {
    name: 'Tom',
    age: 16,
    intro() {
        return `Hi, My name is ${this.name},`+
            `im ${this.age} years old.`
    }
}

let jerry = Object.create(tom)
jerry.name = 'Jerry'
jerry.age = 14
tom.age = 50



console.log('Jer:', jerry.intro());
console.log('Tom:', tom.intro());


