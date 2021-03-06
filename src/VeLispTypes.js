const fs = require('fs')
const os = require('os')
const {find, escape} = require('./VeUtil.js')

const TRU = 'T'
const NIL = 'nil'

class Bool {
    // :: (bool)
    constructor(bool) {
        this.bool = bool
    }

    // :: () -> Sym | Nil
    type() {
        if (this.bool) {
            return new Sym('sym')
        }
        return new Bool(false)
    }

    // :: () -> bool
    isNil() {
        return !this.bool
    }

    // :: () -> bool
    value() {
        return this.bool
    }

    // :: (Any) -> Bool
    and(that) {
        if (that instanceof Bool) {
            return new Bool(this.bool && that.bool)
        }
        throw new Error(`Not implemented (and ${this} ${that})`)
    }

    // :: (Any) -> Bool
    or(that) {
        if (that instanceof Bool) {
            return new Bool(this.bool || that.bool)
        }
        throw new Error(`Not implemented (or ${this} ${that})`)
    }

    // :: () -> Bool
    not() {
        return new Bool(!this.bool)
    }

    // :: (Any) -> Bool
    equalTo(that) {
        return this.eq(that)
    }

    // :: (Any) -> Bool
    lessThan(that) {
        if (that instanceof Bool) {
            return new Bool(this.bool < that.bool)
        }
        if (that instanceof List) {
            if (that.isNil()) {
                return new Bool(!this.isNil())
            }
        }
        return new Bool(true)
    }

    // :: (Any) -> Bool
    eq(that) {
        return this.equal(that)
    }

    // :: (Any) -> Bool
    equal(that) {
        if (that instanceof Bool) {
            return new Bool(this.bool === that.bool)
        }
        if (that instanceof List) {
            if (that.isNil()) {
                return new Bool(this.isNil())
            }
        }
        return new Bool(false)
    }

    // :: () -> string
    toString() {
        return this.bool ? TRU : NIL
    }
}

class Int {
    // :: (int)
    constructor(int) {
        this.int = int
    }

    // :: () -> Sym
    type() {
        return new Sym('int')
    }

    // :: () -> false
    isNil() {
        return false
    }

    // :: () -> int
    value() {
        return this.int
    }

    multiply(that) {
        if (that instanceof Int) {
            return new Int(this.int * that.int)
        }
        if (that instanceof Real) {
            return new Real(this.int * that.real)
        }
        throw new Error(`Not implemented (* ${this} ${that})`)
    }

    divide(that) {
        if (that instanceof Int) {
            if (that.int === 0) {
                throw new Error('/: division by zero')
            }
            const res = this.int / that.int
            if (Number.isInteger(res)) {
                return new Int(res)
            }
            return new Int(Math.floor(res))
        }
        if (that instanceof Real) {
            if (that.real === 0) {
                throw new Error('/: division by zero')
            }
            return new Real(this.int / that.real)
        }
        throw new Error(`Not implemented (/ ${this} ${that})`)
    }

    // :: (Int | Real) -> Int | Real
    remainder(that) {
        if (that instanceof Int) {
            if (that.int === 0) {
                throw new Error('rem: division by zero')
            }
            return new Int(this.int % that.int)
        }
        if (that instanceof Real) {
            if (that.real === 0) {
                throw new Error('rem: division by zero')
            }
            return new Real(this.int % that.real)
        }
        throw new Error(`Not implemented (rem ${this} ${that})`)
    }

    add(that) {
        if (that instanceof Int) {
            return new Int(this.int + that.int)
        }
        if (that instanceof Real) {
            return new Real(this.int + that.real)
        }
        throw new Error(`Not implemented (+ ${this} ${that})`)
    }

    subtract(that) {
        if (that instanceof Int) {
            return new Int(this.int - that.int)
        }
        if (that instanceof Real) {
            return new Real(this.int - that.real)
        }
        throw new Error(`Not implemented (- ${this} ${that})`)
    }

    // :: () -> Int
    bitwiseNot() {
        return new Int(~this.int)
    }

