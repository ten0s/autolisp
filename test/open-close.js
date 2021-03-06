const QUnit = require('qunit')
const {evaluate} = require('../src/VeLispEvaluator.js')
const {Bool, Sym} = require('../src/VeLispTypes.js')

const tests = [
    {test: '(type (open "file.txt" "r"))', result: new Sym('file')},
    {test: '(type (open "file.txt" "w"))', result: new Sym('file')},
    {test: '(type (open "file.txt" "a"))', result: new Sym('file')},
    {test: '(open "unknown.txt" "r")', result: new Bool(false)},
    {test: '(type (open "unknown.txt" "a"))', result: new Sym('file')},

    {test: '(close (open "file.txt" "r")))', result: new Bool(false)},
    {test: '(close (open "file.txt" "w")))', result: new Bool(false)},
    {test: '(close (open "file.txt" "a")))', result: new Bool(false)},
    {test: '(setq f (open "file.txt" "w")) (close f) (close f)', result: new Bool(false)},
]

const errors = [
    {test: '(open)', result: new Error('open: too few arguments')},
    {test: '(open "file.txt")', result: new Error('open: too few arguments')},
    {test: '(open "file.txt" "r" \'extra)', result: new Error('open: too many arguments')},

    {test: '(close)', result: new Error('close: too few arguments')},
    {test: '(close 1)', result: new Error('close: `file-desc` expected File')},
    {test: '(close (open "file.txt" "w") \'extra)', result: new Error('close: too many arguments')},
]

QUnit.test('open-close', assert => {
    const fs = require('fs')
    // Setup
    fs.closeSync(fs.openSync('file.txt', 'w'))
    try { fs.unlinkSync('unknown.txt') } catch { }

    tests.forEach(t => {
        assert.deepEqual(evaluate(t.test), t.result, t.test)
    })

    // Tear down
    fs.unlinkSync('file.txt')
    fs.unlinkSync('unknown.txt')

    errors.forEach(t => {
        assert.throws(() => evaluate(t.test), t.result, t.test)
    })
})
