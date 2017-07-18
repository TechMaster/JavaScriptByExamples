// function Animal(type, sound) {
//     this.type = type
//     this.sound = sound
//     this.cry = function () {
//         return `${this.type} cries ${sound} ${sound}`
//     }
// }

// function Pet(type, sound, name, spacies, character) {
//     Animal.call(this, type, sound)
//     this.name = name
//     this.spacies = spacies
//     this.will = function () {
//         return `${this.name} ${this.type} will ${character} you`
//     }
// }

// Pet.prototype = Object.create(Animal.prototype);

// let tomCat = new Pet('Cat', 'Meow', 'Tom', 'Russian Blue', 'love')
// let spikeDog = new Pet('Dog', 'Gaow', 'Spike', 'American Bulldog', 'love')
// // console.log(tomCat.cry());
// // console.log(tomCat.will());
// // console.log(spikeDog.cry());
// // console.log(spikeDog.will());


// console.log(tomCat instanceof Pet)
// console.log(tomCat instanceof Animal)
// console.log(tomCat instanceof Object)


// Ta hãy tạo một đối tượng thú vật rồi cho các loại thú nuôi kế thừa nó.
function Animal(type, sound) {
    this.type = type
    this.sound = sound
    this.cry = function () {
        return `${this.type} cries ${this.sound} ${this.sound}`
    }
    this.will = function () {
        return `${this.type} will do nothing to you`
    }
}

function Pet(type, sound, name, spacies, act) {
    Animal.call(this, type, sound) // Tương tự super() trong java
    this.name = name
    this.spacies = spacies
    this.act = act
    this.will = function () {
        return `${this.name} ${this.type} will ${this.act} you`
    }
}

function Predator(type, sound, name, spacies, act) {
    Animal.call(this, type, sound) // Tương tự super() trong java
    this.name = name
    this.spacies = spacies
    this.act = act
    this.will = function () {
        return `Those Predators will ${this.act} you`
    }
}

Pet.prototype = Object.create(Animal.prototype)

let someAnimal = new Animal('Mammal','?')
let tomCat = new Pet('Cat', 'Meow', 'Tom', 'Russian Blue', 'love')
let simbaLion = new Predator('Lion', 'Roar', 'Simba', 'African Lion', 'chase')

console.log(someAnimal.will());
console.log(tomCat.will()); // Tom Cat will love you
console.log(simbaLion.will());