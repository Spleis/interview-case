const assert = require('assert');
const calculateParenthesis = require('../index');

describe('Simple calculations', function() {
    it('Simple addition', () => {
       assert.equal(calculateParenthesis('(3+5)'), 8);
    });

    it('Simple subtraction', () => {
        assert.equal(calculateParenthesis('(3-5)'), -2);
    });

    it('Simple division', () => {
        assert.equal(calculateParenthesis('(12/4)'), 3);
    });

    it('Simple multiplication', () => {
        assert.equal(calculateParenthesis('(12*4)'), 48);
    });

    it('Corner cases', () => {
        assert.equal(calculateParenthesis('(12/0)'), 'Infinity');
        assert.equal(calculateParenthesis('(12*0)'), 0);
    });
});

describe.skip('Calculations with multiple parenthesis', () => {
    it('Two parenthesis', () => {
        assert.equal(calculateParenthesis('((12+8)/(6-4))'), 10);
    });

    it('One parenthesis', () => {
        assert.equal(calculateParenthesis('(12+(3-4))'), 11);
        assert.equal(calculateParenthesis('((12+3)-4)'), 11);
    });

});

describe.skip('Negative numbers', () => {
    it('Simple case', () => {
        assert.equal(calculateParenthesis('(12+(-8))'), 4);
    });

    it('Negative number first', () => {
        assert.equal(calculateParenthesis('((0-8)+12)'), 4);
    });

    it('Harder case', () => {
        assert.equal(calculateParenthesis('(12+((-8)*2))'), -4);
    });
});

describe.skip('Multiple operators in a single parenthesis', () => {
   it('Simple addition', () => {
       assert.equal(calculateParenthesis('(12+3+1)'), 16);
   });

    it ('Simple subtraction', () => {
        assert.equal(calculateParenthesis('(12-3-1)'), 8);
    });

    it ('Simple multiplication', () => {
        assert.equal(calculateParenthesis('(3*3*2)'), 18);
    });

    it ('Simple division', () => {
        assert.equal(calculateParenthesis('(12/3/2)'), 2);
    });

    it ('Combinations of calculations', () => {
        assert.equal(calculateParenthesis('(2+2*3+4/2)'), 10);
    });
});