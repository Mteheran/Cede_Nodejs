const assert = require('assert');
const fn = require('../fn');

test('Test sum function. Input 1 and 2. Expect 300.', () => {
    // Arrange
    const sum1 = 1;
    const sum2 = 2;
    const actual = 300;

    // Act
    const expected = fn(sum1, sum2);

    // Assert
    assert.equal(actual, expected);
});