exports.divide = (a, b) => {
    if (typeof a !== 'number') {
        throw new Error('a must be a number !');
    }
    if (typeof b !== 'number') {
        throw new Error('b must be a number !');
    }
    if (b === 0) {
        throw new Error('b must not equal 0 !');
    }
    return a / b;
}

exports.quadratic = (a, b, c) => {
    if (typeof a !== 'number') {
        throw new Error('a must be a number !');
    }
    if (typeof b !== 'number') {
        throw new Error('b must be a number !');
    }
    if (typeof c !== 'number') {
        throw new Error('c must be a number !');
    }

    let delta = b * b - 4 * a * c

    if (delta < 0) {
        return `Quadratic has vitual values`
    }
    if (delta === 0) {
        let twoA = 2 * a
        return -b / twoA
    }
    if (delta > 0) {
        let twoA = 2 * a
        return [(-b + Math.sqrt(delta)) / twoA, ((-b - Math.sqrt(delta)) / twoA)]
    }
}

exports.angleToRadian = (a) => {
    if (typeof a !== 'number') {
        throw new Error('Angle must be a number !')
    }
    if (a === 0) {
        return '0'
    } else if (a === 180){
        return 'π'
    } else {
        let x = simplifiedFraction(a, 180).split('/')
        x[0] += 'π'
        return x.join('/')
    }
}

const highesCommonDivisor = (a, b) => {
    let remainder = 0;
    while (b !== 0) {
        remainder = a % b;
        a = b;
        b = remainder;
    }
    return a
}

const simplifiedFraction = (a, b) => {
    let z = highesCommonDivisor(a, b)
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
