/*(function() {
    function square(x) { return x * x; }
    var hundred = 100
    console.log(square(hundred))
})()*///the extra wrapping parentheses as a trick to force the
// function to be interpreted as an expression

// let squareTen = square(10)//ReferenceError: square is not defined

// console.log(squareTen)

// (function(exports) {
    var weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday",
        "Thursday", "Friday", "Saturday"];
//     exports.name = function(number) {
//         return names[number];
//     };
//     exports.number = function(name) {
//         return names.indexOf(name);
//     };
// })(this.weekDay = {});
// console.log(weekDay.name(weekDay.number("Saturday")));
// // . Saturday

function require(name) {
    var code = new Function("exports", readFile(name));
    var exports = {};
    code(exports);
    return exports;
}
console.log(require("weekDay").name(1));
// . Monday