    // :: (Any) -> Bool
    equalTo(that) {
        return this.eq(that)
    }

    // :: (Any) -> Bool
    lessThan(that) {
        if (that instanceof Int) {
            return new Bool(this.int < that.int)
        }
        if (that instanceof Real) {
            return new Bool(this.int < that.real)
        }
        throwTypeError('<:', that, [Int, Real])
    }

    // :: (Any) -> Bool
    eq(that) {
        return this.equal(that)
    }

    // :: (Any) -> Bool
    equal(that) {
        if (that instanceof Int) {
            return new Bool(this.int === that.int)
        }
        if (that instanceof Real) {
            return new Bool(this.int === that.real)
        }
        return new Bool(false)
    }

    // :: () -> string
    toString() {
        return this.int.toString()
    }
}

class Real {
    // (float | int)
    constructor(real) {
        this.real = real
    }

    // :: () -> Sym
    type() {
        return new Sym('real')
    }

    // :: () -> false
    isNil() {
        return false
    }

    // :: () -> float
    value() {
        return this.real
    }

    multiply(that) {
        if (that instanceof Int) {
            return new Real(this.real * that.int)
        }
        if (that instanceof Real) {
            return new Real(this.real * that.real)
        }
        throw new Error(`Not implemented (* ${this} ${that})`)
    }

    divide(that) {
        if (that instanceof Int) {
            if (that.int === 0) {
                throw new Error('/: division by zero')
            }
            return new Real(this.real / that.int)
        }
        if (that instanceof Real) {
            if (that.real === 0.0) {
                throw new Error('/: division by zero')
            }
            return new Real(this.real / that.real)
        }
        throw new Error(`Not implemented (/ ${this} ${that})`)
    }

    // :: (Int | Real) -> Int | Real
    remainder(that) {
        if (that instanceof Int) {
            if (that.int === 0) {
                throw new Error('rem: division by zero')
            }
            return new Real(this.real % that.int)
        }
        if (that instanceof Real) {
            if (that.real === 0) {
                throw new Error('rem: division by zero')
            }
            return new Real(this.real % that.real)
        }
        throw new Error(`Not implemented (rem ${this} ${that})`)
    }

    add(that) {
        if (that instanceof Int) {
            return new Real(this.real + that.int)
        }
        if (that instanceof Real) {
            return new Real(this.real + that.real)
        }
        throw new Error(`Not implemented (+ ${this} ${that})`)
    }

    subtract(that) {
        if (that instanceof Int) {
            return new Real(this.real - that.int)
        }
        if (that instanceof Real) {
            return new Real(this.real - that.real)
        }
        throw new Error(`Not implemented (+ ${this} ${that})`)
    }

    // :: (Any) -> Bool
    equalTo(that) {
        return this.eq(that)
    }

    // :: (Any) -> Bool
    lessThan(that) {
        if (that instanceof Int) {
            return new Bool(this.real < that.int)
        }
        if (that instanceof Real) {
            return new Bool(this.real < that.real)
        }
        throwTypeError('<:', that, [Int, Real])
    }

    // :: (Any) -> Bool
    eq(that) {
        return this.equal(that)
    }

    // :: (Any) -> Bool
    equal(that) {
        if (that instanceof Int) {
            return new Bool(this.real === that.int)
        }
        if (that instanceof Real) {
            return new Bool(this.real === that.real)
        }
        return new Bool(false)
    }

    // :: () -> string
    toString() {
        if (Number.isInteger(this.real)) {
            return this.real + '.0'
        }
        return this.real.toString()
    }
}

class Str {
    // :: (string)
    constructor(str) {
        this.str = str
    }

    // :: () -> Sym
    type() {
        return new Sym('str')
    }

    // :: () -> false
    isNil() {
        return false
    }

    // :: () -> string
    value() {
        return this.str
    }

    // :: () -> non_neg_int
    length() {
        return this.str.length
    }

