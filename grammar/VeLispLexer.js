// Generated from grammar/VeLisp.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');



var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002\u001d\u0158\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010",
    "\t\u0010\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013",
    "\u0004\u0014\t\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017",
    "\t\u0017\u0004\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a",
    "\u0004\u001b\t\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e",
    "\t\u001e\u0004\u001f\t\u001f\u0004 \t \u0004!\t!\u0004\"\t\"\u0004#",
    "\t#\u0004$\t$\u0004%\t%\u0004&\t&\u0004\'\t\'\u0004(\t(\u0004)\t)\u0004",
    "*\t*\u0004+\t+\u0004,\t,\u0004-\t-\u0004.\t.\u0004/\t/\u00040\t0\u0004",
    "1\t1\u00042\t2\u00043\t3\u00044\t4\u00045\t5\u00046\t6\u00047\t7\u0004",
    "8\t8\u00049\t9\u0004:\t:\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005",
    "\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\t\u0003\t\u0003\t\u0003",
    "\t\u0003\t\u0003\t\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003",
    "\n\u0003\n\u0003\u000b\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0003",
    "\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\r\u0003\r\u0003\r\u0003\u000e",
    "\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000f",
    "\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u0010",
    "\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010",
    "\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0012",
    "\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0013",
    "\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0014\u0003\u0014\u0003\u0015",
    "\u0005\u0015\u00cb\n\u0015\u0003\u0015\u0006\u0015\u00ce\n\u0015\r\u0015",
    "\u000e\u0015\u00cf\u0003\u0016\u0005\u0016\u00d3\n\u0016\u0003\u0016",
    "\u0006\u0016\u00d6\n\u0016\r\u0016\u000e\u0016\u00d7\u0003\u0016\u0003",
    "\u0016\u0006\u0016\u00dc\n\u0016\r\u0016\u000e\u0016\u00dd\u0003\u0017",
    "\u0003\u0017\u0007\u0017\u00e2\n\u0017\f\u0017\u000e\u0017\u00e5\u000b",
    "\u0017\u0003\u0017\u0003\u0017\u0003\u0018\u0006\u0018\u00ea\n\u0018",
    "\r\u0018\u000e\u0018\u00eb\u0003\u0019\u0003\u0019\u0003\u0019\u0003",
    "\u0019\u0007\u0019\u00f2\n\u0019\f\u0019\u000e\u0019\u00f5\u000b\u0019",
    "\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u001a",
    "\u0006\u001a\u00fd\n\u001a\r\u001a\u000e\u001a\u00fe\u0003\u001a\u0007",
    "\u001a\u0102\n\u001a\f\u001a\u000e\u001a\u0105\u000b\u001a\u0003\u001a",
    "\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001b\u0005\u001b\u010c\n",
    "\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001c\u0006",
    "\u001c\u0113\n\u001c\r\u001c\u000e\u001c\u0114\u0003\u001c\u0003\u001c",
    "\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0005\u001d\u011d\n",
    "\u001d\u0003\u001e\u0003\u001e\u0003\u001f\u0003\u001f\u0003 \u0003",
    " \u0003!\u0003!\u0003\"\u0003\"\u0003#\u0003#\u0003$\u0003$\u0003%\u0003",
    "%\u0003&\u0003&\u0003\'\u0003\'\u0003(\u0003(\u0003)\u0003)\u0003*\u0003",
    "*\u0003+\u0003+\u0003,\u0003,\u0003-\u0003-\u0003.\u0003.\u0003/\u0003",
    "/\u00030\u00030\u00031\u00031\u00032\u00032\u00033\u00033\u00034\u0003",
    "4\u00035\u00035\u00036\u00036\u00037\u00037\u00038\u00038\u00039\u0003",
    "9\u0003:\u0003:\u0004\u00f3\u0103\u0002;\u0003\u0003\u0005\u0004\u0007",
    "\u0005\t\u0006\u000b\u0007\r\b\u000f\t\u0011\n\u0013\u000b\u0015\f\u0017",
    "\r\u0019\u000e\u001b\u000f\u001d\u0010\u001f\u0011!\u0012#\u0013%\u0014",
    "\'\u0015)\u0016+\u0017-\u0018/\u00191\u001a3\u001b5\u001c7\u001d9\u0002",
    ";\u0002=\u0002?\u0002A\u0002C\u0002E\u0002G\u0002I\u0002K\u0002M\u0002",
    "O\u0002Q\u0002S\u0002U\u0002W\u0002Y\u0002[\u0002]\u0002_\u0002a\u0002",
    "c\u0002e\u0002g\u0002i\u0002k\u0002m\u0002o\u0002q\u0002s\u0002\u0003",
    "\u0002\"\f\u0002##&\',-//1<>@C\\aac|\u0080\u0080\u0004\u0002\u000b\u000b",
    "\"\"\u0006\u0002\f\f\u000f\u000f$$^^\t\u0002$$22^^ggppttvv\u0004\u0002",
    "CCcc\u0004\u0002DDdd\u0004\u0002EEee\u0004\u0002FFff\u0004\u0002GGg",
    "g\u0004\u0002HHhh\u0004\u0002IIii\u0004\u0002JJjj\u0004\u0002KKkk\u0004",
    "\u0002LLll\u0004\u0002MMmm\u0004\u0002NNnn\u0004\u0002OOoo\u0004\u0002",
    "PPpp\u0004\u0002QQqq\u0004\u0002RRrr\u0004\u0002SSss\u0004\u0002TTt",
    "t\u0004\u0002UUuu\u0004\u0002VVvv\u0004\u0002WWww\u0004\u0002XXxx\u0004",
    "\u0002YYyy\u0004\u0002ZZzz\u0004\u0002[[{{\u0004\u0002\\\\||\u0004\u0002",
    "C\\c|\u0003\u00022;\u0002\u0147\u0002\u0003\u0003\u0002\u0002\u0002",
    "\u0002\u0005\u0003\u0002\u0002\u0002\u0002\u0007\u0003\u0002\u0002\u0002",
    "\u0002\t\u0003\u0002\u0002\u0002\u0002\u000b\u0003\u0002\u0002\u0002",
    "\u0002\r\u0003\u0002\u0002\u0002\u0002\u000f\u0003\u0002\u0002\u0002",
    "\u0002\u0011\u0003\u0002\u0002\u0002\u0002\u0013\u0003\u0002\u0002\u0002",
    "\u0002\u0015\u0003\u0002\u0002\u0002\u0002\u0017\u0003\u0002\u0002\u0002",
    "\u0002\u0019\u0003\u0002\u0002\u0002\u0002\u001b\u0003\u0002\u0002\u0002",
    "\u0002\u001d\u0003\u0002\u0002\u0002\u0002\u001f\u0003\u0002\u0002\u0002",
    "\u0002!\u0003\u0002\u0002\u0002\u0002#\u0003\u0002\u0002\u0002\u0002",
    "%\u0003\u0002\u0002\u0002\u0002\'\u0003\u0002\u0002\u0002\u0002)\u0003",
    "\u0002\u0002\u0002\u0002+\u0003\u0002\u0002\u0002\u0002-\u0003\u0002",
    "\u0002\u0002\u0002/\u0003\u0002\u0002\u0002\u00021\u0003\u0002\u0002",
    "\u0002\u00023\u0003\u0002\u0002\u0002\u00025\u0003\u0002\u0002\u0002",
    "\u00027\u0003\u0002\u0002\u0002\u0003u\u0003\u0002\u0002\u0002\u0005",
    "w\u0003\u0002\u0002\u0002\u0007y\u0003\u0002\u0002\u0002\t}\u0003\u0002",
    "\u0002\u0002\u000b\u007f\u0003\u0002\u0002\u0002\r\u0081\u0003\u0002",
    "\u0002\u0002\u000f\u0085\u0003\u0002\u0002\u0002\u0011\u008a\u0003\u0002",
    "\u0002\u0002\u0013\u0090\u0003\u0002\u0002\u0002\u0015\u0098\u0003\u0002",
    "\u0002\u0002\u0017\u009b\u0003\u0002\u0002\u0002\u0019\u00a2\u0003\u0002",
    "\u0002\u0002\u001b\u00a5\u0003\u0002\u0002\u0002\u001d\u00ab\u0003\u0002",
    "\u0002\u0002\u001f\u00b1\u0003\u0002\u0002\u0002!\u00b8\u0003\u0002",
    "\u0002\u0002#\u00bd\u0003\u0002\u0002\u0002%\u00c3\u0003\u0002\u0002",
    "\u0002\'\u00c7\u0003\u0002\u0002\u0002)\u00ca\u0003\u0002\u0002\u0002",
    "+\u00d2\u0003\u0002\u0002\u0002-\u00df\u0003\u0002\u0002\u0002/\u00e9",
    "\u0003\u0002\u0002\u00021\u00ed\u0003\u0002\u0002\u00023\u00fc\u0003",
    "\u0002\u0002\u00025\u010b\u0003\u0002\u0002\u00027\u0112\u0003\u0002",
    "\u0002\u00029\u011c\u0003\u0002\u0002\u0002;\u011e\u0003\u0002\u0002",
    "\u0002=\u0120\u0003\u0002\u0002\u0002?\u0122\u0003\u0002\u0002\u0002",
    "A\u0124\u0003\u0002\u0002\u0002C\u0126\u0003\u0002\u0002\u0002E\u0128",
    "\u0003\u0002\u0002\u0002G\u012a\u0003\u0002\u0002\u0002I\u012c\u0003",
    "\u0002\u0002\u0002K\u012e\u0003\u0002\u0002\u0002M\u0130\u0003\u0002",
    "\u0002\u0002O\u0132\u0003\u0002\u0002\u0002Q\u0134\u0003\u0002\u0002",
    "\u0002S\u0136\u0003\u0002\u0002\u0002U\u0138\u0003\u0002\u0002\u0002",
    "W\u013a\u0003\u0002\u0002\u0002Y\u013c\u0003\u0002\u0002\u0002[\u013e",
    "\u0003\u0002\u0002\u0002]\u0140\u0003\u0002\u0002\u0002_\u0142\u0003",
    "\u0002\u0002\u0002a\u0144\u0003\u0002\u0002\u0002c\u0146\u0003\u0002",
    "\u0002\u0002e\u0148\u0003\u0002\u0002\u0002g\u014a\u0003\u0002\u0002",
    "\u0002i\u014c\u0003\u0002\u0002\u0002k\u014e\u0003\u0002\u0002\u0002",
    "m\u0150\u0003\u0002\u0002\u0002o\u0152\u0003\u0002\u0002\u0002q\u0154",
    "\u0003\u0002\u0002\u0002s\u0156\u0003\u0002\u0002\u0002uv\u0007*\u0002",
    "\u0002v\u0004\u0003\u0002\u0002\u0002wx\u0007+\u0002\u0002x\u0006\u0003",
    "\u0002\u0002\u0002yz\u0007\"\u0002\u0002z{\u00071\u0002\u0002{|\u0007",
    "\"\u0002\u0002|\b\u0003\u0002\u0002\u0002}~\u00070\u0002\u0002~\n\u0003",
    "\u0002\u0002\u0002\u007f\u0080\u0007)\u0002\u0002\u0080\f\u0003\u0002",
    "\u0002\u0002\u0081\u0082\u0005=\u001f\u0002\u0082\u0083\u0005W,\u0002",
    "\u0083\u0084\u0005C\"\u0002\u0084\u000e\u0003\u0002\u0002\u0002\u0085",
    "\u0086\u0005A!\u0002\u0086\u0087\u0005Y-\u0002\u0087\u0088\u0005W,\u0002",
    "\u0088\u0089\u0005C\"\u0002\u0089\u0010\u0003\u0002\u0002\u0002\u008a",
    "\u008b\u0005C\"\u0002\u008b\u008c\u0005E#\u0002\u008c\u008d\u0005G$",
    "\u0002\u008d\u008e\u0005e3\u0002\u008e\u008f\u0005W,\u0002\u008f\u0012",
    "\u0003\u0002\u0002\u0002\u0090\u0091\u0005G$\u0002\u0091\u0092\u0005",
    "Y-\u0002\u0092\u0093\u0005_0\u0002\u0093\u0094\u0005E#\u0002\u0094\u0095",
    "\u0005=\u001f\u0002\u0095\u0096\u0005A!\u0002\u0096\u0097\u0005K&\u0002",
    "\u0097\u0014\u0003\u0002\u0002\u0002\u0098\u0099\u0005M\'\u0002\u0099",
    "\u009a\u0005G$\u0002\u009a\u0016\u0003\u0002\u0002\u0002\u009b\u009c",
    "\u0005S*\u0002\u009c\u009d\u0005=\u001f\u0002\u009d\u009e\u0005U+\u0002",
    "\u009e\u009f\u0005? \u0002\u009f\u00a0\u0005C\"\u0002\u00a0\u00a1\u0005",
    "=\u001f\u0002\u00a1\u0018\u0003\u0002\u0002\u0002\u00a2\u00a3\u0005",
    "Y-\u0002\u00a3\u00a4\u0005_0\u0002\u00a4\u001a\u0003\u0002\u0002\u0002",
    "\u00a5\u00a6\u0005[.\u0002\u00a6\u00a7\u0005_0\u0002\u00a7\u00a8\u0005",
    "Y-\u0002\u00a8\u00a9\u0005I%\u0002\u00a9\u00aa\u0005W,\u0002\u00aa\u001c",
    "\u0003\u0002\u0002\u0002\u00ab\u00ac\u0005]/\u0002\u00ac\u00ad\u0005",
    "e3\u0002\u00ad\u00ae\u0005Y-\u0002\u00ae\u00af\u0005c2\u0002\u00af\u00b0",
    "\u0005E#\u0002\u00b0\u001e\u0003\u0002\u0002\u0002\u00b1\u00b2\u0005",
    "_0\u0002\u00b2\u00b3\u0005E#\u0002\u00b3\u00b4\u0005[.\u0002\u00b4\u00b5",
    "\u0005E#\u0002\u00b5\u00b6\u0005=\u001f\u0002\u00b6\u00b7\u0005c2\u0002",
    "\u00b7 \u0003\u0002\u0002\u0002\u00b8\u00b9\u0005a1\u0002\u00b9\u00ba",
    "\u0005E#\u0002\u00ba\u00bb\u0005c2\u0002\u00bb\u00bc\u0005]/\u0002\u00bc",
    "\"\u0003\u0002\u0002\u0002\u00bd\u00be\u0005i5\u0002\u00be\u00bf\u0005",
    "K&\u0002\u00bf\u00c0\u0005M\'\u0002\u00c0\u00c1\u0005S*\u0002\u00c1",
    "\u00c2\u0005E#\u0002\u00c2$\u0003\u0002\u0002\u0002\u00c3\u00c4\u0005",
    "W,\u0002\u00c4\u00c5\u0005M\'\u0002\u00c5\u00c6\u0005S*\u0002\u00c6",
    "&\u0003\u0002\u0002\u0002\u00c7\u00c8\u0005c2\u0002\u00c8(\u0003\u0002",
    "\u0002\u0002\u00c9\u00cb\u0007/\u0002\u0002\u00ca\u00c9\u0003\u0002",
    "\u0002\u0002\u00ca\u00cb\u0003\u0002\u0002\u0002\u00cb\u00cd\u0003\u0002",
    "\u0002\u0002\u00cc\u00ce\u0005s:\u0002\u00cd\u00cc\u0003\u0002\u0002",
    "\u0002\u00ce\u00cf\u0003\u0002\u0002\u0002\u00cf\u00cd\u0003\u0002\u0002",
    "\u0002\u00cf\u00d0\u0003\u0002\u0002\u0002\u00d0*\u0003\u0002\u0002",
    "\u0002\u00d1\u00d3\u0007/\u0002\u0002\u00d2\u00d1\u0003\u0002\u0002",
    "\u0002\u00d2\u00d3\u0003\u0002\u0002\u0002\u00d3\u00d5\u0003\u0002\u0002",
    "\u0002\u00d4\u00d6\u0005s:\u0002\u00d5\u00d4\u0003\u0002\u0002\u0002",
    "\u00d6\u00d7\u0003\u0002\u0002\u0002\u00d7\u00d5\u0003\u0002\u0002\u0002",
    "\u00d7\u00d8\u0003\u0002\u0002\u0002\u00d8\u00d9\u0003\u0002\u0002\u0002",
    "\u00d9\u00db\u00070\u0002\u0002\u00da\u00dc\u0005s:\u0002\u00db\u00da",
    "\u0003\u0002\u0002\u0002\u00dc\u00dd\u0003\u0002\u0002\u0002\u00dd\u00db",
    "\u0003\u0002\u0002\u0002\u00dd\u00de\u0003\u0002\u0002\u0002\u00de,",
    "\u0003\u0002\u0002\u0002\u00df\u00e3\u0007$\u0002\u0002\u00e0\u00e2",
    "\u00059\u001d\u0002\u00e1\u00e0\u0003\u0002\u0002\u0002\u00e2\u00e5",
    "\u0003\u0002\u0002\u0002\u00e3\u00e1\u0003\u0002\u0002\u0002\u00e3\u00e4",
    "\u0003\u0002\u0002\u0002\u00e4\u00e6\u0003\u0002\u0002\u0002\u00e5\u00e3",
    "\u0003\u0002\u0002\u0002\u00e6\u00e7\u0007$\u0002\u0002\u00e7.\u0003",
    "\u0002\u0002\u0002\u00e8\u00ea\t\u0002\u0002\u0002\u00e9\u00e8\u0003",
    "\u0002\u0002\u0002\u00ea\u00eb\u0003\u0002\u0002\u0002\u00eb\u00e9\u0003",
    "\u0002\u0002\u0002\u00eb\u00ec\u0003\u0002\u0002\u0002\u00ec0\u0003",
    "\u0002\u0002\u0002\u00ed\u00ee\u0007=\u0002\u0002\u00ee\u00ef\u0007",
    "~\u0002\u0002\u00ef\u00f3\u0003\u0002\u0002\u0002\u00f0\u00f2\u000b",
    "\u0002\u0002\u0002\u00f1\u00f0\u0003\u0002\u0002\u0002\u00f2\u00f5\u0003",
    "\u0002\u0002\u0002\u00f3\u00f4\u0003\u0002\u0002\u0002\u00f3\u00f1\u0003",
    "\u0002\u0002\u0002\u00f4\u00f6\u0003\u0002\u0002\u0002\u00f5\u00f3\u0003",
    "\u0002\u0002\u0002\u00f6\u00f7\u0007~\u0002\u0002\u00f7\u00f8\u0007",
    "=\u0002\u0002\u00f8\u00f9\u0003\u0002\u0002\u0002\u00f9\u00fa\b\u0019",
    "\u0002\u0002\u00fa2\u0003\u0002\u0002\u0002\u00fb\u00fd\u0007=\u0002",
    "\u0002\u00fc\u00fb\u0003\u0002\u0002\u0002\u00fd\u00fe\u0003\u0002\u0002",
    "\u0002\u00fe\u00fc\u0003\u0002\u0002\u0002\u00fe\u00ff\u0003\u0002\u0002",
    "\u0002\u00ff\u0103\u0003\u0002\u0002\u0002\u0100\u0102\u000b\u0002\u0002",
    "\u0002\u0101\u0100\u0003\u0002\u0002\u0002\u0102\u0105\u0003\u0002\u0002",
    "\u0002\u0103\u0104\u0003\u0002\u0002\u0002\u0103\u0101\u0003\u0002\u0002",
    "\u0002\u0104\u0106\u0003\u0002\u0002\u0002\u0105\u0103\u0003\u0002\u0002",
    "\u0002\u0106\u0107\u00055\u001b\u0002\u0107\u0108\u0003\u0002\u0002",
    "\u0002\u0108\u0109\b\u001a\u0002\u0002\u01094\u0003\u0002\u0002\u0002",
    "\u010a\u010c\u0007\u000f\u0002\u0002\u010b\u010a\u0003\u0002\u0002\u0002",
    "\u010b\u010c\u0003\u0002\u0002\u0002\u010c\u010d\u0003\u0002\u0002\u0002",
    "\u010d\u010e\u0007\f\u0002\u0002\u010e\u010f\u0003\u0002\u0002\u0002",
    "\u010f\u0110\b\u001b\u0002\u0002\u01106\u0003\u0002\u0002\u0002\u0111",
    "\u0113\t\u0003\u0002\u0002\u0112\u0111\u0003\u0002\u0002\u0002\u0113",
    "\u0114\u0003\u0002\u0002\u0002\u0114\u0112\u0003\u0002\u0002\u0002\u0114",
    "\u0115\u0003\u0002\u0002\u0002\u0115\u0116\u0003\u0002\u0002\u0002\u0116",
    "\u0117\b\u001c\u0002\u0002\u01178\u0003\u0002\u0002\u0002\u0118\u011d",
    "\n\u0004\u0002\u0002\u0119\u011a\u0007^\u0002\u0002\u011a\u011d\u0005",
    ";\u001e\u0002\u011b\u011d\u00055\u001b\u0002\u011c\u0118\u0003\u0002",
    "\u0002\u0002\u011c\u0119\u0003\u0002\u0002\u0002\u011c\u011b\u0003\u0002",
    "\u0002\u0002\u011d:\u0003\u0002\u0002\u0002\u011e\u011f\t\u0005\u0002",
    "\u0002\u011f<\u0003\u0002\u0002\u0002\u0120\u0121\t\u0006\u0002\u0002",
    "\u0121>\u0003\u0002\u0002\u0002\u0122\u0123\t\u0007\u0002\u0002\u0123",
    "@\u0003\u0002\u0002\u0002\u0124\u0125\t\b\u0002\u0002\u0125B\u0003\u0002",
    "\u0002\u0002\u0126\u0127\t\t\u0002\u0002\u0127D\u0003\u0002\u0002\u0002",
    "\u0128\u0129\t\n\u0002\u0002\u0129F\u0003\u0002\u0002\u0002\u012a\u012b",
    "\t\u000b\u0002\u0002\u012bH\u0003\u0002\u0002\u0002\u012c\u012d\t\f",
    "\u0002\u0002\u012dJ\u0003\u0002\u0002\u0002\u012e\u012f\t\r\u0002\u0002",
    "\u012fL\u0003\u0002\u0002\u0002\u0130\u0131\t\u000e\u0002\u0002\u0131",
    "N\u0003\u0002\u0002\u0002\u0132\u0133\t\u000f\u0002\u0002\u0133P\u0003",
    "\u0002\u0002\u0002\u0134\u0135\t\u0010\u0002\u0002\u0135R\u0003\u0002",
    "\u0002\u0002\u0136\u0137\t\u0011\u0002\u0002\u0137T\u0003\u0002\u0002",
    "\u0002\u0138\u0139\t\u0012\u0002\u0002\u0139V\u0003\u0002\u0002\u0002",
    "\u013a\u013b\t\u0013\u0002\u0002\u013bX\u0003\u0002\u0002\u0002\u013c",
    "\u013d\t\u0014\u0002\u0002\u013dZ\u0003\u0002\u0002\u0002\u013e\u013f",
    "\t\u0015\u0002\u0002\u013f\\\u0003\u0002\u0002\u0002\u0140\u0141\t\u0016",
    "\u0002\u0002\u0141^\u0003\u0002\u0002\u0002\u0142\u0143\t\u0017\u0002",
    "\u0002\u0143`\u0003\u0002\u0002\u0002\u0144\u0145\t\u0018\u0002\u0002",
    "\u0145b\u0003\u0002\u0002\u0002\u0146\u0147\t\u0019\u0002\u0002\u0147",
    "d\u0003\u0002\u0002\u0002\u0148\u0149\t\u001a\u0002\u0002\u0149f\u0003",
    "\u0002\u0002\u0002\u014a\u014b\t\u001b\u0002\u0002\u014bh\u0003\u0002",
    "\u0002\u0002\u014c\u014d\t\u001c\u0002\u0002\u014dj\u0003\u0002\u0002",
    "\u0002\u014e\u014f\t\u001d\u0002\u0002\u014fl\u0003\u0002\u0002\u0002",
    "\u0150\u0151\t\u001e\u0002\u0002\u0151n\u0003\u0002\u0002\u0002\u0152",
    "\u0153\t\u001f\u0002\u0002\u0153p\u0003\u0002\u0002\u0002\u0154\u0155",
    "\t \u0002\u0002\u0155r\u0003\u0002\u0002\u0002\u0156\u0157\t!\u0002",
    "\u0002\u0157t\u0003\u0002\u0002\u0002\u0010\u0002\u00ca\u00cf\u00d2",
    "\u00d7\u00dd\u00e3\u00eb\u00f3\u00fe\u0103\u010b\u0114\u011c\u0003\b",
    "\u0002\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function VeLispLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

