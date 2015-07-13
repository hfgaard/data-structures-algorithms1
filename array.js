Array.prototype.push1 = function() {
  for (var i = 0; i < arguments.length; i++) {
    this[this.length] = arguments[i];
  }
  return this.length;
};

Array.prototype.pop1 = function() {
  var item = this[this.length - 1];
  delete this[this.length -1];
  return item;
};

Array.prototype.unshift1 = function() {
  for (var i = (arguments.length + this.length); i >= arguments.length + 1; i--) {
    this[i - 1] = this[i - arguments.length - 1];
  }
  for (var j = 0; j < arguments.length; j++) {
    this[j] = arguments[j];
  }
  return this.length;
};

Array.prototype.shift1 = function() {
  var item = this[0];
  for (var i = 1; i < this.length; i++) {
    this[i - 1] = this[i];
  }
  delete this[this.length - 1];
  return item;
};

module.exports = Array;
