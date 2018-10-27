var storage = []
// console.log(storage)


// console.log(sort)

module.exports = {
  store: function (a){

    storage.push(a);
  },
  // getSort: function(a,b){
  //   console.log("shit fuck")
  //   return a - b
  // }
  getSort: function(){
    var sort = storage.sort(function(a,b){

      return a-b
    });

    return sort.slice();
  }
}
// console.log(storage)



// console.log(storage)
// store(1);
// console.log(storage)