    // :: (Str) -> Str
    concat(that) {
        if (that instanceof Str) {
            return new Str(this.str + that.str)
        }
        throw new Error(`Not implemented (strcat ${this} ${that})`)
    }

    // :: (Int, Int) -> Str
    substring(start, length) {
        return new Str(this.str.substring(start, start + length))
    }

    // :: () -> Str
    toUpperCase() {
        return new Str(this.str.toUpperCase())
    }

    // :: () -> Str
    toLowerCase() {
        return new Str(this.str.toLowerCase())
    }

    // :: (Any) -> Bool
    equalTo(that) {
        return this.eq(that)
    }

    // :: (Any) -> Bool
    lessThan(that) {
        if (that instanceof Str) {
            return new Bool(this.str < that.str)
        }
        throwTypeError('<:', that, [Str])
    }

    // :: (Any) -> Bool
    eq(that) {
        return this.equal(that)
    }

    // :: (Any) -> Bool
    equal(that) {
        if (that instanceof Str) {
            return new Bool(this.str === that.str)
        }
        return new Bool(false)
    }

    // :: () -> string
    toUnescapedString()  {
        return this.str
    }

    // :: () -> string
    toString() {
        return `"${escape(this.str)}"`
    }
}

class Sym {
    // :: (string)
    constructor(sym) {
        this.sym = sym.toUpperCase()
    }

    // :: () -> Sym
    type() {
        return new Sym('sym')
    }

    // :: () -> false
    isNil() {
        return false
    }

    // :: () -> string
    value() {
        return this.sym
    }

    // :: (Any) -> Bool
    equalTo(that) {
        return this.eq(that)
    }

    // :: (Any) -> Bool
    eq(that) {
        return this.equal(that)
    }

    // :: (Any) -> Bool
    equal(that) {
        if (that instanceof Sym) {
            return new Bool(this.sym === that.sym)
        }
        return new Bool(false)
    }

    // :: () -> string
    toString() {
        return `${this.sym}`
    }
}

class List {
    // :: (Array)
    constructor(arr) {
        // TODO: who should make copy, see cdr
        this.arr = [...arr]
    }

    // :: () -> Sym
    type() {
        return new Sym('list')
    }

    // :: () -> true | false
    isNil() {
        return this.arr.length === 0
    }

    // :: () -> Array
    value() {
        return this.arr
    }

    // :: (Any) -> List
    cons(first) {
        return new List([first, ...this.arr])
    }

    // :: (List) -> Any | Nil
    car() {
        if (this.arr.length > 0) {
            return this.arr[0]
        }
        return new Bool(false)
    }

    // :: (List) -> List | Nil
    cdr() {
        if (this.arr.length > 0) {
            const [, ...rest] = this.arr
            return new List(rest)
        }
        return new Bool(false)
    }

    // :: () -> non_neg_int
    length() {
        return this.arr.length
    }

    // :: () -> Any
    last() {
        return this.arr[this.arr.length-1]
    }

    // :: (List) -> List
    concat(that) {
        if (that.isNil()) {
            return this
        }
        if (that instanceof List) {
            return new List(this.arr.concat(that.arr))
        }
        throw new Error(`Not implemented (append ${this} ${that})`)
    }

    // :: (Any) -> Bool
    equalTo(that) {
        return this.eq(that)
    }

    // :: (Any) -> Bool
    lessThan(that) {
        if (that instanceof List) {
            return new Bool(this.arr < that.arr)
        }
        throwTypeError('<:', that, [List])
    }

    // :: (Any) -> Bool
    eq(that) {
        if (that.isNil()) {
            return new Bool(this.isNil())
        }
        return new Bool(this === that)
    }

    // :: (List | Bool) -> Bool
    equal(that) {
        if (that instanceof List) {
            if (this.arr.length != that.arr.length) {
                return new Bool(false)
            }
            let result = new Bool(true)
            for (let i = 0; i < this.arr.length; i++) {
                result = result.and(this.arr[i].equal(that.arr[i]))
                if (result.isNil()) break
            }
            return result
        }
        if (that.isNil()) {
            return new Bool(this.isNil())
        }
        return new Bool(false)
    }

