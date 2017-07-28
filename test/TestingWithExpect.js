const expect = require('chai').expect
const mocha = require('mocha')
const math = require('../javascript/math.js')

describe('Testing Quadratic Equation using expect():', () => {
    it('if a is not number throw error.', () => {
        expect(() => {
            math.quadratic('1', 2, 3)
        }).to.throw('a must be a number !')
    })
    it('if b is not number throw error.', () => {
        expect(() => {
            math.quadratic(1, '2', 3)
        }).to.throw('b must be a number !')
    })
    it('if c is not number throw error.', () => {
        expect(() => {
            math.quadratic(1, 2, '3')
        }).to.throw('c must be a number !')
    })
    it('if delta < 0, return "Quadratic has vitual values"', () => {
        expect(math.quadratic(1, 2, 3)).to.have.string('Quadratic has vitual values')
    })
    it('(a, b, c) = (1, -2, 1) return value = 1.', () => {
        expect(math.quadratic(1, -2, 1)).to.equal(1)
    })
    it('(a, b, c) = (1, 2, -3) return values = [1, -3].', () => {
        expect(math.quadratic(1, 2, -3)).to.eql([1, -3])
    })
})