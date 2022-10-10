const assert = require('chai').assert
const { arrayOfNumbers, helloWorld, substraction } = require('../index')

describe('index', () => {
  it('should return a string', () => {
    assert.isString(helloWorld())
  })

  it('should return "Hello World"', () => {
    assert.equal(helloWorld(), 'Hello World!')
  })

  it('should substract', () => {
    assert.equal(substraction(5, 3), 2)
    assert.equal(substraction(5, -1), 6)
  })

  it('should return an array', () => {
    assert.isArray(arrayOfNumbers)
    assert.lengthOf(arrayOfNumbers, 5)
  })
})
