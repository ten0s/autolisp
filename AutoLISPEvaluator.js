import antlr4 from 'antlr4';
import {AutoLISPLexer} from './grammar/AutoLISPLexer.js';
import {AutoLISPParser} from './grammar/AutoLISPParser.js';
import {EvalVisitor} from './EvalVisitor.js';

//const input = '(princ 2)'; // 2
//const input = '(princ 2.0)'; // 2.0
//const input = '(princ "2.0")'; // 2.0
//const input = '(princ (= 1 1))'; // T
//const input = '(princ (= 0 1))'; // nil

const input = '(defun 1+ (num) (+ 1 1)) (1+)';
//const input = '(defun foo () "foo") (foo)';
//const input = '(1+ 1)';

export function evaluate(input) {
    const chars = new antlr4.InputStream(input);
    const lexer = new AutoLISPLexer(chars);
    // Don't use JavaScript strictMode
    //lexer.strictMode = false;
    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new AutoLISPParser(tokens);
    //parser.buildParseTrees = true;
    const tree = parser.file();
    const results = tree.accept(new EvalVisitor());
    //console.log(results);
    const result = getResult(results);
    //console.log(result);
    return result;
}

function getResult(res) {
    if (res instanceof Array) {
        return getResult(res[res.length-1]);
    } else {
        return res;
    }
}

//evaluate(input);
