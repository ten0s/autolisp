const QUnit = require('qunit')
const {evaluate} = require('../src/VeLispEvaluator.js')
const {Real} = require('../src/VeLispTypes.js')

const tests = [
    {test: '(atof "3.9")', result: new Real(3.9)},
    {test: '(atof "-17.0")', result: new Real(-17.0)},
    {test: '(atof "3")', result: new Real(3.0)},
    {test: '(atof "")', result: new Real(0.0)},
    {test: '(atof "abc")', result: new Real(0.0)},
]

const errors = [
    {test: '(atof)', result: new Error('atof: too few arguments')},
    {test: '(atof "1.0" "2.0")', result: new Error('atof: too many arguments')},
    {test: '(atof 1.0)', result: new Error('atof: expected Str')},
]

QUnit.test('atof', assert => {
    tests.forEach(t => {
        assert.deepEqual(evaluate(t.test), t.result, t.test)
    })

    errors.forEach(t => {
        assert.throws(() => evaluate(t.test), t.result, t.test)
    })
})
