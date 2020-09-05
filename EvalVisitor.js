import {AutoLISPParser} from './grammar/AutoLISPParser';
import {AutoLISPVisitor} from './grammar/AutoLISPVisitor';
import {Bool, Int, Real, Str, List} from './AutoLISPTypes';

export class EvalVisitor extends AutoLISPVisitor {
    constructor() {
        super();
        this.syms = {
            "1+": function (self, exprs) {
                let arg = self.getValue(self.visit(exprs[0]));
                return arg.add(new Int(1));
            },
            "1-": function (self, exprs) {
                let arg = self.getValue(self.visit(exprs[0]));
                return arg.subtract(new Int(1));
            }
        };
        this.vars = {};
    }

    visitMultiply(ctx) {
        if (ctx.expr().length == 0) {
            return new Int(0);
        }
        let result = new Int(1);
        //console.error('multiply:', result);
        for (let i = 0; i < ctx.expr().length; i++) {
            const arg = this.getValue(this.visit(ctx.expr(i)));
            //console.error('multiply:', arg);
            result = result.multiply(arg);
        }
        return result;
    }

    visitDivide(ctx) {
        if (ctx.expr().length == 0) {
            return new Int(0);
        }
        let result = this.getValue(this.visit(ctx.expr(0)));
        //console.error('divide:', result);
        for (let i = 1; i < ctx.expr().length; i++) {
            const arg = this.getValue(this.visit(ctx.expr(i)));
            //console.error('divide:', arg);
            result = result.divide(arg);
        }
        return result;
    }

    visitAdd(ctx) {
        let result = new Int(0);
        //console.error('add:', result);
        for (let i = 0; i < ctx.expr().length; i++) {
            const arg = this.getValue(this.visit(ctx.expr(i)));
            //console.error('add:', arg);
            result = result.add(arg);
        }
        return result;
    }
    
    visitSubtract(ctx) {
        if (ctx.expr().length == 0) {
            return new Int(0);
        }
        let result = this.getValue(this.visit(ctx.expr(0)));
        //console.error('subtract:', result);
        if (ctx.expr().length == 1) {
            return result.multiply(new Int(-1));
        }
        for (let i = 1; i < ctx.expr().length; i++) {
            const arg = this.getValue(this.visit(ctx.expr(i)));
            //console.error('subtract:', arg);
            result = result.subtract(arg);
        }
        return result;
    }

    visitEqualTo(ctx) {
        let result = new Bool(true);
        let val1 = this.getValue(this.visit(ctx.expr(0)));
        //console.error('equalTo:', val1);
        for (let i = 1; i < ctx.expr().length; i++) {
            const val2 = this.getValue(this.visit(ctx.expr(i)));
            //console.error('equalTo:', val2);
            result = val1.equalTo(val2);
            if (result.isFalsy()) break;
            val1 = val2;
        }
        return result;
    }

    visitNotEqualTo(ctx) {
        let result = new Bool(true);
        let val1 = this.getValue(this.visit(ctx.expr(0)));
        //console.error('notEqualTo:', val1);
        for (let i = 1; i < ctx.expr().length; i++) {
            const val2 = this.getValue(this.visit(ctx.expr(i)));
            //console.error('notEqualTo:', val2);
            result = val1.equalTo(val2).not();
            if (result.isFalsy()) break;
            val1 = val2;
        }
        return result;
    }

    visitLessThan(ctx) {
        let result = new Bool(true);
        let val1 = this.getValue(this.visit(ctx.expr(0)));
        //console.error('lessThan:', val1);
        for (let i = 1; i < ctx.expr().length; i++) {
            const val2 = this.getValue(this.visit(ctx.expr(i)));
            //console.error('lessThan:', val2);
            result = val1.lessThan(val2);
            if (result.isFalsy()) break;
            val1 = val2;
        }
        return result;
    }

    visitLessThanOrEqualTo(ctx) {
        let result = new Bool(true);
        let val1 = this.getValue(this.visit(ctx.expr(0)));
        //console.error('lessThanOrEqualTo:', val1);
        for (let i = 1; i < ctx.expr().length; i++) {
            const val2 = this.getValue(this.visit(ctx.expr(i)));
            //console.error('lessThanOrEqualTo:', val2);
            result = val1.lessThan(val2).or(val1.equalTo(val2));
            if (result.isFalsy()) break;
            val1 = val2;
        }
        return result;
    }

    visitGreaterThan(ctx) {
        let result = new Bool(true);
        let val1 = this.getValue(this.visit(ctx.expr(0)));
        //console.error('greaterThan:', val1);
        for (let i = 1; i < ctx.expr().length; i++) {
            const val2 = this.getValue(this.visit(ctx.expr(i)));
            //console.error('greaterThan:', val2);
            result = val1.lessThan(val2).or(val1.equalTo(val2)).not();
            if (result.isFalsy()) break;
            val1 = val2;
        }
        return result;
    }

    visitGreaterThanOrEqualTo(ctx) {
        let result = new Bool(true);
        let val1 = this.getValue(this.visit(ctx.expr(0)));
        //console.error('greaterThanOrEqualTo:', val1);
        for (let i = 1; i < ctx.expr().length; i++) {
            const val2 = this.getValue(this.visit(ctx.expr(i)));
            //console.error('greaterThanOrEqualTo:', val2);
            result = val1.lessThan(val2).not();
            if (result.isFalsy()) break;
            val1 = val2;
        }
        return result;
    }

