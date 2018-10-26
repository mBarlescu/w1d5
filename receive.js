var receive = require('./exportPractice');

var x = receive.store(8);
receive.store(9);
console.log(x);
receive.store(2);
console.log(x);
x.sort();
console.log(x);





