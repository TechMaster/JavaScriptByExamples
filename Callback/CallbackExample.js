const add = (a, b, cb) => {
    setTimeout(function () {
        if (typeof a !== 'number' || typeof b !== 'number') {
            return cb('a,b must be number !', undefined)
        } else {
            return cb(false, a + b)
        }
    }, 1000);

}

const powBy2 = (a, cb) => {
    setTimeout(function () {
        if (typeof a !== 'number') {
            return cb('a must be a number !', undefined)
        } else {
            return cb(false, a * a)
        }
    }, 500);
}

const rootBy2 = (a, cb) => {
    setTimeout(function () {
        if (typeof a !== 'number') {
            return cb('a must be a number !')
        } else {
            return cb(false, Math.sqrt(a))
        }
    }, 500);
}

try {
    add(2, 2, (err, resultOfAdd) => {
        if (err) {
            throw new Error(err)
        }
        powBy2(resultOfAdd, (err, resultOfPow) => {
            if (err) {
                throw new Error(err)
            }
            rootBy2(resultOfPow, (err, resultOfRoot) => {
                if (err) {
                    throw new Error(err)
                }
                console.log(resultOfRoot);
            })
        })
    })
} catch (err) {
    console.log(err);
}