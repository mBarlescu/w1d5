var storage = []

module.exports = {
  store: function (a){
    storage.push(a);
    return storage;
  },
  i: 1,
  storage: "dogs are the best people",
};

// console.log(storage)
// store(1);
// console.log(storage)