    visitBitwiseNOT(ctx) {
        return this.getValue(this.visit(ctx.expr())).bitwiseNot();
    }

    visitList(ctx) {
        let result = [];
        for (let i = 0; i < ctx.expr().length; i++) {
            const val = this.getValue(this.visit(ctx.expr(i)));
            result.push(val);
        }
        return new List(result);
    }

    visitCar(ctx) {
        let list = this.getValue(this.visit(ctx.expr()));
        return list.car();
    }

    visitCdr(ctx) {
        let list = this.getValue(this.visit(ctx.expr()));
        return list.cdr();
    }

    visitCond(ctx) {
        let result = new Bool(false);
        for (let i = 0; i < ctx.testresult().length; i++) {
            const test = this.getValue(this.visit(ctx.testresult(i).testexpr()));
            //console.error('cond test:', test);
            if (test.isTruthy()) {
                result = this.visit(ctx.testresult(i).resultexpr());
                break;
            }
        }
        return result;
    }

    visitDefun(ctx) {
        let name = this.visit(ctx.ID(0));
        console.error(`(defun ${name} ...)`);
        let params = [];
        for (let i = 1; i < ctx.ID().length; i++) {
            params.push(this.visit(ctx.ID(i)));
        }
        this.syms[name] = function (self, args) {
            if (args.length < params.length) {
                throw new Error(`${name}: too few arguments`);
            } else if (args.length > params.length) {
                throw new Error(`${name}: too many arguments`);
            }
            let result = new Bool(false);
            for (let i = 0; i < ctx.expr().length; i++) {
                result = self.visit(ctx.expr(i));
            }
            return result;
        }
        return name; // TODO: new Sym(name)?
    }

    visitIf(ctx) {
        const test = this.getValue(this.visit(ctx.testexpr()));
        //console.error('if test:', test);
        if (test.isTruthy()) {
            return this.visit(ctx.thenexpr());
        } else {
            if (ctx.elseexpr()) {
                return this.visit(ctx.elseexpr());
            } else {
                return new Bool(false);
            }
        }
    }

    visitRepeat(ctx) {
        let result = new Bool(false);
        let count = this.getValue(this.visit(ctx.numexpr()));
        //console.error('repeat count:', count);
        if (count instanceof Int && count.value() > 0) {
            for (let i = 0; i < count.value(); i++) {
                for (let j = 0; j < ctx.expr().length; j++) {
                    result = this.visit(ctx.expr(j));
                }
            }
        } else {
            throw new Error(`repeat: num expected to be positive integer, but saw ${count}`);
        }
        return result;
    }

    visitSetQ(ctx) {
        // TODO: no args
        let value;
        for (let i = 0; i < ctx.idexpr().length; i++) {
            const id = this.getValue(this.visit(ctx.idexpr(i).ID()));
            value = this.getValue(this.visit(ctx.idexpr(i).expr()));
            //console.error(`setq ${key} = ${val}`);
            this.vars[id] = value;
        }
        return value;
    }

    visitWhile(ctx) {
        let result = new Bool(false);
        while (true) {
            const test = this.getValue(this.visit(ctx.testexpr()));
            //console.error('while test:', test);
            if (test.isTruthy()) {
                for (let i = 0; i < ctx.expr().length; i++) {
                    result = this.visit(ctx.expr(i));
                }
            } else {
                break;
            }
        }
        return result;
    }

    visitPrinc(ctx) {
        let expr = this.getValue(this.visit(ctx.expr()));
        console.log('princ:', expr.toString());
        return expr;
    }

    visitFunCall(ctx) {
        //let id = this.getValue(this.visit(ctx.funexpr()));
        let name = this.visit(ctx.ID());
        console.error(`(${name} ...)`);
        const fun = this.syms[name];
        if (fun) {
            let args = [];
            for (let i = 0; i < ctx.argexpr().length; i++) {
                args.push(ctx.argexpr(i));
            }
            //console.error(`(${id} ${args.join(' ')})`);
            return fun(this, args);
        }
        throw new Error(`unknown function ${name}`);
    }

    visitTerminal(ctx) {
        const str = ctx.getText();
        if (ctx.parentCtx instanceof AutoLISPParser.NilContext) {
            //console.error('NIL:', str);
            return new Bool(false);
        } else if (ctx.parentCtx instanceof AutoLISPParser.TContext) {
            //console.error('T:', str);
            return new Bool(true);
        } else if (ctx.parentCtx instanceof AutoLISPParser.IntContext) {
            //console.error('INT:', str);
            return new Int(Number.parseInt(str));
        } else if (ctx.parentCtx instanceof AutoLISPParser.RealContext) {
            //console.error('REAL:', str);
            return new Real(Number.parseFloat(str));
        } else if (ctx.parentCtx instanceof AutoLISPParser.StrContext) {
            //console.error('STR:', str);
            return new Str(str.replace(/\"/g, ''));
        } else if (ctx.parentCtx instanceof AutoLISPParser.IdContext) {
            //console.error('ID:', str);
            return this.vars[str];
        } else {
            // Also handles ID outside of expr
            //console.error('TERMINAL:', str);
            //console.error(ctx);
            return str;
        }
    }

    getValue(expr) {
        if (expr instanceof Array) {
            return this.getValue(expr[0]);
        }
        return expr;        
    }
}
