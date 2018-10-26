var storage = [3,5,11,7,22]
// console.log(storage)
var sort = storage.sort(function(a,b){
  return a-b
});

console.log(sort)

module.exports = {
  store: function (a){
    storage.push(a);
    // return storage;
  },
  sort: function(a,b){
      // return a-b;
    }
  }
// console.log(storage)



// console.log(storage)
// store(1);
// console.log(storage)