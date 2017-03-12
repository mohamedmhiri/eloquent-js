/**
 * Created by mohamed on 2017/03/05.
 */
'use strict';
////////////////////////////////////////
//Using a Loop to Demonstrate Filtering
///////////////////////////////////////
const animals = ["cat","dog","fish"];

// var begin = Date.now ();
// var threeLetterAnimals = [];
// for ( let count = 0; count < animals.length; count ++ ){
//     if ( animals[count].length === 3 ) {
//         threeLetterAnimals.push ( animals[count] );
//     }
// }
// console.log ( threeLetterAnimals ); // ["cat", "dog"]
// var end = Date.now ();
// console.log ( `Using a Loop to Demonstrate Filtering took :${ end - begin }`);
// ///////////////////////////////////////
// ////////////////Using the Filter Method
// ///////////////////////////////////////
// begin = Date.now ();
// var resAnimals = animals.filter ( function ( animal ) {
//     return animal.length === 3;
// });
// console.log ( resAnimals ); // ["cat", "dog"]
// end = Date.now ();
// console.log ( `Using the Filter Method took :${ end - begin }`);
// ///////////////////////////////////////
// //////////Other Ways to Format a Filter
// ///////////////////////////////////////
// begin = Date.now ();
// function exactlyThree(word) {
//     return word.length === 3;
// }
// const otherAnimals = animals.filter ( exactlyThree );
// console.log ( otherAnimals ); // ["cat", "dog"]
// end = Date.now ();
// console.log ( `Other Ways to Format a Filter took :${ end - begin }`);
// ///////////////////////////////////////
// ////////////////////Quick Review of Map
// ///////////////////////////////////////
// const lengths = animals.map ( getLength );
// function getLength ( word ) {
//     return word.length;
// }
// console.log ( lengths ); //[3, 3, 4]
// ///////////////////////////////////////
// /////////////////Quick Review of Reduce
// ///////////////////////////////////////
// const total = animals.reduce ( addLength, 0 );
// function addLength ( sum, word ) {
//     return sum + word.length;
// }
// console.log ( total ); //10
///////////////////////////////////////
//Without using map, reduce, and filter
///////////////////////////////////////
let begin = Date.now ();
let threeLetterAnimalsArray = [];
let threeCharAnimals;
let item;
for ( let count = 0; count < animals.length; count ++ ){
    item = animals [ count ];
    if ( item.length === 3 ) {
        item = item.charAt ( 0 ).toUpperCase () + item.slice ( 1 );
        threeLetterAnimalsArray.push ( item );
    }
}
threeCharAnimals = threeLetterAnimalsArray.join ( "" );
console.log ( threeCharAnimals ); // "CatDog"
let end = Date.now ();
console.log ( `Without using map, reduce, and filter took :${ end - begin }`);
/////////////////////////////////////////
/////////Chaining Map, Reduce, and Filter
/////////////////////////////////////////
begin = Date.now ();
function studlyCaps ( words, word ) {
    return words + word;
}
function isThree ( word ) {
    return ( word.length === 3 );
}
function capitalize ( word ) {
    return word.charAt ( 0 ).toUpperCase () + word.slice ( 1 );
}
const threeLengthAnimals = animals
    .filter ( isThree )
    .map ( capitalize )
    .reduce ( studlyCaps );
console.log ( threeLengthAnimals ); // "CatDog"
end = Date.now ();
console.log ( `Chaining Map, Reduce, and Filter took :${ end - begin }`);