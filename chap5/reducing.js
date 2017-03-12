/**
 * Created by mohamed on 2017/03/05.
 */
////////////////////////////////////////
////////////// classic reducing////////
///////////////////////////////////////
var begin = Date.now ();

function reduce(array, combine, start) {
    var current = start;
    for (var i = 0; i < array.length; i++)
        current = combine(current, array[i]);
    return current;
}
console.log(reduce([1, 2, 3, 4], function(a, b) {
    return a + b;
}, 0));
var end = Date.now ();
console.log ( 'classic reducing took :' + ( end - begin ));


/////////////////////////////////////////////////////
/////////////////////array predefined reduce function
////////////////////////////////////////////////////
var begin = Date.now ();

function sum ( a, b ) {
    return a + b;
}

console.log ( [ 1, 2, 3, 4 ].reduce( sum, 0) );
var end = Date.now ();
console.log ( 'predefined reduce function took :' + ( end - begin ));
