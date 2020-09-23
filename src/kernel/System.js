const fs = require('fs');
const path = require('path');

const {Bool, Str, Sym, Fun, ensureType} = require('../VeLispTypes.js');
const Evaluator = require('../VeLispEvaluator.js');
const {fmtError} = require('../VeLispError.js');

//
// System Functions
//

exports.initContext = function (context) {
    context.setSym('CWD', new Fun('cwd', [], [], (self, args) => {
        if (args.length > 0) {
            throw new Error('cwd: too many arguments');
        }
        return new Str(process.cwd());
    }));
    context.setSym('GETENV', new Fun('getenv', ['varname'], [], (self, args) => {
        if (args.length == 0) {
            throw new Error('getenv: too few arguments');
        }
        if (args.length > 1) {
            throw new Error('getenv: too many arguments');
        }
        const name = ensureType('getenv:', args[0], [Str]);
        const value = process.env[name.value()];
        if (typeof value === "undefined") {
            return new Bool(false);
        }
        return new Str(value);
    }));
    context.setSym('SETENV', new Fun('setenv', ['varname', 'value'], [], (self, args) => {
        if (args.length < 2) {
            throw new Error('setenv: too few arguments');
        }
        if (args.length > 2) {
            throw new Error('setenv: too many arguments');
        }
        const name = ensureType('setenv: `varname`', args[0], [Str]);
        const value = ensureType('setenv: `value`', args[1], [Str]);
        process.env[name.value()] = value.value();
        return value;
    }));
}