    // :: () -> string
    toString() {
        if (this.isNil()) {
            return NIL
        }
        const arr = this.arr.map(item => item.toString(true))
        return `(${arr.join(' ')})`
    }
}

class Pair {
    // :: (Any, Any)
    constructor(fst, snd) {
        this.fst = fst
        this.snd = snd
    }

    // :: () -> Sym
    type() {
        return new Sym('list')
    }

    // :: () -> false
    isNil() {
        return false
    }

    // :: (Any) -> List
    cons(first) {
        return new List([first, this])
    }

    // :: (Pair) -> Any
    car() {
        return this.fst
    }

    // :: (Pair) -> Any
    cdr() {
        return this.snd
    }

    // :: (Any) -> Bool
    equalTo(that) {
        return this.eq(that)
    }

    // :: (Any) -> Bool
    eq(that) {
        return new Bool(this === that)
    }

    // :: (Any) -> Bool
    equal(that) {
        if (that instanceof Pair) {
            return this.fst.equal(that.fst).and(this.snd.equal(that.snd))
        }
        return new Bool(false)
    }

    // :: () -> string
    toString(insideList) {
        if (insideList) {
            return `${this.fst} . ${this.snd}`
        } else {
            return `(${this.fst} . ${this.snd})`
        }
    }
}

class Fun {
    // :: (string, [string], [string], function)
    constructor(name, params, locals, fun) {
        this.name = name
        this.params = params
        this.locals = locals
        this.fun = fun
    }

    // :: () -> Sym
    type() {
        // TODO: subclass KFun (kernel) & UFun (user) and add 'usubr'
        return new Sym('subr')
    }

    // :: () -> false
    isNil() {
        return false
    }

    apply(evaluator, args) {
        return this.fun(evaluator, args)
    }

    // :: (Any) -> Bool
    equalTo(that) {
        return this.eq(that)
    }

    // :: (Any) -> Bool
    eq(that) {
        return new Bool(this === that)
    }

    // :: (Any) -> Bool
    equal(that) {
        if (that instanceof Fun) {
            return new Bool(this.toString() === that.toString())
        }
        return new Bool(false)
    }

    // :: () -> string
    toString() {
        let prefix
        if (this.name) {
            prefix = `defun ${this.name}`
        } else {
            prefix = 'lambda'
        }
        const params = this.params.join(' ')
        const locals = this.locals.join(' ')
        return `(${prefix} (${params}${locals.length > 0 ? ' / ' : ''}${locals}))`
    }
}

const FileStream = {
    STDIN: 'stdin',
    STDOUT: 'stdout',
    STDERR: 'stderr'
}

const FileMode = {
    READ: 'r',
    WRITE: 'w',
    APPEND: 'a'
}

const FileState = {
    OPEN: 'o',
    CLOSED: 'c'
}

class File {
    // :: (string, string, integer)
    /*private*/ constructor(name, mode, fd) {
        this.name = name
        this.mode = mode
        this.fd = fd
        this.state = FileState.OPEN
    }

    // :: (string, string) -> File
    static open(name, mode) {
        switch (name) {
        case FileStream.STDIN:
            switch (os.platform()) {
            case 'android':
            case 'linux':
                return new File(name, mode, fs.openSync('/dev/stdin', mode))
            default:
                return new File(name, mode, process.stdin.fd)
            }

        case FileStream.STDOUT:
            return new File(name, mode, process.stdout.fd)
        default:
            try {
                return new File(name, mode, fs.openSync(name, mode))
            } catch (e) {
                if (mode === FileMode.READ && e.errno === -os.constants.errno.ENOENT) {
                    return new Bool(false)
                }
                throw e
            }
        }
    }

