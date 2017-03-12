/**
 * Created by mohamed on 2017/03/05.
 */
// var empty = {};
// console.log ( empty.toString );
// // . [Function: toString]
// console.log ( empty.toString () );
// // . [object Object]
//
// console.log ( Object.getPrototypeOf ( {} ) == Object.prototype );
// // . true
// console.log ( Object.getPrototypeOf ( Object.prototype ) );
// // . null
// console.log ( Object.getPrototypeOf ( isNaN ) == Function.prototype );
// // . true
// console.log ( Object.getPrototypeOf ( [] ) == Array.prototype );
// // . true

var protoRabbit = {
    speak: function ( line ) {
        console.log ( "The " + this.type + " rabbit says '" + line + "'" );
    },
    move: function ( distance ) {
        console.log ( "The " + this.type + " rabbit can jump up to " + distance + " meters !!!" );
    }
};
var killerRabbit = Object.create ( protoRabbit );
console.log ( Object.getPrototypeOf( killerRabbit ) );
killerRabbit.type = "killer";
killerRabbit.move ( 8 );
killerRabbit.speak ( "SKREEEE!" );
// . The killer rabbit says 'SKREEEE!'
function Rabbit ( type ) {
    this.type = type;
}
var killerRabbit = new Rabbit ( "killer" );
var blackRabbit = new Rabbit ( "black" );
console.log ( blackRabbit.type );
// . black
Rabbit.prototype.speak = function ( line ) {
    console.log ( "The " + this.type + " rabbit says '" + line + "'" );
};
blackRabbit.speak ( "Doom..." );

Rabbit.prototype.teeth = "small";
console.log ( killerRabbit.teeth );
// . small
killerRabbit.teeth = "long, sharp, and bloody";
console.log ( killerRabbit.teeth );
// . long, sharp, and bloody
console.log ( blackRabbit.teeth );
// . small
console.log ( Rabbit.prototype.teeth );
// . small
// console.log ( Object.getPrototypeOf( killerRabbit ) );

// console.log ( JSON.stringify ( killerRabbit ) );
///////////////////////////////////////////
/////best way to avoid prototype enumerable
////////////// and nonenumerable properties
//////////////////////////////////////////
var map = {}
for (var name in map) {
    if (map.hasOwnProperty(name)) {
// ... this is an own property
    }
}
var map = Object.create(null);
map["pizza"] = 0.069;
console.log("toString" in map);
// . false
console.log("pizza" in map);
// . true