VeLispLexer.prototype = Object.create(antlr4.Lexer.prototype);
VeLispLexer.prototype.constructor = VeLispLexer;

Object.defineProperty(VeLispLexer.prototype, "atn", {
        get : function() {
                return atn;
        }
});

VeLispLexer.EOF = antlr4.Token.EOF;
VeLispLexer.T__0 = 1;
VeLispLexer.T__1 = 2;
VeLispLexer.T__2 = 3;
VeLispLexer.T__3 = 4;
VeLispLexer.T__4 = 5;
VeLispLexer.AND = 6;
VeLispLexer.COND = 7;
VeLispLexer.DEFUN = 8;
VeLispLexer.FOREACH = 9;
VeLispLexer.IF = 10;
VeLispLexer.LAMBDA = 11;
VeLispLexer.OR = 12;
VeLispLexer.PROGN = 13;
VeLispLexer.QUOTE = 14;
VeLispLexer.REPEAT = 15;
VeLispLexer.SETQ = 16;
VeLispLexer.WHILE = 17;
VeLispLexer.NIL = 18;
VeLispLexer.TRU = 19;
VeLispLexer.INT = 20;
VeLispLexer.REAL = 21;
VeLispLexer.STR = 22;
VeLispLexer.ID = 23;
VeLispLexer.COMMENT = 24;
VeLispLexer.LINE_COMMENT = 25;
VeLispLexer.NEWLINE = 26;
VeLispLexer.WHITESPACE = 27;

VeLispLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

VeLispLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

VeLispLexer.prototype.literalNames = [ null, "'('", "')'", "' / '", "'.'", 
                                       "'''" ];

VeLispLexer.prototype.symbolicNames = [ null, null, null, null, null, null, 
                                        "AND", "COND", "DEFUN", "FOREACH", 
                                        "IF", "LAMBDA", "OR", "PROGN", "QUOTE", 
                                        "REPEAT", "SETQ", "WHILE", "NIL", 
                                        "TRU", "INT", "REAL", "STR", "ID", 
                                        "COMMENT", "LINE_COMMENT", "NEWLINE", 
                                        "WHITESPACE" ];

VeLispLexer.prototype.ruleNames = [ "T__0", "T__1", "T__2", "T__3", "T__4", 
                                    "AND", "COND", "DEFUN", "FOREACH", "IF", 
                                    "LAMBDA", "OR", "PROGN", "QUOTE", "REPEAT", 
                                    "SETQ", "WHILE", "NIL", "TRU", "INT", 
                                    "REAL", "STR", "ID", "COMMENT", "LINE_COMMENT", 
                                    "NEWLINE", "WHITESPACE", "CHAR", "ESCAPE_SEQ", 
                                    "A", "B", "C", "D", "E", "F", "G", "H", 
                                    "I", "J", "K", "L", "M", "N", "O", "P", 
                                    "Q", "R", "S", "T", "U", "V", "W", "X", 
                                    "Y", "Z", "LETTER", "DIGIT" ];

VeLispLexer.prototype.grammarFileName = "VeLisp.g4";


exports.VeLispLexer = VeLispLexer;

