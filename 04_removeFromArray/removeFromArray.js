const removeFromArray = function(array, ...val) {
  val.forEach((args) => {
    let index = array.indexOf(args);
    if(index > -1)
      array.splice(index, 1);
  });

  return array;

}

// Do not edit below this line
module.exports = removeFromArray;