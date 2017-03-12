// var events =[];
// var max = 0;
// function add( element ){
//     events.push( element );
// }
// function maxi ( element ){
//     if ( element > max  )
//         max = element;
// }
// function forEach(array, action) {
//     for (var i = 0; i < array.length; i++)
//         action(array[i]);
// }
// // forEach(["Wampeter", "Foma", "Granfalloon"], max);
// // console.log( events );
// //////////////////////
// forEach ( [ 1, 7, 8, 15, 100 ], maxi );
// console.log ( max );
//////////////////
/////////////////////
// function noisy(f) {
// return function(arg) {
// console.log("calling with", arg);
// var val = f(arg);
// console.log("called with", arg, "- got", val);
// return val;
// };
// }
// noisy(Boolean)(0);

////////array forEach predefined function

[ 1, 2, 3, 4, 5 ] .forEach( function ( element ) {
        console.log ( element );
    }

);