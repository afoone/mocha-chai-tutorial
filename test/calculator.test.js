const assert = require('chai').assert
const expect = require('chai').expect
const should = require('chai').should()

const calculator = require('../calculator').calculator

describe('calculator', () => {
  it('test add tested', () => {
    assert.equal(calculator.addTested('test'), 'test tested')
    assert.lengthOf(calculator.addTested('test'), 11)
    assert.typeOf(calculator.addTested('test'), 'string')
  })

  it('test add', () => {
    expect(calculator.add(1, 2)).to.equal(3)
    expect(calculator.add(1, 2)).to.be.a('number')
    expect(calculator.add(1, 2)).to.be.above(0)
  })

  it('test mult', () => {
    calculator.mult(1, 2).should.equal(2)
    calculator.mult(1, 2).should.be.a('number')
    calculator.mult(1, 2).should.be.above(0)
  })
})
