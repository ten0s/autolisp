// Generated from grammar/VeLisp.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by VeLispParser.

function VeLispVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

VeLispVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
VeLispVisitor.prototype.constructor = VeLispVisitor;

// Visit a parse tree produced by VeLispParser#file.
VeLispVisitor.prototype.visitFile = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VeLispParser#and.
VeLispVisitor.prototype.visitAnd = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VeLispParser#cond.
VeLispVisitor.prototype.visitCond = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VeLispParser#defun.
VeLispVisitor.prototype.visitDefun = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VeLispParser#foreach.
VeLispVisitor.prototype.visitForeach = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VeLispParser#if.
VeLispVisitor.prototype.visitIf = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VeLispParser#or.
VeLispVisitor.prototype.visitOr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VeLispParser#progn.
VeLispVisitor.prototype.visitProgn = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VeLispParser#repeat.
VeLispVisitor.prototype.visitRepeat = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VeLispParser#setQ.
VeLispVisitor.prototype.visitSetQ = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VeLispParser#while.
VeLispVisitor.prototype.visitWhile = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VeLispParser#princ.
VeLispVisitor.prototype.visitPrinc = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VeLispParser#fun.
VeLispVisitor.prototype.visitFun = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VeLispParser#nil.
VeLispVisitor.prototype.visitNil = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VeLispParser#tru.
VeLispVisitor.prototype.visitTru = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VeLispParser#int.
VeLispVisitor.prototype.visitInt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VeLispParser#real.
VeLispVisitor.prototype.visitReal = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VeLispParser#str.
VeLispVisitor.prototype.visitStr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VeLispParser#id.
VeLispVisitor.prototype.visitId = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VeLispParser#sym.
VeLispVisitor.prototype.visitSym = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VeLispParser#condTestResult.
VeLispVisitor.prototype.visitCondTestResult = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VeLispParser#condTest.
VeLispVisitor.prototype.visitCondTest = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VeLispParser#condResult.
VeLispVisitor.prototype.visitCondResult = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VeLispParser#defunName.
VeLispVisitor.prototype.visitDefunName = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VeLispParser#defunParam.
VeLispVisitor.prototype.visitDefunParam = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VeLispParser#defunLocal.
VeLispVisitor.prototype.visitDefunLocal = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VeLispParser#foreachName.
VeLispVisitor.prototype.visitForeachName = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VeLispParser#foreachList.
VeLispVisitor.prototype.visitForeachList = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VeLispParser#ifTest.
VeLispVisitor.prototype.visitIfTest = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VeLispParser#ifThen.
VeLispVisitor.prototype.visitIfThen = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VeLispParser#ifElse.
VeLispVisitor.prototype.visitIfElse = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VeLispParser#repeatNum.
VeLispVisitor.prototype.visitRepeatNum = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VeLispParser#setqNameExpr.
VeLispVisitor.prototype.visitSetqNameExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VeLispParser#whileTest.
VeLispVisitor.prototype.visitWhileTest = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VeLispParser#funArg.
VeLispVisitor.prototype.visitFunArg = function(ctx) {
  return this.visitChildren(ctx);
};



exports.VeLispVisitor = VeLispVisitor;