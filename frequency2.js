var frequency2 = function(array) {
  var hash_letter = {};
  array.join("");
  for (var i = 0; i < array.length; i++) {
    if (array[i] in hash_letter) {
      hash_letter[array[i]]++;
    } else {
      hash_letter[array[i]] = 1;
    }
  }
  var highestCount = 0;
  var highestLetter = [];
  for (letter in hash_letter) {
    if (hash_letter[letter] > highestCount) {
      highestLetter = [letter];
      highestCount = hash_letter[letter];
    } else if (hash_letter[letter] === highestCount) {
      highestLetter.push(hash_letter[letter]);
    }
  }
};

module.exports = frequency2;
