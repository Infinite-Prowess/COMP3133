const assert = require('chai').assert;
const add = require('../app/calculator').add;
const mul = require('../app/calculator').mul;
const div = require('../app/calculator').div;
const sub = require('../app/calculator').sub;


describe('calculator', function () {

    describe('add', function () {
        it('Expected result 7 PASS', function () {
            let result = add(5, 2)
            assert.equal(result, 7)
        })

        it('Expected result 8 FAIL', function () {
            let result = add(5, 2)
            assert.equal(result, 8)
        })
    })

    describe('sub', function () {
        it('Expected result 3 PASS', function () {
            let result = sub(5, 2)
            assert.equal(result, 3)
        })

        it('Expected result 5 FAIL', function () {
            let result = sub(5, 2)
            assert.equal(result, 5)
        })
    })


    describe('mul', function () {
        it('Expected result 10 PASS', function () {
            let result = mul(5, 2)
            assert.equal(result, 10)
        })

        it('Expected result 12 FAIL', function () {
            let result = mul(5, 2)
            assert.equal(result, 12)
        })
    })

    describe('div', function () {
        it('Expected result 5 PASS', function () {
            let result = div(10, 2)
            assert.equal(result, 5)
        })

        it('Expected result 2 FAIL', function () {
            let result = div(10, 2)
            assert.equal(result, 2)
        })
    })
})