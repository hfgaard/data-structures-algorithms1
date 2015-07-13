var frequency2 = function(array) {
  var hash_letter = {};
  var arr = array.join("");
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] in hash_letter) {
      hash_letter[arr[i]]++;
    } else if (arr[i] !== "") {
      hash_letter[arr[i]] = 1;
    }
  }
  var highestCount = 0;
  var highestLetter = [];
  for (var letter in hash_letter) {
    if (hash_letter[letter] > highestCount) {
      highestLetter = [letter];
      highestCount = hash_letter[letter];
    } else if (hash_letter[letter] === highestCount) {
      highestLetter.push(hash_letter[letter]);
    }
  }
  return highestLetter;
};

module.exports = frequency2;