    // :: () -> ()
    close() {
        if (this.state === FileState.CLOSED) {
            return new Bool(false)
        }
        switch (this.name) {
        case FileStream.STDIN:
            switch (os.platform()) {
            case 'android':
            case 'linux':
                fs.closeSync(this.fd)
                break
            default:
                break
            }
            break
        case FileStream.STDOUT:
            break
        default:
            fs.closeSync(this.fd)
            break
        }
        this.fd = -1
        this.state = FileState.CLOSED
        return new Bool(false)
    }

    // :: ({echo: bool}) -> Int
    readChar({echo = false} = {}) {
        if (this.state === FileState.CLOSED || this.mode !== FileMode.READ) {
            throw new Error(`read-char: bad file ${this}`)
        }
        const buf = Buffer.alloc(1)
        const len = fs.readSync(this.fd, buf, 0, 1)
        if (!len) {
            return new Bool(false)
        }
        if (echo) {
            fs.writeSync(process.stdout.fd, buf, 0, 1)
        }
        return new Int(buf[0])
    }

    // :: (Int) -> ()
    writeChar(num) {
        if (this.state === FileState.CLOSED || this.mode === FileMode.READ) {
            throw new Error(`write-char: bad file ${this}`)
        }
        const buf = Buffer.from([num.value()])
        fs.writeSync(this.fd, buf, 0, 1)
    }

    // :: ({eol: string, echo: bool}) -> Str
    readLine({eol = '\r\n', echo = false} = {}) {
        if (this.state === FileState.CLOSED || this.mode !== FileMode.READ) {
            throw new Error(`read-line: bad file ${this}`)
        }
        const stops = Array.from(eol).map(c => c.charCodeAt())
        let str = ''
        const buf = Buffer.alloc(1)
        for (;;) {
            const len = fs.readSync(this.fd, buf, 0, 1)
            //console.log(buf)
            if (!len) {
                if (!str) {
                    return new Bool(false)
                }
                break
            }
            str += buf.toString()

            if (find(buf[0], stops)) {
                break
            }
            if (echo) {
                fs.writeSync(process.stdout.fd, buf, 0, 1)
            }
        }
        if (echo) {
            fs.writeSync(process.stdout.fd, '\n')
        }
        // Trim end-of-line(s) from right
        while (str.length > 0 && find(str[str.length-1].charCodeAt(), stops)) {
            str = str.substr(0, str.length-1)
        }
        return new Str(str)
    }

    // :: (Str) -> ()
    write(str) {
        if (this.state === FileState.CLOSED || this.mode === FileMode.READ) {
            throw new Error(`write: bad file ${this}`)
        }
        const buf = Buffer.from(str.value())
        fs.writeSync(this.fd, buf, 0, buf.length)
    }

    // :: (Str) -> ()
    writeLine(str) {
        if (this.state === FileState.CLOSED || this.mode === FileMode.READ) {
            throw new Error(`write-line: bad file ${this}`)
        }
        this.write(str)
        this.write(new Str(os.EOL))
    }

    // :: () -> Sym
    type() {
        return new Sym('file')
    }

    // :: () -> false
    isNil() {
        return false
    }

    // :: (Any) -> Bool
    eq(that) {
        return new Bool(this === that)
    }

    // :: (Any) -> Bool
    equal(that) {
        if (that instanceof File) {
            return new Bool(this === that)
        }
        return new Bool(false)
    }

    // :: () -> string
    toString() {
        return `#<file "${this.name}" ${this.mode}:${this.state}>`
    }
}

function ensureType(prefix, argValue, argTypes) {
    for (const argType of argTypes) {
        if (argValue instanceof argType) {
            return argValue
        }
    }
    throwTypeError(prefix, argValue, argTypes)
}

function throwTypeError(prefix, argValue, argTypes) {
    const typeNames = argTypes.map(type => type.name).join(', ')
    throw new Error(
        `${prefix} expected ${typeNames}`//, but saw ${argValue.constructor.name}: ${argValue}`
    )
}

module.exports = {
    Bool,
    Int,
    Real,
    Str,
    Sym,
    List,
    Pair,
    Fun,
    FileStream,
    FileMode,
    File,
    ensureType,
    throwTypeError,
}
