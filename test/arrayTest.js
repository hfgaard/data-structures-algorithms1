var array = require('./array');

describe('array.js', function() {
  describe('push1', function() {
    it('will add 1 to the end of the array when passed 1', function() {
      var arr = [2, 4];
      expect(array.push1(1)).to.eql()
    });
  });
});
