// Generated from grammar/VeDcl.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');



var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002&\u01d1\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010",
    "\t\u0010\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013",
    "\u0004\u0014\t\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017",
    "\t\u0017\u0004\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a",
    "\u0004\u001b\t\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e",
    "\t\u001e\u0004\u001f\t\u001f\u0004 \t \u0004!\t!\u0004\"\t\"\u0004#",
    "\t#\u0004$\t$\u0004%\t%\u0004&\t&\u0004\'\t\'\u0004(\t(\u0004)\t)\u0004",
    "*\t*\u0004+\t+\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003",
    "\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0003",
    "\u0003\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0006\u0003",
    "\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0003\b\u0003\b\u0003\b\u0003\b\u0003\t\u0003\t\u0003",
    "\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\n\u0003\n\u0003\n\u0003\n\u0003",
    "\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003",
    "\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003",
    "\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\f\u0003",
    "\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003",
    "\f\u0003\f\u0003\f\u0003\f\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003",
    "\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\u000e\u0003\u000e\u0003\u000e",
    "\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e",
    "\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000f\u0003\u000f",
    "\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f",
    "\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f",
    "\u0003\u000f\u0003\u000f\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010",
    "\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010",
    "\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010",
    "\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0011\u0003\u0011\u0003\u0011",
    "\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0012\u0003\u0012",
    "\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012",
    "\u0003\u0012\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013",
    "\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0014\u0003\u0014",
    "\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014",
    "\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0015\u0003\u0015\u0003\u0015",
    "\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015",
    "\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0016\u0003\u0016",
    "\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0017",
    "\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017",
    "\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0019",
    "\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u0019",
    "\u0003\u001a\u0003\u001a\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b",
    "\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0005\u001b",
    "\u0130\n\u001b\u0003\u001c\u0005\u001c\u0133\n\u001c\u0003\u001c\u0006",
    "\u001c\u0136\n\u001c\r\u001c\u000e\u001c\u0137\u0003\u001d\u0005\u001d",
    "\u013b\n\u001d\u0003\u001d\u0006\u001d\u013e\n\u001d\r\u001d\u000e\u001d",
    "\u013f\u0003\u001d\u0003\u001d\u0006\u001d\u0144\n\u001d\r\u001d\u000e",
    "\u001d\u0145\u0003\u001e\u0003\u001e\u0007\u001e\u014a\n\u001e\f\u001e",
    "\u000e\u001e\u014d\u000b\u001e\u0003\u001e\u0003\u001e\u0003\u001f\u0003",
    "\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003",
    "\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003",
    "\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003",
    "\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003",
    "\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003",
    "\u001f\u0005\u001f\u0171\n\u001f\u0003 \u0003 \u0003 \u0003 \u0003 ",
    "\u0003 \u0003 \u0003 \u0003 \u0003 \u0003 \u0003 \u0003 \u0003 \u0003",
    " \u0003 \u0003 \u0003 \u0005 \u0185\n \u0003!\u0006!\u0188\n!\r!\u000e",
    "!\u0189\u0003!\u0003!\u0003!\u0007!\u018f\n!\f!\u000e!\u0192\u000b!",
    "\u0003\"\u0003\"\u0003\"\u0003\"\u0007\"\u0198\n\"\f\"\u000e\"\u019b",
    "\u000b\"\u0003\"\u0003\"\u0003\"\u0003\"\u0003\"\u0003#\u0003#\u0006",
    "#\u01a4\n#\r#\u000e#\u01a5\u0003#\u0007#\u01a9\n#\f#\u000e#\u01ac\u000b",
    "#\u0003#\u0003#\u0003#\u0003#\u0003$\u0005$\u01b3\n$\u0003$\u0003$\u0003",
    "$\u0003$\u0003%\u0006%\u01ba\n%\r%\u000e%\u01bb\u0003%\u0003%\u0003",
    "&\u0003&\u0003&\u0003&\u0005&\u01c4\n&\u0003\'\u0003\'\u0003(\u0003",
    "(\u0005(\u01ca\n(\u0003)\u0003)\u0003*\u0003*\u0003+\u0003+\u0004\u0199",
    "\u01aa\u0002,\u0003\u0003\u0005\u0004\u0007\u0005\t\u0006\u000b\u0007",
    "\r\b\u000f\t\u0011\n\u0013\u000b\u0015\f\u0017\r\u0019\u000e\u001b\u000f",
    "\u001d\u0010\u001f\u0011!\u0012#\u0013%\u0014\'\u0015)\u0016+\u0017",
    "-\u0018/\u00191\u001a3\u001b5\u001c7\u001d9\u001e;\u001f= ?!A\"C#E$",
    "G%I&K\u0002M\u0002O\u0002Q\u0002S\u0002U\u0002\u0003\u0002\b\u0004\u0002",
    "\u000b\u000b\"\"\u0006\u0002\f\f\u000f\u000f$$^^\u0007\u0002$$^^ppt",
    "tvv\u0003\u0002c|\u0003\u0002C\\\u0003\u00022;\u0002\u01e3\u0002\u0003",
    "\u0003\u0002\u0002\u0002\u0002\u0005\u0003\u0002\u0002\u0002\u0002\u0007",
    "\u0003\u0002\u0002\u0002\u0002\t\u0003\u0002\u0002\u0002\u0002\u000b",
    "\u0003\u0002\u0002\u0002\u0002\r\u0003\u0002\u0002\u0002\u0002\u000f",
    "\u0003\u0002\u0002\u0002\u0002\u0011\u0003\u0002\u0002\u0002\u0002\u0013",
    "\u0003\u0002\u0002\u0002\u0002\u0015\u0003\u0002\u0002\u0002\u0002\u0017",
    "\u0003\u0002\u0002\u0002\u0002\u0019\u0003\u0002\u0002\u0002\u0002\u001b",
    "\u0003\u0002\u0002\u0002\u0002\u001d\u0003\u0002\u0002\u0002\u0002\u001f",
    "\u0003\u0002\u0002\u0002\u0002!\u0003\u0002\u0002\u0002\u0002#\u0003",
    "\u0002\u0002\u0002\u0002%\u0003\u0002\u0002\u0002\u0002\'\u0003\u0002",
    "\u0002\u0002\u0002)\u0003\u0002\u0002\u0002\u0002+\u0003\u0002\u0002",
    "\u0002\u0002-\u0003\u0002\u0002\u0002\u0002/\u0003\u0002\u0002\u0002",
    "\u00021\u0003\u0002\u0002\u0002\u00023\u0003\u0002\u0002\u0002\u0002",
    "5\u0003\u0002\u0002\u0002\u00027\u0003\u0002\u0002\u0002\u00029\u0003",
    "\u0002\u0002\u0002\u0002;\u0003\u0002\u0002\u0002\u0002=\u0003\u0002",
    "\u0002\u0002\u0002?\u0003\u0002\u0002\u0002\u0002A\u0003\u0002\u0002",
    "\u0002\u0002C\u0003\u0002\u0002\u0002\u0002E\u0003\u0002\u0002\u0002",
    "\u0002G\u0003\u0002\u0002\u0002\u0002I\u0003\u0002\u0002\u0002\u0003",
    "W\u0003\u0002\u0002\u0002\u0005`\u0003\u0002\u0002\u0002\u0007b\u0003",
    "\u0002\u0002\u0002\td\u0003\u0002\u0002\u0002\u000bf\u0003\u0002\u0002",
    "\u0002\rh\u0003\u0002\u0002\u0002\u000fo\u0003\u0002\u0002\u0002\u0011",
    "s\u0003\u0002\u0002\u0002\u0013z\u0003\u0002\u0002\u0002\u0015\u0084",
    "\u0003\u0002\u0002\u0002\u0017\u0091\u0003\u0002\u0002\u0002\u0019\u009f",
    "\u0003\u0002\u0002\u0002\u001b\u00a9\u0003\u0002\u0002\u0002\u001d\u00b6",
    "\u0003\u0002\u0002\u0002\u001f\u00c6\u0003\u0002\u0002\u0002!\u00d9",
    "\u0003\u0002\u0002\u0002#\u00e0\u0003\u0002\u0002\u0002%\u00e9\u0003",
    "\u0002\u0002\u0002\'\u00f2\u0003\u0002\u0002\u0002)\u00fd\u0003\u0002",
    "\u0002\u0002+\u010a\u0003\u0002\u0002\u0002-\u0111\u0003\u0002\u0002",
    "\u0002/\u0118\u0003\u0002\u0002\u00021\u011d\u0003\u0002\u0002\u0002",
    "3\u0124\u0003\u0002\u0002\u00025\u012f\u0003\u0002\u0002\u00027\u0132",
    "\u0003\u0002\u0002\u00029\u013a\u0003\u0002\u0002\u0002;\u0147\u0003",
    "\u0002\u0002\u0002=\u0170\u0003\u0002\u0002\u0002?\u0184\u0003\u0002",
    "\u0002\u0002A\u0187\u0003\u0002\u0002\u0002C\u0193\u0003\u0002\u0002",
    "\u0002E\u01a3\u0003\u0002\u0002\u0002G\u01b2\u0003\u0002\u0002\u0002",
    "I\u01b9\u0003\u0002\u0002\u0002K\u01c3\u0003\u0002\u0002\u0002M\u01c5",
    "\u0003\u0002\u0002\u0002O\u01c9\u0003\u0002\u0002\u0002Q\u01cb\u0003",
    "\u0002\u0002\u0002S\u01cd\u0003\u0002\u0002\u0002U\u01cf\u0003\u0002",
    "\u0002\u0002WX\u0007B\u0002\u0002XY\u0007k\u0002\u0002YZ\u0007p\u0002",
    "\u0002Z[\u0007e\u0002\u0002[\\\u0007n\u0002\u0002\\]\u0007w\u0002\u0002",
    "]^\u0007f\u0002\u0002^_\u0007g\u0002\u0002_\u0004\u0003\u0002\u0002",
    "\u0002`a\u0007=\u0002\u0002a\u0006\u0003\u0002\u0002\u0002bc\u0007<",
    "\u0002\u0002c\b\u0003\u0002\u0002\u0002de\u0007}\u0002\u0002e\n\u0003",
    "\u0002\u0002\u0002fg\u0007\u007f\u0002\u0002g\f\u0003\u0002\u0002\u0002",
    "hi\u0007f\u0002\u0002ij\u0007k\u0002\u0002jk\u0007c\u0002\u0002kl\u0007",
    "n\u0002\u0002lm\u0007q\u0002\u0002mn\u0007i\u0002\u0002n\u000e\u0003",
    "\u0002\u0002\u0002op\u0007t\u0002\u0002pq\u0007q\u0002\u0002qr\u0007",
    "y\u0002\u0002r\u0010\u0003\u0002\u0002\u0002st\u0007e\u0002\u0002tu",
    "\u0007q\u0002\u0002uv\u0007n\u0002\u0002vw\u0007w\u0002\u0002wx\u0007",
    "o\u0002\u0002xy\u0007p\u0002\u0002y\u0012\u0003\u0002\u0002\u0002z{",
    "\u0007d\u0002\u0002{|\u0007q\u0002\u0002|}\u0007z\u0002\u0002}~\u0007",
    "g\u0002\u0002~\u007f\u0007f\u0002\u0002\u007f\u0080\u0007a\u0002\u0002",
    "\u0080\u0081\u0007t\u0002\u0002\u0081\u0082\u0007q\u0002\u0002\u0082",
    "\u0083\u0007y\u0002\u0002\u0083\u0014\u0003\u0002\u0002\u0002\u0084",
    "\u0085\u0007d\u0002\u0002\u0085\u0086\u0007q\u0002\u0002\u0086\u0087",
    "\u0007z\u0002\u0002\u0087\u0088\u0007g\u0002\u0002\u0088\u0089\u0007",
    "f\u0002\u0002\u0089\u008a\u0007a\u0002\u0002\u008a\u008b\u0007e\u0002",
    "\u0002\u008b\u008c\u0007q\u0002\u0002\u008c\u008d\u0007n\u0002\u0002",
    "\u008d\u008e\u0007w\u0002\u0002\u008e\u008f\u0007o\u0002\u0002\u008f",
    "\u0090\u0007p\u0002\u0002\u0090\u0016\u0003\u0002\u0002\u0002\u0091",
    "\u0092\u0007e\u0002\u0002\u0092\u0093\u0007q\u0002\u0002\u0093\u0094",
    "\u0007p\u0002\u0002\u0094\u0095\u0007e\u0002\u0002\u0095\u0096\u0007",
    "c\u0002\u0002\u0096\u0097\u0007v\u0002\u0002\u0097\u0098\u0007g\u0002",
    "\u0002\u0098\u0099\u0007p\u0002\u0002\u0099\u009a\u0007c\u0002\u0002",
    "\u009a\u009b\u0007v\u0002\u0002\u009b\u009c\u0007k\u0002\u0002\u009c",
    "\u009d\u0007q\u0002\u0002\u009d\u009e\u0007p\u0002\u0002\u009e\u0018",
    "\u0003\u0002\u0002\u0002\u009f\u00a0\u0007t\u0002\u0002\u00a0\u00a1",
    "\u0007c\u0002\u0002\u00a1\u00a2\u0007f\u0002\u0002\u00a2\u00a3\u0007",
    "k\u0002\u0002\u00a3\u00a4\u0007q\u0002\u0002\u00a4\u00a5\u0007a\u0002",
    "\u0002\u00a5\u00a6\u0007t\u0002\u0002\u00a6\u00a7\u0007q\u0002\u0002",
    "\u00a7\u00a8\u0007y\u0002\u0002\u00a8\u001a\u0003\u0002\u0002\u0002",
    "\u00a9\u00aa\u0007t\u0002\u0002\u00aa\u00ab\u0007c\u0002\u0002\u00ab",
    "\u00ac\u0007f\u0002\u0002\u00ac\u00ad\u0007k\u0002\u0002\u00ad\u00ae",
    "\u0007q\u0002\u0002\u00ae\u00af\u0007a\u0002\u0002\u00af\u00b0\u0007",
    "e\u0002\u0002\u00b0\u00b1\u0007q\u0002\u0002\u00b1\u00b2\u0007n\u0002",
    "\u0002\u00b2\u00b3\u0007w\u0002\u0002\u00b3\u00b4\u0007o\u0002\u0002",
    "\u00b4\u00b5\u0007p\u0002\u0002\u00b5\u001c\u0003\u0002\u0002\u0002",
    "\u00b6\u00b7\u0007d\u0002\u0002\u00b7\u00b8\u0007q\u0002\u0002\u00b8",
    "\u00b9\u0007z\u0002\u0002\u00b9\u00ba\u0007g\u0002\u0002\u00ba\u00bb",
    "\u0007f\u0002\u0002\u00bb\u00bc\u0007a\u0002\u0002\u00bc\u00bd\u0007",
    "t\u0002\u0002\u00bd\u00be\u0007c\u0002\u0002\u00be\u00bf\u0007f\u0002",
    "\u0002\u00bf\u00c0\u0007k\u0002\u0002\u00c0\u00c1\u0007q\u0002\u0002",
    "\u00c1\u00c2\u0007a\u0002\u0002\u00c2\u00c3\u0007t\u0002\u0002\u00c3",
    "\u00c4\u0007q\u0002\u0002\u00c4\u00c5\u0007y\u0002\u0002\u00c5\u001e",
    "\u0003\u0002\u0002\u0002\u00c6\u00c7\u0007d\u0002\u0002\u00c7\u00c8",
    "\u0007q\u0002\u0002\u00c8\u00c9\u0007z\u0002\u0002\u00c9\u00ca\u0007",
    "g\u0002\u0002\u00ca\u00cb\u0007f\u0002\u0002\u00cb\u00cc\u0007a\u0002",
    "\u0002\u00cc\u00cd\u0007t\u0002\u0002\u00cd\u00ce\u0007c\u0002\u0002",
    "\u00ce\u00cf\u0007f\u0002\u0002\u00cf\u00d0\u0007k\u0002\u0002\u00d0",
    "\u00d1\u0007q\u0002\u0002\u00d1\u00d2\u0007a\u0002\u0002\u00d2\u00d3",
    "\u0007e\u0002\u0002\u00d3\u00d4\u0007q\u0002\u0002\u00d4\u00d5\u0007",
    "n\u0002\u0002\u00d5\u00d6\u0007w\u0002\u0002\u00d6\u00d7\u0007o\u0002",
    "\u0002\u00d7\u00d8\u0007p\u0002\u0002\u00d8 \u0003\u0002\u0002\u0002",
    "\u00d9\u00da\u0007d\u0002\u0002\u00da\u00db\u0007w\u0002\u0002\u00db",
    "\u00dc\u0007v\u0002\u0002\u00dc\u00dd\u0007v\u0002\u0002\u00dd\u00de",
    "\u0007q\u0002\u0002\u00de\u00df\u0007p\u0002\u0002\u00df\"\u0003\u0002",
    "\u0002\u0002\u00e0\u00e1\u0007g\u0002\u0002\u00e1\u00e2\u0007f\u0002",
    "\u0002\u00e2\u00e3\u0007k\u0002\u0002\u00e3\u00e4\u0007v\u0002\u0002",
    "\u00e4\u00e5\u0007a\u0002\u0002\u00e5\u00e6\u0007d\u0002\u0002\u00e6",
    "\u00e7\u0007q\u0002\u0002\u00e7\u00e8\u0007z\u0002\u0002\u00e8$\u0003",
    "\u0002\u0002\u0002\u00e9\u00ea\u0007n\u0002\u0002\u00ea\u00eb\u0007",
    "k\u0002\u0002\u00eb\u00ec\u0007u\u0002\u0002\u00ec\u00ed\u0007v\u0002",
    "\u0002\u00ed\u00ee\u0007a\u0002\u0002\u00ee\u00ef\u0007d\u0002\u0002",
    "\u00ef\u00f0\u0007q\u0002\u0002\u00f0\u00f1\u0007z\u0002\u0002\u00f1",
    "&\u0003\u0002\u0002\u0002\u00f2\u00f3\u0007r\u0002\u0002\u00f3\u00f4",
    "\u0007q\u0002\u0002\u00f4\u00f5\u0007r\u0002\u0002\u00f5\u00f6\u0007",
    "w\u0002\u0002\u00f6\u00f7\u0007r\u0002\u0002\u00f7\u00f8\u0007a\u0002",
    "\u0002\u00f8\u00f9\u0007n\u0002\u0002\u00f9\u00fa\u0007k\u0002\u0002",
    "\u00fa\u00fb\u0007u\u0002\u0002\u00fb\u00fc\u0007v\u0002\u0002\u00fc",
    "(\u0003\u0002\u0002\u0002\u00fd\u00fe\u0007t\u0002\u0002\u00fe\u00ff",
    "\u0007c\u0002\u0002\u00ff\u0100\u0007f\u0002\u0002\u0100\u0101\u0007",
    "k\u0002\u0002\u0101\u0102\u0007q\u0002\u0002\u0102\u0103\u0007a\u0002",
    "\u0002\u0103\u0104\u0007d\u0002\u0002\u0104\u0105\u0007w\u0002\u0002",
    "\u0105\u0106\u0007v\u0002\u0002\u0106\u0107\u0007v\u0002\u0002\u0107",
    "\u0108\u0007q\u0002\u0002\u0108\u0109\u0007p\u0002\u0002\u0109*\u0003",
    "\u0002\u0002\u0002\u010a\u010b\u0007u\u0002\u0002\u010b\u010c\u0007",
    "n\u0002\u0002\u010c\u010d\u0007k\u0002\u0002\u010d\u010e\u0007f\u0002",
    "\u0002\u010e\u010f\u0007g\u0002\u0002\u010f\u0110\u0007t\u0002\u0002",
    "\u0110,\u0003\u0002\u0002\u0002\u0111\u0112\u0007u\u0002\u0002\u0112",
    "\u0113\u0007r\u0002\u0002\u0113\u0114\u0007c\u0002\u0002\u0114\u0115",
    "\u0007e\u0002\u0002\u0115\u0116\u0007g\u0002\u0002\u0116\u0117\u0007",
    "t\u0002\u0002\u0117.\u0003\u0002\u0002\u0002\u0118\u0119\u0007v\u0002",
    "\u0002\u0119\u011a\u0007g\u0002\u0002\u011a\u011b\u0007z\u0002\u0002",
    "\u011b\u011c\u0007v\u0002\u0002\u011c0\u0003\u0002\u0002\u0002\u011d",
    "\u011e\u0007v\u0002\u0002\u011e\u011f\u0007q\u0002\u0002\u011f\u0120",
    "\u0007i\u0002\u0002\u0120\u0121\u0007i\u0002\u0002\u0121\u0122\u0007",
    "n\u0002\u0002\u0122\u0123\u0007g\u0002\u0002\u01232\u0003\u0002\u0002",
    "\u0002\u0124\u0125\u0007?\u0002\u0002\u01254\u0003\u0002\u0002\u0002",
    "\u0126\u0127\u0007v\u0002\u0002\u0127\u0128\u0007t\u0002\u0002\u0128",
    "\u0129\u0007w\u0002\u0002\u0129\u0130\u0007g\u0002\u0002\u012a\u012b",
    "\u0007h\u0002\u0002\u012b\u012c\u0007c\u0002\u0002\u012c\u012d\u0007",
    "n\u0002\u0002\u012d\u012e\u0007u\u0002\u0002\u012e\u0130\u0007g\u0002",
    "\u0002\u012f\u0126\u0003\u0002\u0002\u0002\u012f\u012a\u0003\u0002\u0002",
    "\u0002\u01306\u0003\u0002\u0002\u0002\u0131\u0133\u0007/\u0002\u0002",
    "\u0132\u0131\u0003\u0002\u0002\u0002\u0132\u0133\u0003\u0002\u0002\u0002",
    "\u0133\u0135\u0003\u0002\u0002\u0002\u0134\u0136\u0005U+\u0002\u0135",
    "\u0134\u0003\u0002\u0002\u0002\u0136\u0137\u0003\u0002\u0002\u0002\u0137",
    "\u0135\u0003\u0002\u0002\u0002\u0137\u0138\u0003\u0002\u0002\u0002\u0138",
    "8\u0003\u0002\u0002\u0002\u0139\u013b\u0007/\u0002\u0002\u013a\u0139",
    "\u0003\u0002\u0002\u0002\u013a\u013b\u0003\u0002\u0002\u0002\u013b\u013d",
    "\u0003\u0002\u0002\u0002\u013c\u013e\u0005U+\u0002\u013d\u013c\u0003",
    "\u0002\u0002\u0002\u013e\u013f\u0003\u0002\u0002\u0002\u013f\u013d\u0003",
    "\u0002\u0002\u0002\u013f\u0140\u0003\u0002\u0002\u0002\u0140\u0141\u0003",
    "\u0002\u0002\u0002\u0141\u0143\u00070\u0002\u0002\u0142\u0144\u0005",
    "U+\u0002\u0143\u0142\u0003\u0002\u0002\u0002\u0144\u0145\u0003\u0002",
    "\u0002\u0002\u0145\u0143\u0003\u0002\u0002\u0002\u0145\u0146\u0003\u0002",
    "\u0002\u0002\u0146:\u0003\u0002\u0002\u0002\u0147\u014b\u0007$\u0002",
    "\u0002\u0148\u014a\u0005K&\u0002\u0149\u0148\u0003\u0002\u0002\u0002",
    "\u014a\u014d\u0003\u0002\u0002\u0002\u014b\u0149\u0003\u0002\u0002\u0002",
    "\u014b\u014c\u0003\u0002\u0002\u0002\u014c\u014e\u0003\u0002\u0002\u0002",
    "\u014d\u014b\u0003\u0002\u0002\u0002\u014e\u014f\u0007$\u0002\u0002",
    "\u014f<\u0003\u0002\u0002\u0002\u0150\u0151\u0007n\u0002\u0002\u0151",
    "\u0152\u0007g\u0002\u0002\u0152\u0153\u0007h\u0002\u0002\u0153\u0171",
    "\u0007v\u0002\u0002\u0154\u0155\u0007t\u0002\u0002\u0155\u0156\u0007",
    "k\u0002\u0002\u0156\u0157\u0007i\u0002\u0002\u0157\u0158\u0007j\u0002",
    "\u0002\u0158\u0171\u0007v\u0002\u0002\u0159\u015a\u0007v\u0002\u0002",
    "\u015a\u015b\u0007q\u0002\u0002\u015b\u0171\u0007r\u0002\u0002\u015c",
    "\u015d\u0007d\u0002\u0002\u015d\u015e\u0007q\u0002\u0002\u015e\u015f",
    "\u0007v\u0002\u0002\u015f\u0160\u0007v\u0002\u0002\u0160\u0161\u0007",
    "q\u0002\u0002\u0161\u0171\u0007o\u0002\u0002\u0162\u0163\u0007e\u0002",
    "\u0002\u0163\u0164\u0007g\u0002\u0002\u0164\u0165\u0007p\u0002\u0002",
    "\u0165\u0166\u0007v\u0002\u0002\u0166\u0167\u0007g\u0002\u0002\u0167",
    "\u0168\u0007t\u0002\u0002\u0168\u0169\u0007g\u0002\u0002\u0169\u0171",
    "\u0007f\u0002\u0002\u016a\u016b\u0007h\u0002\u0002\u016b\u016c\u0007",
    "k\u0002\u0002\u016c\u016d\u0007n\u0002\u0002\u016d\u016e\u0007n\u0002",
    "\u0002\u016e\u016f\u0007g\u0002\u0002\u016f\u0171\u0007f\u0002\u0002",
    "\u0170\u0150\u0003\u0002\u0002\u0002\u0170\u0154\u0003\u0002\u0002\u0002",
    "\u0170\u0159\u0003\u0002\u0002\u0002\u0170\u015c\u0003\u0002\u0002\u0002",
    "\u0170\u0162\u0003\u0002\u0002\u0002\u0170\u016a\u0003\u0002\u0002\u0002",
    "\u0171>\u0003\u0002\u0002\u0002\u0172\u0173\u0007j\u0002\u0002\u0173",
    "\u0174\u0007q\u0002\u0002\u0174\u0175\u0007t\u0002\u0002\u0175\u0176",
    "\u0007k\u0002\u0002\u0176\u0177\u0007|\u0002\u0002\u0177\u0178\u0007",
    "q\u0002\u0002\u0178\u0179\u0007p\u0002\u0002\u0179\u017a\u0007v\u0002",
    "\u0002\u017a\u017b\u0007c\u0002\u0002\u017b\u0185\u0007n\u0002\u0002",
    "\u017c\u017d\u0007x\u0002\u0002\u017d\u017e\u0007g\u0002\u0002\u017e",
    "\u017f\u0007t\u0002\u0002\u017f\u0180\u0007v\u0002\u0002\u0180\u0181",
    "\u0007k\u0002\u0002\u0181\u0182\u0007e\u0002\u0002\u0182\u0183\u0007",
    "c\u0002\u0002\u0183\u0185\u0007n\u0002\u0002\u0184\u0172\u0003\u0002",
    "\u0002\u0002\u0184\u017c\u0003\u0002\u0002\u0002\u0185@\u0003\u0002",
    "\u0002\u0002\u0186\u0188\u0005O(\u0002\u0187\u0186\u0003\u0002\u0002",
    "\u0002\u0188\u0189\u0003\u0002\u0002\u0002\u0189\u0187\u0003\u0002\u0002",
    "\u0002\u0189\u018a\u0003\u0002\u0002\u0002\u018a\u0190\u0003\u0002\u0002",
    "\u0002\u018b\u018f\u0005U+\u0002\u018c\u018f\u0005O(\u0002\u018d\u018f",
    "\u0007a\u0002\u0002\u018e\u018b\u0003\u0002\u0002\u0002\u018e\u018c",
    "\u0003\u0002\u0002\u0002\u018e\u018d\u0003\u0002\u0002\u0002\u018f\u0192",
    "\u0003\u0002\u0002\u0002\u0190\u018e\u0003\u0002\u0002\u0002\u0190\u0191",
    "\u0003\u0002\u0002\u0002\u0191B\u0003\u0002\u0002\u0002\u0192\u0190",
    "\u0003\u0002\u0002\u0002\u0193\u0194\u00071\u0002\u0002\u0194\u0195",
    "\u0007,\u0002\u0002\u0195\u0199\u0003\u0002\u0002\u0002\u0196\u0198",
    "\u000b\u0002\u0002\u0002\u0197\u0196\u0003\u0002\u0002\u0002\u0198\u019b",
    "\u0003\u0002\u0002\u0002\u0199\u019a\u0003\u0002\u0002\u0002\u0199\u0197",
    "\u0003\u0002\u0002\u0002\u019a\u019c\u0003\u0002\u0002\u0002\u019b\u0199",
    "\u0003\u0002\u0002\u0002\u019c\u019d\u0007,\u0002\u0002\u019d\u019e",
    "\u00071\u0002\u0002\u019e\u019f\u0003\u0002\u0002\u0002\u019f\u01a0",
    "\b\"\u0002\u0002\u01a0D\u0003\u0002\u0002\u0002\u01a1\u01a2\u00071\u0002",
    "\u0002\u01a2\u01a4\u00071\u0002\u0002\u01a3\u01a1\u0003\u0002\u0002",
    "\u0002\u01a4\u01a5\u0003\u0002\u0002\u0002\u01a5\u01a3\u0003\u0002\u0002",
    "\u0002\u01a5\u01a6\u0003\u0002\u0002\u0002\u01a6\u01aa\u0003\u0002\u0002",
    "\u0002\u01a7\u01a9\u000b\u0002\u0002\u0002\u01a8\u01a7\u0003\u0002\u0002",
    "\u0002\u01a9\u01ac\u0003\u0002\u0002\u0002\u01aa\u01ab\u0003\u0002\u0002",
    "\u0002\u01aa\u01a8\u0003\u0002\u0002\u0002\u01ab\u01ad\u0003\u0002\u0002",
    "\u0002\u01ac\u01aa\u0003\u0002\u0002\u0002\u01ad\u01ae\u0005G$\u0002",
    "\u01ae\u01af\u0003\u0002\u0002\u0002\u01af\u01b0\b#\u0002\u0002\u01b0",
    "F\u0003\u0002\u0002\u0002\u01b1\u01b3\u0007\u000f\u0002\u0002\u01b2",
    "\u01b1\u0003\u0002\u0002\u0002\u01b2\u01b3\u0003\u0002\u0002\u0002\u01b3",
    "\u01b4\u0003\u0002\u0002\u0002\u01b4\u01b5\u0007\f\u0002\u0002\u01b5",
    "\u01b6\u0003\u0002\u0002\u0002\u01b6\u01b7\b$\u0002\u0002\u01b7H\u0003",
    "\u0002\u0002\u0002\u01b8\u01ba\t\u0002\u0002\u0002\u01b9\u01b8\u0003",
    "\u0002\u0002\u0002\u01ba\u01bb\u0003\u0002\u0002\u0002\u01bb\u01b9\u0003",
    "\u0002\u0002\u0002\u01bb\u01bc\u0003\u0002\u0002\u0002\u01bc\u01bd\u0003",
    "\u0002\u0002\u0002\u01bd\u01be\b%\u0002\u0002\u01beJ\u0003\u0002\u0002",
    "\u0002\u01bf\u01c4\n\u0003\u0002\u0002\u01c0\u01c1\u0007^\u0002\u0002",
    "\u01c1\u01c4\u0005M\'\u0002\u01c2\u01c4\u0005G$\u0002\u01c3\u01bf\u0003",
    "\u0002\u0002\u0002\u01c3\u01c0\u0003\u0002\u0002\u0002\u01c3\u01c2\u0003",
    "\u0002\u0002\u0002\u01c4L\u0003\u0002\u0002\u0002\u01c5\u01c6\t\u0004",
    "\u0002\u0002\u01c6N\u0003\u0002\u0002\u0002\u01c7\u01ca\u0005Q)\u0002",
    "\u01c8\u01ca\u0005S*\u0002\u01c9\u01c7\u0003\u0002\u0002\u0002\u01c9",
    "\u01c8\u0003\u0002\u0002\u0002\u01caP\u0003\u0002\u0002\u0002\u01cb",
    "\u01cc\t\u0005\u0002\u0002\u01ccR\u0003\u0002\u0002\u0002\u01cd\u01ce",
    "\t\u0006\u0002\u0002\u01ceT\u0003\u0002\u0002\u0002\u01cf\u01d0\t\u0007",
    "\u0002\u0002\u01d0V\u0003\u0002\u0002\u0002\u0016\u0002\u012f\u0132",
    "\u0137\u013a\u013f\u0145\u014b\u0170\u0184\u0189\u018e\u0190\u0199\u01a5",
    "\u01aa\u01b2\u01bb\u01c3\u01c9\u0003\b\u0002\u0002"].join("");


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
VeDclLexer.T__9 = 10;
VeDclLexer.T__10 = 11;
VeDclLexer.T__11 = 12;
VeDclLexer.T__12 = 13;
VeDclLexer.T__13 = 14;
VeDclLexer.T__14 = 15;
VeDclLexer.T__15 = 16;
VeDclLexer.T__16 = 17;
VeDclLexer.T__17 = 18;
VeDclLexer.T__18 = 19;
VeDclLexer.T__19 = 20;
VeDclLexer.T__20 = 21;
VeDclLexer.T__21 = 22;
VeDclLexer.T__22 = 23;
VeDclLexer.T__23 = 24;
VeDclLexer.T__24 = 25;
VeDclLexer.BOOL = 26;
VeDclLexer.INT = 27;
VeDclLexer.REAL = 28;
VeDclLexer.STR = 29;
VeDclLexer.ALIGN = 30;
VeDclLexer.LAYOUT = 31;
VeDclLexer.ID = 32;
VeDclLexer.COMMENT = 33;
VeDclLexer.LINE_COMMENT = 34;
VeDclLexer.NEWLINE = 35;
VeDclLexer.WHITESPACE = 36;

VeDclLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

VeDclLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

VeDclLexer.prototype.literalNames = [ null, "'@include'", "';'", "':'", 
                                      "'{'", "'}'", "'dialog'", "'row'", 
                                      "'column'", "'boxed_row'", "'boxed_column'", 
                                      "'concatenation'", "'radio_row'", 
                                      "'radio_column'", "'boxed_radio_row'", 
                                      "'boxed_radio_column'", "'button'", 
                                      "'edit_box'", "'list_box'", "'popup_list'", 
                                      "'radio_button'", "'slider'", "'spacer'", 
                                      "'text'", "'toggle'", "'='" ];

VeDclLexer.prototype.symbolicNames = [ null, null, null, null, null, null, 
                                       null, null, null, null, null, null, 
                                       null, null, null, null, null, null, 
                                       null, null, null, null, null, null, 
                                       null, null, "BOOL", "INT", "REAL", 
                                       "STR", "ALIGN", "LAYOUT", "ID", "COMMENT", 
                                       "LINE_COMMENT", "NEWLINE", "WHITESPACE" ];

VeDclLexer.prototype.ruleNames = [ "T__0", "T__1", "T__2", "T__3", "T__4", 
                                   "T__5", "T__6", "T__7", "T__8", "T__9", 
                                   "T__10", "T__11", "T__12", "T__13", "T__14", 
                                   "T__15", "T__16", "T__17", "T__18", "T__19", 
                                   "T__20", "T__21", "T__22", "T__23", "T__24", 
                                   "BOOL", "INT", "REAL", "STR", "ALIGN", 
                                   "LAYOUT", "ID", "COMMENT", "LINE_COMMENT", 
                                   "NEWLINE", "WHITESPACE", "CHAR", "ESCAPE_SEQ", 
                                   "LETTER", "LOWER_LETTER", "UPPER_LETTER", 
                                   "DIGIT" ];

VeDclLexer.prototype.grammarFileName = "VeDcl.g4";


exports.VeDclLexer = VeDclLexer;

