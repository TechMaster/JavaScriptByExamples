// Viết class Calculator với static method đổi độ sang radian

class Calculator {
    static highesCommonDivisor(a, b) {
        let remainder = 0;
        while (b !== 0) {
            remainder = a % b;
            a = b;
            b = remainder;
        }
        return a
    }

    static simplifiedFraction(a, b) {
        let z = this.highesCommonDivisor(a, b)
        let x = a / z
        let y = b / z
        if (y === 1) {
            return `${x}`
        }
        if (x === 1) {
            return `/${y}`
        }
        return `${x}/${y}`
    }

    static angleToRadian(a) {
        if (typeof a !== 'number') {
            throw new Error('Angle must be a number !')
        }
        if (a === 0) {
            return '0'
        } else if (a === 180) {
            return 'π'
        } else {
            let x = this.simplifiedFraction(a, 180).split('/')
            x[0] += 'π'
            return x.join('/')
        }
    }
}


console.log('Angle to Radian: ', Calculator.angleToRadian(60)) // π/3
console.log('UCLN: ', Calculator.highesCommonDivisor(64, 54)); // 2



Math.dothing = function (a, b) {
    return a + b
}

console.log(Math.dothing(3,4));