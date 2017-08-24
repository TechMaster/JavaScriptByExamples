const assert = require('chai').assert
const mocha = require('mocha')
const math = require('../javascript/math.js')

describe('Testing Convert Angle to Radian using assert():', () => {
    it('if Angle is not a number throw Error', () => {
        assert.throws(() => {
            math.angleToRadian('a')
        }, 'Angle must be a number !')
    })
    it('0 radius = 0 radian.', () => {
        assert.equal(math.angleToRadian(0), '0')
    })
    it('180 radius = π radian', () => {
        assert.equal(math.angleToRadian(180), 'π')
    })
    it('360 radius = 2π radian', () => {
        assert.equal(math.angleToRadian(360),'2π')
    })
    it('90 radius = π/2 radian', () => {
        assert.equal(math.angleToRadian(90), 'π/2')
    })
    it('270 radius = 3π/2 radian', () => {
        assert.equal(math.angleToRadian(270), '3π/2')
    })
    it('3.5 radius = 7π/360', () => {
        assert.equal(math.angleToRadian(3.5), '7π/360')
    })

})