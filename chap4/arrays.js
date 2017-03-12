var tasks = [];
//insert at the end of tasks
tasks.push ( 1 );
//remove from the end of tasks
tasks.pop ();
//insert at the start of tasks
tasks.unshift(2);
tasks.unshift(2);
tasks.unshift(1);
tasks.unshift(3);

console.log(tasks.indexOf(1));
console.log(tasks.lastIndexOf(2));
//removes the index's element of an array 
function remove(array, index) {
    return array.slice(0, index)
    .concat(array.slice(index + 1));
}
tasks=remove(tasks,1);
console.log(tasks);