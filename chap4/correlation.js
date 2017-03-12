/**
 * Created by mohamed on 2017/03/04.
 */
var JOURNAL = require ( './data' );
function hasEvent (event, entry) {
    return entry.events.indexOf ( event ) != -1;
}
function tableFor ( event, journal ) {
    var table = [0, 0, 0, 0];
    for (var i = 0; i < journal.length; i++) {
        var entry = journal[i], index = 0;
        if ( hasEvent ( event, entry ) ) index += 1;
        if ( entry.squirrel ) index += 2;
        table[index] += 1;
    }
    return table;
}
var pizza_table = tableFor( 'pizza', JOURNAL );
var tched_table = tableFor( 'touched tree', JOURNAL );


function phi(table) {
    return (table[3] * table[0] - table[2] * table[1]) /
        Math.sqrt((table[2] + table[3]) *
            (table[0] + table[1]) *
            (table[1] + table[3]) *
            (table[0] + table[2]));
}

var pizza_phi = phi( pizza_table );
var tched_phi = phi( tched_table );


var map = {};
function storePhi( event, phi ) {
    map[ event ] = phi;
}
// storePhi( "pizza", pizza_phi );
// storePhi( "touched tree", tched_phi );
// console.log( map[ 'pizza' ] );
// // .0.69
// console.log( map[ 'touched tree' ] );
// . -0.081
function gatherCorrelations ( journal ) {
    var phis = {};
    for ( var entry = 0; entry < journal.length; entry++ ) {
        var events = journal[ entry ].events;
        for ( var i = 0; i < events.length; i++ ) {
            var event = events[ i ];
            if ( ! ( event in phis ) )
                phis[event] = phi ( tableFor ( event, journal ) );
        }
    }
    return phis;
}
var correlations = gatherCorrelations ( JOURNAL );
for ( var event in correlations ) {
    var correlation = correlations[ event ];
    if ( correlation > 0.1 || correlation < -0.1 )
        console.log ( event + ": " + correlation );
}

for ( var i = 0; i < JOURNAL.length; i++ ) {
    var entry = JOURNAL[i];
    if ( hasEvent ( "peanuts", entry ) && ! hasEvent ( "brushed teeth", entry ) )
        entry.events.push ( "peanut teeth" );
}
console.log ( phi ( tableFor ( "peanut teeth", JOURNAL ) ) );