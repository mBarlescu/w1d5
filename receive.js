var receive = require('./exportPractice');

var execute = process.argv.slice(2)
for(i=0;i < execute.length; i++){
  receive.store(Number(execute[i]))
}

var x = receive.getSort();
// x.push("HACKED!")
console.log(x)



// receive.store(5555)


// var x2 = receive.getSort();
// console.log(x2)


// var x = receive.store(8);
// receive.store(9);
// console.log(x);
// receive.store(2);
// console.log(x);
// x.sort();
// console.log(x);





