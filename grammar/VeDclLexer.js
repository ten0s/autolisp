// Generated from grammar/VeDcl.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');



var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002\u001d\u014f\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010",
    "\t\u0010\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013",
    "\u0004\u0014\t\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017",
    "\t\u0017\u0004\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a",
    "\u0004\u001b\t\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e",
    "\t\u001e\u0004\u001f\t\u001f\u0004 \t \u0004!\t!\u0004\"\t\"\u0003\u0002",
    "\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002",
    "\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004",
    "\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\b",
    "\u0003\b\u0003\b\u0003\b\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003",
    "\t\u0003\t\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003",
    "\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\u000b\u0003",
    "\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003",
    "\u000b\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0003\f\u0003\f\u0003",
    "\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003",
    "\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\u000e\u0003",
    "\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003",
    "\u000e\u0003\u000e\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003",
    "\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003",
    "\u000f\u0003\u000f\u0003\u000f\u0003\u0010\u0003\u0010\u0003\u0010\u0003",
    "\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0011\u0003\u0011\u0003",
    "\u0011\u0003\u0011\u0003\u0011\u0003\u0012\u0003\u0012\u0003\u0013\u0003",
    "\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003",
    "\u0013\u0003\u0013\u0005\u0013\u00c2\n\u0013\u0003\u0014\u0005\u0014",
    "\u00c5\n\u0014\u0003\u0014\u0006\u0014\u00c8\n\u0014\r\u0014\u000e\u0014",
    "\u00c9\u0003\u0015\u0005\u0015\u00cd\n\u0015\u0003\u0015\u0006\u0015",
    "\u00d0\n\u0015\r\u0015\u000e\u0015\u00d1\u0003\u0015\u0003\u0015\u0006",
    "\u0015\u00d6\n\u0015\r\u0015\u000e\u0015\u00d7\u0003\u0016\u0003\u0016",
    "\u0007\u0016\u00dc\n\u0016\f\u0016\u000e\u0016\u00df\u000b\u0016\u0003",
    "\u0016\u0003\u0016\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003",
    "\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003",
    "\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003",
    "\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003",
    "\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003",
    "\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0005\u0017\u0103\n\u0017",
    "\u0003\u0018\u0006\u0018\u0106\n\u0018\r\u0018\u000e\u0018\u0107\u0003",
    "\u0018\u0003\u0018\u0003\u0018\u0007\u0018\u010d\n\u0018\f\u0018\u000e",
    "\u0018\u0110\u000b\u0018\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u0019",
    "\u0007\u0019\u0116\n\u0019\f\u0019\u000e\u0019\u0119\u000b\u0019\u0003",
    "\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u001a\u0003",
    "\u001a\u0006\u001a\u0122\n\u001a\r\u001a\u000e\u001a\u0123\u0003\u001a",
    "\u0007\u001a\u0127\n\u001a\f\u001a\u000e\u001a\u012a\u000b\u001a\u0003",
    "\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001b\u0005\u001b\u0131",
    "\n\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001c",
    "\u0006\u001c\u0138\n\u001c\r\u001c\u000e\u001c\u0139\u0003\u001c\u0003",
    "\u001c\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0005\u001d\u0142",
    "\n\u001d\u0003\u001e\u0003\u001e\u0003\u001f\u0003\u001f\u0005\u001f",
    "\u0148\n\u001f\u0003 \u0003 \u0003!\u0003!\u0003\"\u0003\"\u0004\u0117",
    "\u0128\u0002#\u0003\u0003\u0005\u0004\u0007\u0005\t\u0006\u000b\u0007",
    "\r\b\u000f\t\u0011\n\u0013\u000b\u0015\f\u0017\r\u0019\u000e\u001b\u000f",
    "\u001d\u0010\u001f\u0011!\u0012#\u0013%\u0014\'\u0015)\u0016+\u0017",
    "-\u0018/\u00191\u001a3\u001b5\u001c7\u001d9\u0002;\u0002=\u0002?\u0002",
    "A\u0002C\u0002\u0003\u0002\b\u0004\u0002\u000b\u000b\"\"\u0006\u0002",
    "\f\f\u000f\u000f$$^^\u0007\u0002$$^^ppttvv\u0003\u0002c|\u0003\u0002",
    "C\\\u0003\u00022;\u0002\u0160\u0002\u0003\u0003\u0002\u0002\u0002\u0002",
    "\u0005\u0003\u0002\u0002\u0002\u0002\u0007\u0003\u0002\u0002\u0002\u0002",
    "\t\u0003\u0002\u0002\u0002\u0002\u000b\u0003\u0002\u0002\u0002\u0002",
    "\r\u0003\u0002\u0002\u0002\u0002\u000f\u0003\u0002\u0002\u0002\u0002",
    "\u0011\u0003\u0002\u0002\u0002\u0002\u0013\u0003\u0002\u0002\u0002\u0002",
    "\u0015\u0003\u0002\u0002\u0002\u0002\u0017\u0003\u0002\u0002\u0002\u0002",
    "\u0019\u0003\u0002\u0002\u0002\u0002\u001b\u0003\u0002\u0002\u0002\u0002",
    "\u001d\u0003\u0002\u0002\u0002\u0002\u001f\u0003\u0002\u0002\u0002\u0002",
    "!\u0003\u0002\u0002\u0002\u0002#\u0003\u0002\u0002\u0002\u0002%\u0003",
    "\u0002\u0002\u0002\u0002\'\u0003\u0002\u0002\u0002\u0002)\u0003\u0002",
    "\u0002\u0002\u0002+\u0003\u0002\u0002\u0002\u0002-\u0003\u0002\u0002",
    "\u0002\u0002/\u0003\u0002\u0002\u0002\u00021\u0003\u0002\u0002\u0002",
    "\u00023\u0003\u0002\u0002\u0002\u00025\u0003\u0002\u0002\u0002\u0002",
    "7\u0003\u0002\u0002\u0002\u0003E\u0003\u0002\u0002\u0002\u0005N\u0003",
    "\u0002\u0002\u0002\u0007P\u0003\u0002\u0002\u0002\tR\u0003\u0002\u0002",
    "\u0002\u000bT\u0003\u0002\u0002\u0002\rV\u0003\u0002\u0002\u0002\u000f",
    "]\u0003\u0002\u0002\u0002\u0011a\u0003\u0002\u0002\u0002\u0013h\u0003",
    "\u0002\u0002\u0002\u0015v\u0003\u0002\u0002\u0002\u0017\u0080\u0003",
    "\u0002\u0002\u0002\u0019\u008d\u0003\u0002\u0002\u0002\u001b\u0094\u0003",
    "\u0002\u0002\u0002\u001d\u009d\u0003\u0002\u0002\u0002\u001f\u00aa\u0003",
    "\u0002\u0002\u0002!\u00b1\u0003\u0002\u0002\u0002#\u00b6\u0003\u0002",
    "\u0002\u0002%\u00c1\u0003\u0002\u0002\u0002\'\u00c4\u0003\u0002\u0002",
    "\u0002)\u00cc\u0003\u0002\u0002\u0002+\u00d9\u0003\u0002\u0002\u0002",
    "-\u0102\u0003\u0002\u0002\u0002/\u0105\u0003\u0002\u0002\u00021\u0111",
    "\u0003\u0002\u0002\u00023\u0121\u0003\u0002\u0002\u00025\u0130\u0003",
    "\u0002\u0002\u00027\u0137\u0003\u0002\u0002\u00029\u0141\u0003\u0002",
    "\u0002\u0002;\u0143\u0003\u0002\u0002\u0002=\u0147\u0003\u0002\u0002",
    "\u0002?\u0149\u0003\u0002\u0002\u0002A\u014b\u0003\u0002\u0002\u0002",
    "C\u014d\u0003\u0002\u0002\u0002EF\u0007B\u0002\u0002FG\u0007k\u0002",
    "\u0002GH\u0007p\u0002\u0002HI\u0007e\u0002\u0002IJ\u0007n\u0002\u0002",
    "JK\u0007w\u0002\u0002KL\u0007f\u0002\u0002LM\u0007g\u0002\u0002M\u0004",
    "\u0003\u0002\u0002\u0002NO\u0007=\u0002\u0002O\u0006\u0003\u0002\u0002",
    "\u0002PQ\u0007<\u0002\u0002Q\b\u0003\u0002\u0002\u0002RS\u0007}\u0002",
    "\u0002S\n\u0003\u0002\u0002\u0002TU\u0007\u007f\u0002\u0002U\f\u0003",
    "\u0002\u0002\u0002VW\u0007f\u0002\u0002WX\u0007k\u0002\u0002XY\u0007",
    "c\u0002\u0002YZ\u0007n\u0002\u0002Z[\u0007q\u0002\u0002[\\\u0007i\u0002",
    "\u0002\\\u000e\u0003\u0002\u0002\u0002]^\u0007t\u0002\u0002^_\u0007",
    "q\u0002\u0002_`\u0007y\u0002\u0002`\u0010\u0003\u0002\u0002\u0002ab",
    "\u0007e\u0002\u0002bc\u0007q\u0002\u0002cd\u0007n\u0002\u0002de\u0007",
    "w\u0002\u0002ef\u0007o\u0002\u0002fg\u0007p\u0002\u0002g\u0012\u0003",
    "\u0002\u0002\u0002hi\u0007e\u0002\u0002ij\u0007q\u0002\u0002jk\u0007",
    "p\u0002\u0002kl\u0007e\u0002\u0002lm\u0007c\u0002\u0002mn\u0007v\u0002",
    "\u0002no\u0007g\u0002\u0002op\u0007p\u0002\u0002pq\u0007c\u0002\u0002",
    "qr\u0007v\u0002\u0002rs\u0007k\u0002\u0002st\u0007q\u0002\u0002tu\u0007",
    "p\u0002\u0002u\u0014\u0003\u0002\u0002\u0002vw\u0007t\u0002\u0002wx",
    "\u0007c\u0002\u0002xy\u0007f\u0002\u0002yz\u0007k\u0002\u0002z{\u0007",
    "q\u0002\u0002{|\u0007a\u0002\u0002|}\u0007t\u0002\u0002}~\u0007q\u0002",
    "\u0002~\u007f\u0007y\u0002\u0002\u007f\u0016\u0003\u0002\u0002\u0002",
    "\u0080\u0081\u0007t\u0002\u0002\u0081\u0082\u0007c\u0002\u0002\u0082",
    "\u0083\u0007f\u0002\u0002\u0083\u0084\u0007k\u0002\u0002\u0084\u0085",
    "\u0007q\u0002\u0002\u0085\u0086\u0007a\u0002\u0002\u0086\u0087\u0007",
    "e\u0002\u0002\u0087\u0088\u0007q\u0002\u0002\u0088\u0089\u0007n\u0002",
    "\u0002\u0089\u008a\u0007w\u0002\u0002\u008a\u008b\u0007o\u0002\u0002",
    "\u008b\u008c\u0007p\u0002\u0002\u008c\u0018\u0003\u0002\u0002\u0002",
    "\u008d\u008e\u0007d\u0002\u0002\u008e\u008f\u0007w\u0002\u0002\u008f",
    "\u0090\u0007v\u0002\u0002\u0090\u0091\u0007v\u0002\u0002\u0091\u0092",
    "\u0007q\u0002\u0002\u0092\u0093\u0007p\u0002\u0002\u0093\u001a\u0003",
    "\u0002\u0002\u0002\u0094\u0095\u0007g\u0002\u0002\u0095\u0096\u0007",
    "f\u0002\u0002\u0096\u0097\u0007k\u0002\u0002\u0097\u0098\u0007v\u0002",
    "\u0002\u0098\u0099\u0007a\u0002\u0002\u0099\u009a\u0007d\u0002\u0002",
    "\u009a\u009b\u0007q\u0002\u0002\u009b\u009c\u0007z\u0002\u0002\u009c",
    "\u001c\u0003\u0002\u0002\u0002\u009d\u009e\u0007t\u0002\u0002\u009e",
    "\u009f\u0007c\u0002\u0002\u009f\u00a0\u0007f\u0002\u0002\u00a0\u00a1",
    "\u0007k\u0002\u0002\u00a1\u00a2\u0007q\u0002\u0002\u00a2\u00a3\u0007",
    "a\u0002\u0002\u00a3\u00a4\u0007d\u0002\u0002\u00a4\u00a5\u0007w\u0002",
    "\u0002\u00a5\u00a6\u0007v\u0002\u0002\u00a6\u00a7\u0007v\u0002\u0002",
    "\u00a7\u00a8\u0007q\u0002\u0002\u00a8\u00a9\u0007p\u0002\u0002\u00a9",
    "\u001e\u0003\u0002\u0002\u0002\u00aa\u00ab\u0007u\u0002\u0002\u00ab",
    "\u00ac\u0007r\u0002\u0002\u00ac\u00ad\u0007c\u0002\u0002\u00ad\u00ae",
    "\u0007e\u0002\u0002\u00ae\u00af\u0007g\u0002\u0002\u00af\u00b0\u0007",
    "t\u0002\u0002\u00b0 \u0003\u0002\u0002\u0002\u00b1\u00b2\u0007v\u0002",
    "\u0002\u00b2\u00b3\u0007g\u0002\u0002\u00b3\u00b4\u0007z\u0002\u0002",
    "\u00b4\u00b5\u0007v\u0002\u0002\u00b5\"\u0003\u0002\u0002\u0002\u00b6",
    "\u00b7\u0007?\u0002\u0002\u00b7$\u0003\u0002\u0002\u0002\u00b8\u00b9",
    "\u0007v\u0002\u0002\u00b9\u00ba\u0007t\u0002\u0002\u00ba\u00bb\u0007",
    "w\u0002\u0002\u00bb\u00c2\u0007g\u0002\u0002\u00bc\u00bd\u0007h\u0002",
    "\u0002\u00bd\u00be\u0007c\u0002\u0002\u00be\u00bf\u0007n\u0002\u0002",
    "\u00bf\u00c0\u0007u\u0002\u0002\u00c0\u00c2\u0007g\u0002\u0002\u00c1",
    "\u00b8\u0003\u0002\u0002\u0002\u00c1\u00bc\u0003\u0002\u0002\u0002\u00c2",
    "&\u0003\u0002\u0002\u0002\u00c3\u00c5\u0007/\u0002\u0002\u00c4\u00c3",
    "\u0003\u0002\u0002\u0002\u00c4\u00c5\u0003\u0002\u0002\u0002\u00c5\u00c7",
    "\u0003\u0002\u0002\u0002\u00c6\u00c8\u0005C\"\u0002\u00c7\u00c6\u0003",
    "\u0002\u0002\u0002\u00c8\u00c9\u0003\u0002\u0002\u0002\u00c9\u00c7\u0003",
    "\u0002\u0002\u0002\u00c9\u00ca\u0003\u0002\u0002\u0002\u00ca(\u0003",
    "\u0002\u0002\u0002\u00cb\u00cd\u0007/\u0002\u0002\u00cc\u00cb\u0003",
    "\u0002\u0002\u0002\u00cc\u00cd\u0003\u0002\u0002\u0002\u00cd\u00cf\u0003",
    "\u0002\u0002\u0002\u00ce\u00d0\u0005C\"\u0002\u00cf\u00ce\u0003\u0002",
    "\u0002\u0002\u00d0\u00d1\u0003\u0002\u0002\u0002\u00d1\u00cf\u0003\u0002",
    "\u0002\u0002\u00d1\u00d2\u0003\u0002\u0002\u0002\u00d2\u00d3\u0003\u0002",
    "\u0002\u0002\u00d3\u00d5\u00070\u0002\u0002\u00d4\u00d6\u0005C\"\u0002",
    "\u00d5\u00d4\u0003\u0002\u0002\u0002\u00d6\u00d7\u0003\u0002\u0002\u0002",
    "\u00d7\u00d5\u0003\u0002\u0002\u0002\u00d7\u00d8\u0003\u0002\u0002\u0002",
    "\u00d8*\u0003\u0002\u0002\u0002\u00d9\u00dd\u0007$\u0002\u0002\u00da",
    "\u00dc\u00059\u001d\u0002\u00db\u00da\u0003\u0002\u0002\u0002\u00dc",
    "\u00df\u0003\u0002\u0002\u0002\u00dd\u00db\u0003\u0002\u0002\u0002\u00dd",
    "\u00de\u0003\u0002\u0002\u0002\u00de\u00e0\u0003\u0002\u0002\u0002\u00df",
    "\u00dd\u0003\u0002\u0002\u0002\u00e0\u00e1\u0007$\u0002\u0002\u00e1",
    ",\u0003\u0002\u0002\u0002\u00e2\u00e3\u0007n\u0002\u0002\u00e3\u00e4",
    "\u0007g\u0002\u0002\u00e4\u00e5\u0007h\u0002\u0002\u00e5\u0103\u0007",
    "v\u0002\u0002\u00e6\u00e7\u0007t\u0002\u0002\u00e7\u00e8\u0007k\u0002",
    "\u0002\u00e8\u00e9\u0007i\u0002\u0002\u00e9\u00ea\u0007j\u0002\u0002",
    "\u00ea\u0103\u0007v\u0002\u0002\u00eb\u00ec\u0007v\u0002\u0002\u00ec",
    "\u00ed\u0007q\u0002\u0002\u00ed\u0103\u0007r\u0002\u0002\u00ee\u00ef",
    "\u0007d\u0002\u0002\u00ef\u00f0\u0007q\u0002\u0002\u00f0\u00f1\u0007",
    "v\u0002\u0002\u00f1\u00f2\u0007v\u0002\u0002\u00f2\u00f3\u0007q\u0002",
    "\u0002\u00f3\u0103\u0007o\u0002\u0002\u00f4\u00f5\u0007e\u0002\u0002",
    "\u00f5\u00f6\u0007g\u0002\u0002\u00f6\u00f7\u0007p\u0002\u0002\u00f7",
    "\u00f8\u0007v\u0002\u0002\u00f8\u00f9\u0007g\u0002\u0002\u00f9\u00fa",
    "\u0007t\u0002\u0002\u00fa\u00fb\u0007g\u0002\u0002\u00fb\u0103\u0007",
    "f\u0002\u0002\u00fc\u00fd\u0007h\u0002\u0002\u00fd\u00fe\u0007k\u0002",
    "\u0002\u00fe\u00ff\u0007n\u0002\u0002\u00ff\u0100\u0007n\u0002\u0002",
    "\u0100\u0101\u0007g\u0002\u0002\u0101\u0103\u0007f\u0002\u0002\u0102",
    "\u00e2\u0003\u0002\u0002\u0002\u0102\u00e6\u0003\u0002\u0002\u0002\u0102",
    "\u00eb\u0003\u0002\u0002\u0002\u0102\u00ee\u0003\u0002\u0002\u0002\u0102",
    "\u00f4\u0003\u0002\u0002\u0002\u0102\u00fc\u0003\u0002\u0002\u0002\u0103",
    ".\u0003\u0002\u0002\u0002\u0104\u0106\u0005=\u001f\u0002\u0105\u0104",
    "\u0003\u0002\u0002\u0002\u0106\u0107\u0003\u0002\u0002\u0002\u0107\u0105",
    "\u0003\u0002\u0002\u0002\u0107\u0108\u0003\u0002\u0002\u0002\u0108\u010e",
    "\u0003\u0002\u0002\u0002\u0109\u010d\u0005C\"\u0002\u010a\u010d\u0005",
    "=\u001f\u0002\u010b\u010d\u0007a\u0002\u0002\u010c\u0109\u0003\u0002",
    "\u0002\u0002\u010c\u010a\u0003\u0002\u0002\u0002\u010c\u010b\u0003\u0002",
    "\u0002\u0002\u010d\u0110\u0003\u0002\u0002\u0002\u010e\u010c\u0003\u0002",
    "\u0002\u0002\u010e\u010f\u0003\u0002\u0002\u0002\u010f0\u0003\u0002",
    "\u0002\u0002\u0110\u010e\u0003\u0002\u0002\u0002\u0111\u0112\u00071",
    "\u0002\u0002\u0112\u0113\u0007,\u0002\u0002\u0113\u0117\u0003\u0002",
    "\u0002\u0002\u0114\u0116\u000b\u0002\u0002\u0002\u0115\u0114\u0003\u0002",
    "\u0002\u0002\u0116\u0119\u0003\u0002\u0002\u0002\u0117\u0118\u0003\u0002",
    "\u0002\u0002\u0117\u0115\u0003\u0002\u0002\u0002\u0118\u011a\u0003\u0002",
    "\u0002\u0002\u0119\u0117\u0003\u0002\u0002\u0002\u011a\u011b\u0007,",
    "\u0002\u0002\u011b\u011c\u00071\u0002\u0002\u011c\u011d\u0003\u0002",
    "\u0002\u0002\u011d\u011e\b\u0019\u0002\u0002\u011e2\u0003\u0002\u0002",
    "\u0002\u011f\u0120\u00071\u0002\u0002\u0120\u0122\u00071\u0002\u0002",
    "\u0121\u011f\u0003\u0002\u0002\u0002\u0122\u0123\u0003\u0002\u0002\u0002",
    "\u0123\u0121\u0003\u0002\u0002\u0002\u0123\u0124\u0003\u0002\u0002\u0002",
    "\u0124\u0128\u0003\u0002\u0002\u0002\u0125\u0127\u000b\u0002\u0002\u0002",
    "\u0126\u0125\u0003\u0002\u0002\u0002\u0127\u012a\u0003\u0002\u0002\u0002",
    "\u0128\u0129\u0003\u0002\u0002\u0002\u0128\u0126\u0003\u0002\u0002\u0002",
    "\u0129\u012b\u0003\u0002\u0002\u0002\u012a\u0128\u0003\u0002\u0002\u0002",
    "\u012b\u012c\u00055\u001b\u0002\u012c\u012d\u0003\u0002\u0002\u0002",
    "\u012d\u012e\b\u001a\u0002\u0002\u012e4\u0003\u0002\u0002\u0002\u012f",
    "\u0131\u0007\u000f\u0002\u0002\u0130\u012f\u0003\u0002\u0002\u0002\u0130",
    "\u0131\u0003\u0002\u0002\u0002\u0131\u0132\u0003\u0002\u0002\u0002\u0132",
    "\u0133\u0007\f\u0002\u0002\u0133\u0134\u0003\u0002\u0002\u0002\u0134",
    "\u0135\b\u001b\u0002\u0002\u01356\u0003\u0002\u0002\u0002\u0136\u0138",
    "\t\u0002\u0002\u0002\u0137\u0136\u0003\u0002\u0002\u0002\u0138\u0139",
    "\u0003\u0002\u0002\u0002\u0139\u0137\u0003\u0002\u0002\u0002\u0139\u013a",
    "\u0003\u0002\u0002\u0002\u013a\u013b\u0003\u0002\u0002\u0002\u013b\u013c",
    "\b\u001c\u0002\u0002\u013c8\u0003\u0002\u0002\u0002\u013d\u0142\n\u0003",
    "\u0002\u0002\u013e\u013f\u0007^\u0002\u0002\u013f\u0142\u0005;\u001e",
    "\u0002\u0140\u0142\u00055\u001b\u0002\u0141\u013d\u0003\u0002\u0002",
    "\u0002\u0141\u013e\u0003\u0002\u0002\u0002\u0141\u0140\u0003\u0002\u0002",
    "\u0002\u0142:\u0003\u0002\u0002\u0002\u0143\u0144\t\u0004\u0002\u0002",
    "\u0144<\u0003\u0002\u0002\u0002\u0145\u0148\u0005? \u0002\u0146\u0148",
    "\u0005A!\u0002\u0147\u0145\u0003\u0002\u0002\u0002\u0147\u0146\u0003",
    "\u0002\u0002\u0002\u0148>\u0003\u0002\u0002\u0002\u0149\u014a\t\u0005",
    "\u0002\u0002\u014a@\u0003\u0002\u0002\u0002\u014b\u014c\t\u0006\u0002",
    "\u0002\u014cB\u0003\u0002\u0002\u0002\u014d\u014e\t\u0007\u0002\u0002",
    "\u014eD\u0003\u0002\u0002\u0002\u0015\u0002\u00c1\u00c4\u00c9\u00cc",
    "\u00d1\u00d7\u00dd\u0102\u0107\u010c\u010e\u0117\u0123\u0128\u0130\u0139",
    "\u0141\u0147\u0003\b\u0002\u0002"].join("");


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
VeDclLexer.BOOL = 18;
VeDclLexer.INT = 19;
VeDclLexer.REAL = 20;
VeDclLexer.STR = 21;
VeDclLexer.ALIGN = 22;
VeDclLexer.ID = 23;
VeDclLexer.COMMENT = 24;
VeDclLexer.LINE_COMMENT = 25;
VeDclLexer.NEWLINE = 26;
VeDclLexer.WHITESPACE = 27;

VeDclLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

VeDclLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

VeDclLexer.prototype.literalNames = [ null, "'@include'", "';'", "':'", 
                                      "'{'", "'}'", "'dialog'", "'row'", 
                                      "'column'", "'concatenation'", "'radio_row'", 
                                      "'radio_column'", "'button'", "'edit_box'", 
                                      "'radio_button'", "'spacer'", "'text'", 
                                      "'='" ];

VeDclLexer.prototype.symbolicNames = [ null, null, null, null, null, null, 
                                       null, null, null, null, null, null, 
                                       null, null, null, null, null, null, 
                                       "BOOL", "INT", "REAL", "STR", "ALIGN", 
                                       "ID", "COMMENT", "LINE_COMMENT", 
                                       "NEWLINE", "WHITESPACE" ];

VeDclLexer.prototype.ruleNames = [ "T__0", "T__1", "T__2", "T__3", "T__4", 
                                   "T__5", "T__6", "T__7", "T__8", "T__9", 
                                   "T__10", "T__11", "T__12", "T__13", "T__14", 
                                   "T__15", "T__16", "BOOL", "INT", "REAL", 
                                   "STR", "ALIGN", "ID", "COMMENT", "LINE_COMMENT", 
                                   "NEWLINE", "WHITESPACE", "CHAR", "ESCAPE_SEQ", 
                                   "LETTER", "LOWER_LETTER", "UPPER_LETTER", 
                                   "DIGIT" ];

VeDclLexer.prototype.grammarFileName = "VeDcl.g4";


exports.VeDclLexer = VeDclLexer;

