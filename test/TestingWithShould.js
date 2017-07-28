const chai = require('chai').should();
const mocha = require('mocha');
const math = require('../javascript/math.js')

describe('Testing Divide Function using should(): ', () => {
    it('if a is not number throw error', () => {
        (() => {
            math.divide('bad param', 10)
        }).should.throw('a must be a number !')
    })
    it('if b is not number throw error', () => {
        (() => {
            math.divide(34, 'bad param')
        }).should.throw('b must be a number !')
    })
    it('if b equals 0 throw error',() => {
        (() => {
            math.divide(45,0)
        }).should.throw('b must not equal 0 !')
    })
    it('10/2 = 5', () => {
        math.divide(10,2).should.equal(5)
    })
    it('10/4 = 2.5',()=>{
        math.divide(10,4).should.equal(2.5)
    })
})
