const without = function(source, itemsToRemove){
  let array = []
  for (var i = 0; i < source.length; ++i) {
      if (source[i] !== itemsToRemove[i]) {
        array.push(source[i]);
      }
    }
  return array;
};

module.exports = without;