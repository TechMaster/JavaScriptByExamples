// class Animal {
//     constructor(type, sound) {
//         this.type = type
//         this.sound = sound
//     }

//     cry() {
//         return `${this.type} cries ${this.sound} ${this.sound}`
//     }
// }

// class Pet extends Animal {
//     constructor(type, sound, name, spacies, act) {
//         super(type, sound)
//         this.name = name
//         this.spacies = spacies
//         this.act = act
//     }

//     will() {
//         return `${this.name} ${this.type} will ${this.act} you`
//     }

// }

// let tomCat = new Pet('Cat','Meow','Tom','Russian Blue','love')

// console.log(tomCat.cry())
// console.log(tomCat.will())

// console.log(tomCat instanceof Pet);
// console.log(tomCat instanceof Animal);
// console.log(tomCat instanceof Object);

// class Article {
//   constructor(title, date) {
//     this.title = title;
//     this.date = date;
//   }

//   static createTodays() {
//     // remember, this = Article
//     return new this("Todays digest", new Date());
//   }
// }

// let article = Article.createTodays();

// console.log( article.title ); // Todays digest

class Calculator {
    static sum(...args) {
        let sum = 0;
        args.forEach(n => {
            sum += n;
        })
        return sum;
    }
    static avg(...args) {
        let avg = 0;
        args.forEach(n => {
            avg += n;
        })
        return avg / args.length;
    }
    static factorial(n) {
        if (n === 0) return 1
        return n * this.factorial(n - 1)
    } // this ở đây sẽ trỏ tới Calculator
}

// in ra 131 là tổng các tham số
console.log(Calculator.sum(1, 2, 3, -5, 7, 4, 45, 67, 7));

// in ra 13 là trung bình cộng của các tham số
console.log(Calculator.avg(45, -3, 4, 6));

// in ra giai thừa của 6 là 720
console.log(Calculator.factorial(6));

let calc = new Calculator()
console.log(calc.sum(4,5)) 
// Báo lỗi calc.sum is not a function.
// Do static method chỉ truy vấn tới chính đối tượng Calculator 
// chứ không phải thực thể calc