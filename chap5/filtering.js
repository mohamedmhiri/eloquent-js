var ANCESTRY_FILE = require('./ancestry');
var ancestry = JSON.parse(ANCESTRY_FILE);
/* first trial*/
/*function eighteenthCentury(){

    return ancestry.filter(person =>( person.born>1799 && person.died< 1900));

}
console.log(eighteenthCentury());
*/
/* second trial*/
/*function eighteenthCentury(person){
    return ( ( person.born > 1799 && person.born < 1900 ) || ( person.died < 1900 && person.died > 1799 ) );
}
const livedInEighteenthCentury = ancestry.filter( eighteenthCentury );

console.log(livedInEighteenthCentury);
*/
/*average age new style*/
var sum = [];
function average( array ){
    function sum( a, b ){   return a + b;  }
    return array.reduce( sum ) / array.length;
}

function age( person ){ return person.died - person.born ; }

/*average age for style*/
/*var persons = {
    number : 0,
    sumAges : 0
};
function averageAge( people){
    people.forEach(function(element) {
        persons.number ++;
        persons.sumAges += ( element.died - element.born );
    }, this);
    return persons;
}
persons = averageAge( ancestry );
console.log(`average age is ${Math.floor( persons.sumAges / persons.number  )} `);
*/
console.log( `${average( ancestry.map(age) )}` );
