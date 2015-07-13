var unique = function(array) {
  if (array.length === 0) {
    return null;
  }
  var array2 = [];
  var hash_table = {};
  for (var i = 0; i < array.length; i++) {
    if (!(array[i] in hash_table)) {
      array2.push(array[i]);
      hash_table[array[i]] = null;
    } 
  }
  return array2;
};

module.exports = unique;
