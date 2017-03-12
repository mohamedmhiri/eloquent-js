//closure
/*function diff(substitutable) {
    return function(number) {
        return number - substitutable;
    };
}

var res = diff(2);
console.log(res(6));
console.log(res(5));*/

function findSolution(target) {
    function find(start, history) {
        if (start == target)
            return history;
        else if (start > target)
            return null;
        else
            return find(start + 5, "(" + history + " + 5)") ||
            find(start * 3, "(" + history + " * 3)");
    }
    return find(1, "1");
}
console.log(findSolution(119));
/*function primitives(input){
    var sqrt = Math.floor(input /2);
    function div(tmp){
        if(tmp >sqrt){
            return null;
        }else{
            
        }
    }
        
}*/
/*
function primitive(num){
    var tmp = 2;
    var res = '';
    while(tmp <= Math.floor( num/2 ) ){
        if( num % tmp ===0 ){
            res += ',' + tmp;
        }
        tmp++;
    }
    return res.length > 0 ? 'the division into factor of '+ num + ' : ' + res : num + ' is a prime number';
}
console.log(primitive(20));

*/