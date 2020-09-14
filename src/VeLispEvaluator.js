const antlr4 = require('antlr4');
const {VeLispLexer} = require('../grammar/VeLispLexer.js');
const {VeLispParser} = require('../grammar/VeLispParser.js');
const {Context} = require('./VeLispContext.js');
const {EvalVisitor} = require('./VeLispEvalVisitor.js');
const Kernel = require('./kernel/Kernel.js');

//const input = '(princ 2)'; // 2
//const input = '(princ 2.0)'; // 2.0
//const input = '(princ "2.0")'; // 2.0
//const input = '(princ (= 1 1))'; // T
//const input = '(princ (= 0 1))'; // nil
//const input = '(princ \'foo)'; // foo

function evaluate(input) {
    const chars = new antlr4.InputStream(input);
    const lexer = new VeLispLexer(chars);
    // Don't use JavaScript strictMode
    //lexer.strictMode = false;
    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new VeLispParser(tokens);
    //parser.buildParseTrees = true;
    const tree = parser.file();
    const globalContext = new Context();
    Kernel.addTo(globalContext);
    const results = tree.accept(new EvalVisitor(globalContext));
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

exports.evaluate = evaluate;