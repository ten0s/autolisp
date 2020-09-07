import QUnit from 'qunit';
import {evaluate} from '../AutoLISPEvaluator.js';
import {Bool} from '../AutoLISPTypes.js';

const tests = [
    {test: '(null nil)', result: new Bool(true)},
    {test: '(null T)', result: new Bool(false)},

    {test: '(null 0)', result: new Bool(false)},
    {test: '(null 0.0)', result: new Bool(false)},
    {test: '(null "")', result: new Bool(false)},
    {test: '(null \'foo)', result: new Bool(false)},

    {test: '(null (list))', result: new Bool(true)},
    {test: '(null (list nil))', result: new Bool(false)},

    {test: '(null (cons nil nil))', result: new Bool(false)},
];

QUnit.test("null", assert => {
    tests.forEach(t => {
        assert.deepEqual(evaluate(t.test), t.result, t.test)
    });
});