// Generated from grammar/VeDcl.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');



var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002\u0010\u0092\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010",
    "\t\u0010\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013",
    "\u0004\u0014\t\u0014\u0004\u0015\t\u0015\u0003\u0002\u0003\u0002\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0006\u0003",
    "\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\t\u0003\t\u0003",
    "\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\n\u0003\n\u0003",
    "\u000b\u0003\u000b\u0007\u000bT\n\u000b\f\u000b\u000e\u000bW\u000b\u000b",
    "\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003",
    "\f\u0003\f\u0003\f\u0003\f\u0005\fd\n\f\u0003\r\u0006\rg\n\r\r\r\u000e",
    "\rh\u0003\r\u0003\r\u0003\r\u0007\rn\n\r\f\r\u000e\rq\u000b\r\u0003",
    "\u000e\u0005\u000et\n\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003",
    "\u000e\u0003\u000f\u0006\u000f{\n\u000f\r\u000f\u000e\u000f|\u0003\u000f",
    "\u0003\u000f\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0005\u0010",
    "\u0085\n\u0010\u0003\u0011\u0003\u0011\u0003\u0012\u0003\u0012\u0005",
    "\u0012\u008b\n\u0012\u0003\u0013\u0003\u0013\u0003\u0014\u0003\u0014",
    "\u0003\u0015\u0003\u0015\u0002\u0002\u0016\u0003\u0003\u0005\u0004\u0007",
    "\u0005\t\u0006\u000b\u0007\r\b\u000f\t\u0011\n\u0013\u000b\u0015\f\u0017",
    "\r\u0019\u000e\u001b\u000f\u001d\u0010\u001f\u0002!\u0002#\u0002%\u0002",
    "\'\u0002)\u0002\u0003\u0002\b\u0004\u0002\u000b\u000b\"\"\u0006\u0002",
    "\f\f\u000f\u000f$$^^\u0007\u0002$$^^ppttvv\u0003\u0002c|\u0003\u0002",
    "C\\\u0003\u00022;\u0002\u0096\u0002\u0003\u0003\u0002\u0002\u0002\u0002",
    "\u0005\u0003\u0002\u0002\u0002\u0002\u0007\u0003\u0002\u0002\u0002\u0002",
    "\t\u0003\u0002\u0002\u0002\u0002\u000b\u0003\u0002\u0002\u0002\u0002",
    "\r\u0003\u0002\u0002\u0002\u0002\u000f\u0003\u0002\u0002\u0002\u0002",
    "\u0011\u0003\u0002\u0002\u0002\u0002\u0013\u0003\u0002\u0002\u0002\u0002",
    "\u0015\u0003\u0002\u0002\u0002\u0002\u0017\u0003\u0002\u0002\u0002\u0002",
    "\u0019\u0003\u0002\u0002\u0002\u0002\u001b\u0003\u0002\u0002\u0002\u0002",
    "\u001d\u0003\u0002\u0002\u0002\u0003+\u0003\u0002\u0002\u0002\u0005",
    "-\u0003\u0002\u0002\u0002\u00074\u0003\u0002\u0002\u0002\t6\u0003\u0002",
    "\u0002\u0002\u000b8\u0003\u0002\u0002\u0002\r:\u0003\u0002\u0002\u0002",
    "\u000f?\u0003\u0002\u0002\u0002\u0011F\u0003\u0002\u0002\u0002\u0013",
    "O\u0003\u0002\u0002\u0002\u0015Q\u0003\u0002\u0002\u0002\u0017c\u0003",
    "\u0002\u0002\u0002\u0019f\u0003\u0002\u0002\u0002\u001bs\u0003\u0002",
    "\u0002\u0002\u001dz\u0003\u0002\u0002\u0002\u001f\u0084\u0003\u0002",
    "\u0002\u0002!\u0086\u0003\u0002\u0002\u0002#\u008a\u0003\u0002\u0002",
    "\u0002%\u008c\u0003\u0002\u0002\u0002\'\u008e\u0003\u0002\u0002\u0002",
    ")\u0090\u0003\u0002\u0002\u0002+,\u0007<\u0002\u0002,\u0004\u0003\u0002",
    "\u0002\u0002-.\u0007f\u0002\u0002./\u0007k\u0002\u0002/0\u0007c\u0002",
    "\u000201\u0007n\u0002\u000212\u0007q\u0002\u000223\u0007i\u0002\u0002",
    "3\u0006\u0003\u0002\u0002\u000245\u0007}\u0002\u00025\b\u0003\u0002",
    "\u0002\u000267\u0007\u007f\u0002\u00027\n\u0003\u0002\u0002\u000289",
    "\u0007=\u0002\u00029\f\u0003\u0002\u0002\u0002:;\u0007v\u0002\u0002",
    ";<\u0007g\u0002\u0002<=\u0007z\u0002\u0002=>\u0007v\u0002\u0002>\u000e",
    "\u0003\u0002\u0002\u0002?@\u0007d\u0002\u0002@A\u0007w\u0002\u0002A",
    "B\u0007v\u0002\u0002BC\u0007v\u0002\u0002CD\u0007q\u0002\u0002DE\u0007",
    "p\u0002\u0002E\u0010\u0003\u0002\u0002\u0002FG\u0007g\u0002\u0002GH",
    "\u0007f\u0002\u0002HI\u0007k\u0002\u0002IJ\u0007v\u0002\u0002JK\u0007",
    "a\u0002\u0002KL\u0007d\u0002\u0002LM\u0007q\u0002\u0002MN\u0007z\u0002",
    "\u0002N\u0012\u0003\u0002\u0002\u0002OP\u0007?\u0002\u0002P\u0014\u0003",
    "\u0002\u0002\u0002QU\u0007$\u0002\u0002RT\u0005\u001f\u0010\u0002SR",
    "\u0003\u0002\u0002\u0002TW\u0003\u0002\u0002\u0002US\u0003\u0002\u0002",
    "\u0002UV\u0003\u0002\u0002\u0002VX\u0003\u0002\u0002\u0002WU\u0003\u0002",
    "\u0002\u0002XY\u0007$\u0002\u0002Y\u0016\u0003\u0002\u0002\u0002Z[\u0007",
    "v\u0002\u0002[\\\u0007t\u0002\u0002\\]\u0007w\u0002\u0002]d\u0007g\u0002",
    "\u0002^_\u0007h\u0002\u0002_`\u0007c\u0002\u0002`a\u0007n\u0002\u0002",
    "ab\u0007u\u0002\u0002bd\u0007g\u0002\u0002cZ\u0003\u0002\u0002\u0002",
    "c^\u0003\u0002\u0002\u0002d\u0018\u0003\u0002\u0002\u0002eg\u0005#\u0012",
    "\u0002fe\u0003\u0002\u0002\u0002gh\u0003\u0002\u0002\u0002hf\u0003\u0002",
    "\u0002\u0002hi\u0003\u0002\u0002\u0002io\u0003\u0002\u0002\u0002jn\u0005",
    ")\u0015\u0002kn\u0005#\u0012\u0002ln\u0007a\u0002\u0002mj\u0003\u0002",
    "\u0002\u0002mk\u0003\u0002\u0002\u0002ml\u0003\u0002\u0002\u0002nq\u0003",
    "\u0002\u0002\u0002om\u0003\u0002\u0002\u0002op\u0003\u0002\u0002\u0002",
    "p\u001a\u0003\u0002\u0002\u0002qo\u0003\u0002\u0002\u0002rt\u0007\u000f",
    "\u0002\u0002sr\u0003\u0002\u0002\u0002st\u0003\u0002\u0002\u0002tu\u0003",
    "\u0002\u0002\u0002uv\u0007\f\u0002\u0002vw\u0003\u0002\u0002\u0002w",
    "x\b\u000e\u0002\u0002x\u001c\u0003\u0002\u0002\u0002y{\t\u0002\u0002",
    "\u0002zy\u0003\u0002\u0002\u0002{|\u0003\u0002\u0002\u0002|z\u0003\u0002",
    "\u0002\u0002|}\u0003\u0002\u0002\u0002}~\u0003\u0002\u0002\u0002~\u007f",
    "\b\u000f\u0002\u0002\u007f\u001e\u0003\u0002\u0002\u0002\u0080\u0085",
    "\n\u0003\u0002\u0002\u0081\u0082\u0007^\u0002\u0002\u0082\u0085\u0005",
    "!\u0011\u0002\u0083\u0085\u0005\u001b\u000e\u0002\u0084\u0080\u0003",
    "\u0002\u0002\u0002\u0084\u0081\u0003\u0002\u0002\u0002\u0084\u0083\u0003",
    "\u0002\u0002\u0002\u0085 \u0003\u0002\u0002\u0002\u0086\u0087\t\u0004",
    "\u0002\u0002\u0087\"\u0003\u0002\u0002\u0002\u0088\u008b\u0005%\u0013",
    "\u0002\u0089\u008b\u0005\'\u0014\u0002\u008a\u0088\u0003\u0002\u0002",
    "\u0002\u008a\u0089\u0003\u0002\u0002\u0002\u008b$\u0003\u0002\u0002",
    "\u0002\u008c\u008d\t\u0005\u0002\u0002\u008d&\u0003\u0002\u0002\u0002",
    "\u008e\u008f\t\u0006\u0002\u0002\u008f(\u0003\u0002\u0002\u0002\u0090",
    "\u0091\t\u0007\u0002\u0002\u0091*\u0003\u0002\u0002\u0002\f\u0002Uc",
    "hmos|\u0084\u008a\u0003\b\u0002\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function VeDclLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

