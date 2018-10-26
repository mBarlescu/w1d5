var storage = []

module.exports = {
  store: function (a){
    storage.push(a);
  },
};

// console.log(storage)
// store(1);
// console.log(storage)