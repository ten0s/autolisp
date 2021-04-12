const fs = require('fs')
const {TestRunner} = require('./test-runner.js')
const {Bool, Int, List} = require('../src/VeLispTypes.js')

TestRunner.run({
    name: 'vl-file-systime',

    setup: () => {},

    teardown: () => {
        fs.unlinkSync('f1')
        fs.rmdirSync('d1')
    },

    tests: [
        {test: '(vl-mkdir "d1") (vl-file-systime "d1")', result: new Bool(false)},
        {test: '(vl-file-systime "d2")', result: new Bool(false)},
        {test: '(close (open "f1" "w")) (vl-file-systime "f1")', result: (systime) => {
            //console.log(systime)
            return systime instanceof List
                && systime.length() === 8
                && systime.value().every(x => x instanceof Int)
        }},
        {test: '(vl-file-systime "f2")', result: new Bool(false)},
    ],

    errors: [
        {test: '(vl-file-systime)', result: new Error('vl-file-systime: too few arguments')},
        {test: '(vl-file-systime "f1" "f2")', result: new Error('vl-file-systime: too many arguments')},
        {test: '(vl-file-systime \'f1)', result: new Error('vl-file-systime: expected Str')},
    ]
})