VeDclLexer.prototype = Object.create(antlr4.Lexer.prototype);
VeDclLexer.prototype.constructor = VeDclLexer;

Object.defineProperty(VeDclLexer.prototype, "atn", {
        get : function() {
                return atn;
        }
});

VeDclLexer.EOF = antlr4.Token.EOF;
VeDclLexer.T__0 = 1;
VeDclLexer.T__1 = 2;
VeDclLexer.T__2 = 3;
VeDclLexer.T__3 = 4;
VeDclLexer.T__4 = 5;
VeDclLexer.T__5 = 6;
VeDclLexer.T__6 = 7;
VeDclLexer.T__7 = 8;
VeDclLexer.T__8 = 9;
VeDclLexer.STRING = 10;
VeDclLexer.BOOL = 11;
VeDclLexer.ID = 12;
VeDclLexer.NEWLINE = 13;
VeDclLexer.WHITESPACE = 14;

VeDclLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

VeDclLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

VeDclLexer.prototype.literalNames = [ null, "':'", "'dialog'", "'{'", "'}'", 
                                      "';'", "'text'", "'button'", "'edit_box'", 
                                      "'='" ];

VeDclLexer.prototype.symbolicNames = [ null, null, null, null, null, null, 
                                       null, null, null, null, "STRING", 
                                       "BOOL", "ID", "NEWLINE", "WHITESPACE" ];

VeDclLexer.prototype.ruleNames = [ "T__0", "T__1", "T__2", "T__3", "T__4", 
                                   "T__5", "T__6", "T__7", "T__8", "STRING", 
                                   "BOOL", "ID", "NEWLINE", "WHITESPACE", 
                                   "CHAR", "ESCAPE_SEQ", "LETTER", "LOWER_LETTER", 
                                   "UPPER_LETTER", "DIGIT" ];

VeDclLexer.prototype.grammarFileName = "VeDcl.g4";


exports.VeDclLexer = VeDclLexer;

