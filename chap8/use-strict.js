'use strict'
let x = 7
console.log(x)
// function y (p1, p1) {}//SyntaxError: Duplicate parameter name not allowed in this context
var obj = { name : "mohamed", age : 22 }
delete  obj.age
console.log(obj)
// delete  obj //SyntaxError: Delete of an unqualified identifier in strict mode.
