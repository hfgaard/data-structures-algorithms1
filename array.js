Array.prototype.push1 = function(item) {
  this[this.length] = item;
  return this.length;
};

Array.prototype.pop1 = function() {
  var item = this[this.length];
  delete this[this.length];
  return item;
};

Array.prototype.shift1 = function() {
  var item = this[0];
  for (var i = 1; i < this.length; i++) {
    this[i - 1] = this[i];
  }
  delete this[this.length];
  return item;
};

Array.prototype.unshift1 = function(item) {
  for (var i = this.length; i > 0; i--) {
    this[i] = this[i - 1];
  }
  this[0] = item;
  return this.length;
};

module.exports = Array;
